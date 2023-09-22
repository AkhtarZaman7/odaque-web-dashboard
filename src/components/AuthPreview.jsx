import React from "react";
import AppIcons from "../../public/assets/icons";

const AuthPreview = () => {
  return (
    <div class="bg-[url('/assets/icons/Login.svg')] h-screen bg-cover bg-no-repeat relative">
      <div className="absolute left-[133px] top-[220px] flex flex-row ">
        <div className="p-[11px] bg-white rounded-[20px] h-[87px] w-[88px]">
          <AppIcons.login />
        </div>
        <div className="flex flex-col pl-[24px] justify-center h-[87px] pb-4  ">
          <div>
            <p className="text-white font-bold text-[44px] font-inter pt-0">
              Odaque
            </p>
          </div>
          <div>
            <p className="text-[20px] text-white font-sans font-light">
              Reshape, Redefine, Renew.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPreview;
