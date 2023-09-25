"use client";

import AppIcons from "../../public/assets/icons";
const DetailsHeader = () => {
  return (
    <div className=" flex flex-row items-center h-[63px] w-full bg-white pl-[35px]  ">
      <AppIcons.login width="40" height="40" />

      <div className="flex flex-col pl-[13px] justify-center h-[87px]  pb-1  ">
        <div>
          <p className="text-black font-bold text-[18px] font-inter ">Odaque</p>
        </div>
        <div>
          <p className="text-[10px] text-descriptiontext font-sans  ">
            Reshape, Redefine, Renew.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsHeader;
