"use client";

import React, { useState } from "react";

import SideBar from "../../../components/Dashboard/SideBar";

export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  return (
    <div className="w-full px-1 text-gray-700 antialiased">
      <SideBar open={isMenuOpen} toggleDrawer={setIsMenuOpen}>
        {children}
        {/* <button onClick={() => setIsMenuOpen(!isMenuOpen)}>Toggle</button> */}
      </SideBar>
    </div>
  );
}
