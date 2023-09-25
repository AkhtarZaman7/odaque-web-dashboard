"use client";

import React from "react";
import AppIcons from "../../public/assets/icons";
const SignUpDone = () => {
  return (
    <div>
      <div className="py-7 pb-5 flex flex-col items-center justify-center w-full text-center">
        <AppIcons.signupdone />
        <div className="pt-8">
          <p className="text-[30px] font-semibold font-inter">
            Congratulations
          </p>
          <p className="text-descriptiontext font-inter text-[16px]">
            Your account is successfully created.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpDone;
