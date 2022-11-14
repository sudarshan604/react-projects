const Dashboard = ({ user }) => {
  return (
    <section className="section">
      <h4>Dashboard</h4>
      <h2>{user.name}</h2>
      <h2>{user.email}</h2>
    </section>
  );
};
export default Dashboard;
