"use client";

import AppIcons from "../../public/assets/icons";
const DetailsHeader = () => {
  return (
    <div className=" flex flex-row items-center h-[80px] w-full bg-white pl-[35px]  ">
      <AppIcons.login width="48" height="48" />

      <div className="flex flex-col pl-[16px] justify-center h-[87px]  pb-1  ">
        <div>
          <p className="text-black font-bold text-[22px] font-inter ">Odaque</p>
        </div>
        <div>
          <p className="text-[12px] text-descriptiontext font-sans  ">
            Reshape, Redefine, Renew.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsHeader;
