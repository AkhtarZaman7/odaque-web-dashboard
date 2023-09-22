import DashboardHeader from "../../../components/Dashboard/DashboardHeader";
import DashboardTable from "../../../components/Dashboard/DashboardTable";

export const metadata = {
  title: "Dashboard",
  description: "User dashboard",
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

const Dashboard = () => (
  <div className="content">
    <DashboardHeader />
    <DashboardTable />
  </div>
);

export default Dashboard;
