import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="logo">
        🎓 Student Management System
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/events">Events</Link>
      </div>

    </nav>
  );
};

export default Navbar;