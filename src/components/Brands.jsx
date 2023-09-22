import React from "react";
import AppIcons from "../../public/assets/icons";

const Brands = () => {
  return (
    <div className="mt-4 flex flex-col items-center justify-center space-y-4 md:flex-row md:justify-between md:space-x-4 md:space-y-0 ">
      <AppIcons.brand1 />
      <AppIcons.brand2 />
      <AppIcons.brand3 />
      <AppIcons.brand4 />
      <AppIcons.brand5 />
    </div>
  );
};

export default Brands;
