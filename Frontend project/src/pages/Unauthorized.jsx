import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <div className="page-container">

      <div className="status-card">

        <div className="status-icon">🔒</div>

        <h1>Access Denied</h1>

        <p>
          Sorry! You do not have permission to access this page.
        </p>

        <Link to="/">
          <button>Go to Home</button>
        </Link>

      </div>

    </div>
  );
};

export default Unauthorized;