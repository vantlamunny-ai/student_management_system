import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {

  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {

    e.preventDefault();

    setError("");

    if (!formData.email || !formData.password) {
      setError("Please fill all fields");
      return;
    }

    setLoading(true);

    try {

      const user = await login(
        formData.email,
        formData.password
      );

      if (user.role === "Admin") {
        navigate("/admin");
      }

      else if (user.role === "Student") {
        navigate("/student");
      }

      else if (user.role === "Faculty") {
        navigate("/faculty");
      }

      else {
        navigate("/");
      }

    }

    catch (err) {

      const message =
        err.response?.data?.message ||
        "Login Failed";

      setError(message);

    }

    finally {

      setLoading(false);

    }

  }

  return (

    <div className="auth-container">

      <div className="auth-card">

        <h2>Welcome Back 👋</h2>

        <p className="subtitle">
          Login to continue to your account
        </p>

        {error &&

          <div className="error">

            {error}

          </div>

        }

        <form onSubmit={handleSubmit}>

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

          <button type="submit">

            {

              loading

                ?

                "Logging In..."

                :

                "Login"

            }

          </button>

        </form>

        <div className="bottom-text">

          Don't have an account?

          <Link to="/register">

            Register

          </Link>

        </div>

      </div>

    </div>

  );

};

export default Login;