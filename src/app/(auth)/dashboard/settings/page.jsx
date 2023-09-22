import React from "react";

import DashboardHeader from "../../../../components/Dashboard/DashboardHeader";
import DashboardTable from "../../../../components/Dashboard/DashboardTable";

export const metadata = {
  title: "Settings",
  description: "Settings",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "icon",
      url: "/favicon.ico",
    },
  ],
};

const Settings = () => (
  <div className="content">
    <DashboardHeader />
    <DashboardTable />
  </div>
);

export default Settings;
