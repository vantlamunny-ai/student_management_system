import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">

      <div className="hero-section">

        <h1>🎓 Student Management System</h1>

        <p>
          Manage Students • Events • Faculty • Reports
        </p>

        <div className="home-buttons">
          <Link to="/login" className="btn-primary">
            🔐 Login
          </Link>

          <Link to="/register" className="btn-secondary">
            📝 Register
          </Link>
        </div>

      </div>

      <div className="features">

        <div className="feature-card student">
          <div className="icon">👨‍🎓</div>
          <h3>Students</h3>
          <p>Manage student information.</p>
        </div>

        <div className="feature-card event">
          <div className="icon">📅</div>
          <h3>Events</h3>
          <p>Create and manage events.</p>
        </div>

        <div className="feature-card faculty">
          <div className="icon">👨‍🏫</div>
          <h3>Faculty</h3>
          <p>Faculty dashboard.</p>
        </div>

        <div className="feature-card report">
          <div className="icon">📊</div>
          <h3>Reports</h3>
          <p>Generate reports easily.</p>
        </div>

      </div>

    </div>
  );
};

export default Home;