"use client";

import React from "react";
import AppIcons from "../../../public/assets/icons";

const SignUpAnimation = () => {
  return (
    <div class="bg-[url('/assets/icons/Succesbg.svg')] h-[100vh] bg-cover bg-no-repeat relative w-full">
      <div className=" absolute p-[0px] bg-white rounded-[10px] h-[60px] w-[60px] flex items-center justify-center top-[37px] left-[37px]">
        <AppIcons.login height="46px" width="46px" />
      </div>
      <div className="bottom-[180px] absolute left-[40%]">
        <p className="text-[38px] font-semibold font-inter text-white">
          Congratulations
        </p>
        <p className="text-white font-light font-inter text-center text-[14px]">
          Your account is successfully created.{" "}
        </p>
      </div>
    </div>
  );
};

export default SignUpAnimation;
