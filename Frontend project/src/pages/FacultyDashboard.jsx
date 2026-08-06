import DashboardCard from "../components/DashboardCard";

const FacultyDashboard = () => {
  return (
    <div className="dashboard-container">

      <div className="dashboard-header">
        <h1>👋 Welcome, Faculty</h1>
        <p>Manage events, students and reports from your dashboard.</p>
      </div>

      {/* Dashboard Cards */}
      <div className="dashboard-grid">

        <DashboardCard
          title="Events Managed"
          value="10"
          icon="📅"
          color="#2563EB"
        />

        <DashboardCard
          title="Registrations"
          value="156"
          icon="📝"
          color="#22C55E"
        />

        <DashboardCard
          title="Students"
          value="120"
          icon="👨‍🎓"
          color="#F59E0B"
        />

        <DashboardCard
          title="Reports"
          value="15"
          icon="📊"
          color="#8B5CF6"
        />

      </div>

      {/* Quick Actions */}
      <div className="quick-actions">

        <h2>Quick Actions</h2>

        <div className="action-buttons">

          <button>➕ Add Event</button>

          <button>👥 View Students</button>

          <button>📄 Generate Report</button>

        </div>

      </div>

      {/* Recent Activity */}
      <div className="recent-section">

        <h2>Recent Activities</h2>

        <ul>

          <li>✅ Event "Hackathon 2026" created</li>

          <li>✅ Student registrations approved</li>

          <li>✅ Participation report generated</li>

          <li>✅ New event schedule updated</li>

        </ul>

      </div>

    </div>
  );
};

export default FacultyDashboard;