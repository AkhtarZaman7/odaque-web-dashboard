"use client";
import React, { useState } from "react";

import AppIcons from "../../../../public/assets/icons";
import Link from "next/link";

const EmailVerified = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 ">
      <div className=" bg-white px-16">
        <div className="bg-white py-[35px] rounded-lg max-w-md w-full ">
          <div className="text-center">
            <div>
              <div className="flex flex-row justify-center items-center w-full">
                <div className="bg-checkbg p-[13px] rounded-[40px]">
                  <AppIcons.check />
                </div>
              </div>
              <p className="text-[32px] font-bold mt-[18px] font-inter">
                Email Verified
              </p>
            </div>
            <p className="text-[14px] mt-[13px] text-descriptiontext font-inter">
              Your mail account has been successfully verified.
            </p>
            <div className="mt-[30px]">
              <Link href="/sign-in/create-password">
                <button
                  type="primary"
                  //onClick={() => setSendResetEmailModalVisible(false)}
                  className="w-[340px] py-[14px] rounded-md bg-blueSelected"
                >
                  <p className="text-white text-[18px] font-bold font-inter">
                    Reset Password
                  </p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerified;
