"use client";

import React, { useState } from "react";

import SideBar from "../../../components/Dashboard/SideBar";

export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, { setIsMenuOpen, toggleMenu })
  );

  return (
    <div className="w-full px-1 text-gray-700 antialiased">
      <SideBar open={isMenuOpen} toggleDrawer={setIsMenuOpen}>
        {/* {children} */}
        {/* <button onClick={() => setIsMenuOpen(!isMenuOpen)}>Toggle</button> */}
        {childrenWithProps}
      </SideBar>
    </div>
  );
}
