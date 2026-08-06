import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Register = () => {

  const { register } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "Student",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {

    if (!formData.name.trim())
      return "Full Name is required";

    if (!formData.email.trim())
      return "Email is required";

    if (!formData.password.trim())
      return "Password is required";

    if (formData.password.length < 3)
      return "Password must be at least 3 characters";

    return "";
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const validationError = validate();

    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {

      await register(
        formData.name,
        formData.email,
        formData.password,
        formData.role
      );

      setSuccess("Registration Successful!");

      setTimeout(() => {
        navigate("/login");
      }, 1500);

    }

    catch (err) {

      if (err.response) {
        setError(err.response.data.message);
      }

      else {
        setError("Cannot connect to backend server.");
      }

    }

    finally {

      setLoading(false);

    }

  };

  return (

    <div className="auth-container">

      <div className="auth-card">

        <h2>Create Account</h2>

        <p className="subtitle">
          Join the Student Management System
        </p>

        {error &&

          <div className="error">

            {error}

          </div>

        }

        {success &&

          <div className="success">

            {success}

          </div>

        }

        <form onSubmit={handleSubmit}>

          <label>Full Name</label>

          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
          />

          <label>Email Address</label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />

          <label>Password</label>

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />

          <label>Role</label>

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="Student">Student</option>
            <option value="Faculty">Faculty</option>
            <option value="Admin">Admin</option>
          </select>

          <button
            type="submit"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Register"}
          </button>

        </form>

        <div className="bottom-text">

          Already have an account?

          <Link to="/login">

            Login

          </Link>

        </div>

      </div>

    </div>

  );

};

export default Register;