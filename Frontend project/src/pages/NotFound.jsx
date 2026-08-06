import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="page-container">

      <div className="status-card">

        <div className="status-icon">🚫</div>

        <h1>404</h1>

        <h2>Page Not Found</h2>

        <p>
          The page you are looking for doesn't exist or has been moved.
        </p>

        <Link to="/">
          <button>Back to Home</button>
        </Link>

      </div>

    </div>
  );
};

export default NotFound;