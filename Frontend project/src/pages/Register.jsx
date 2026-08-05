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
    if (!formData.name.trim()) return "Name is required";
    if (!formData.email.trim()) return "Email is required";
    if (!formData.password.trim()) return "Password is required";
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
      const response = await register(
        formData.name,
        formData.email,
        formData.password,
        formData.role
      );

      console.log("Registration Response:", response);

      setSuccess("Registration Successful");

      setTimeout(() => {
        navigate("/login");
      }, 1000);

    } catch (err) {
      console.log("Registration Error:", err);

      if (err.response) {
        setError(err.response.data.message);
      } else {
        setError("Cannot connect to backend server");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Create Account</h2>

      {error && (
        <p style={{ color: "red" }}>
          {error}
        </p>
      )}

      {success && (
        <p style={{ color: "green" }}>
          {success}
        </p>
      )}

      <form onSubmit={handleSubmit}>

        <div>
          <label>Full Name</label>
          <br />
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <br />

        <div>
          <label>Email</label>
          <br />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <br />

        <div>
          <label>Password</label>
          <br />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <br />

        <div>
          <label>Role</label>
          <br />
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="Student">Student</option>
            <option value="Faculty">Faculty</option>
            <option value="Admin">Admin</option>
          </select>
        </div>

        <br />

        <button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>

      </form>

      <br />

      <p>
        Already have an account?{" "}
        <Link to="/login">Login Here</Link>
      </p>
    </div>
  );
};

export default Register;