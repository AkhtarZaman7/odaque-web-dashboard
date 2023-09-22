"use client";


import React from "react";

import AppIcons from "../../../public/assets/icons";

const HeroTags = ({ text }) => {
  let iconToRender;

  switch (text) {
    case "Gym Courses":
      iconToRender = <AppIcons.gym />;
      break;
    // Add more cases for other text values if needed
    default:
      iconToRender = <AppIcons.tick/>;
      break;
  }

  return (
    <div className="flex items-center gap-2 rounded bg-white p-2 px-4 shadow">
      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blueSelected text-white ">
        {iconToRender}
      </div>
      <p className="text-xs font-medium text-gray-800 md:text-sm">{text}</p>
    </div>
  );
};

export default HeroTags;
