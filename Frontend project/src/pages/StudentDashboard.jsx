import DashboardCard from "../components/DashboardCard";

const StudentDashboard = () => {
  return (
    <div className="dashboard-container">

      <div className="dashboard-header">
        <h1>👋 Welcome, Student</h1>
        <p>Access your events, registrations and profile from one place.</p>
      </div>

      {/* Dashboard Cards */}
      <div className="dashboard-grid">

        <DashboardCard
          title="Registered Events"
          value="5"
          icon="📅"
          color="#2563EB"
        />

        <DashboardCard
          title="Certificates"
          value="2"
          icon="🏆"
          color="#22C55E"
        />

        <DashboardCard
          title="Notifications"
          value="4"
          icon="🔔"
          color="#F59E0B"
        />

        <DashboardCard
          title="Attendance"
          value="92%"
          icon="📊"
          color="#8B5CF6"
        />

      </div>

      {/* Quick Actions */}
      <div className="quick-actions">

        <h2>Quick Actions</h2>

        <div className="action-buttons">

          <button>📅 View Events</button>

          <button>📝 My Registrations</button>

          <button>👤 My Profile</button>

        </div>

      </div>

      {/* Recent Activities */}
      <div className="recent-section">

        <h2>Recent Activities</h2>

        <ul>

          <li>✅ Registered for Coding Contest</li>

          <li>✅ Downloaded Python Certificate</li>

          <li>✅ Profile Updated</li>

          <li>✅ New Event Available</li>

        </ul>

      </div>

    </div>
  );
};

export default StudentDashboard;