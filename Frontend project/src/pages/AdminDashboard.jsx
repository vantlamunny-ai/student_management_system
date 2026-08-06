import { useEffect, useState } from "react";
import DashboardCard from "../components/DashboardCard";

const AdminDashboard = () => {

  const [stats, setStats] = useState({
    users: 0,
    students: 0,
    faculty: 0,
    admins: 0,
    events: 0,
  });

  useEffect(() => {

    // Temporary Data
    // Later we'll fetch from backend

    setStats({
      users: 19,
      students: 11,
      faculty: 2,
      admins: 3,
      events: 5,
    });

  }, []);

  return (

    <div className="container">

      <div className="dashboard-header">

        <h1>👨‍💼 Admin Dashboard</h1>

        <p>
          Welcome back! Manage your Smart Management System here.
        </p>

      </div>

      <div className="dashboard-grid">

        <DashboardCard
          title="Total Users"
          value={stats.users}
          color="#2563eb"
        />

        <DashboardCard
          title="Students"
          value={stats.students}
          color="#22c55e"
        />

        <DashboardCard
          title="Faculty"
          value={stats.faculty}
          color="#f59e0b"
        />

        <DashboardCard
          title="Admins"
          value={stats.admins}
          color="#dc2626"
        />

        <DashboardCard
          title="Events"
          value={stats.events}
          color="#7c3aed"
        />

      </div>

      <div className="dashboard-section">

        <h2>⚡ Quick Actions</h2>

        <div className="action-buttons">

          <button>Add Event</button>

          <button>Manage Users</button>

          <button>View Reports</button>

          <button>View Events</button>

        </div>

      </div>

      <div className="dashboard-section">

        <h2>👨‍💼 Recent Admins</h2>

        <table className="admin-table">

          <thead>

            <tr>

              <th>Name</th>

              <th>Email</th>

            </tr>

          </thead>

          <tbody>

            <tr>

              <td>John</td>

              <td>john@gmail.com</td>

            </tr>

            <tr>

              <td>Geetha</td>

              <td>geethu@gmail.com</td>

            </tr>

            <tr>

              <td>Anjali</td>

              <td>anjali12@gmail.com</td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>

  );

};

export default AdminDashboard;