import DashboardHeader from "../../../components/Dashboard/DashboardHeader";
import DashboardTable from "../../../components/Dashboard/DashboardTable";

export const metadata = {
  title: "Dashboard",
  description: "User dashboard",
};

const Dashboard = () => (
  <div className="content">
    <DashboardHeader />
    <DashboardTable />
  </div>
);

export default Dashboard;
