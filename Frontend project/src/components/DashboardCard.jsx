const DashboardCard = ({ title, value, icon, color }) => {
  return (
    <div
      className="dashboard-card"
      style={{
        borderTop: `6px solid ${color}`,
      }}
    >
      <div className="card-icon">{icon}</div>

      <h3>{title}</h3>

      <h2>{value}</h2>
    </div>
  );
};

export default DashboardCard;