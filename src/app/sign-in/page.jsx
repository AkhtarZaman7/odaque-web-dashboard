"use client";
import React, { useState } from "react";
import AppIcons from "../../../public/assets/icons";
import { Input, Form, Checkbox, Button } from "antd";
import ForgotPassword from "../../components/ForgotPassword";
import Link from "next/link";
import AuthPreview from "../../components/AuthPreview";

const SignIn = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isUserFocused, setIsUserFocused] = useState(false);

  const handleUserFocus = () => {
    setIsUserFocused(true);
  };

  const handleUserBlur = () => {
    setIsUserFocused(false);
  };

  const handlePasswordFocus = () => {
    setIsFocused(true);
  };

  const handlePasswordBlur = () => {
    setIsFocused(false);
  };

  const svgUserFillStyle = {
    fill: isUserFocused ? "#5b5f77" : "#C0C0C5", // Change fill color based on focus
  };

  const svgPasswordFillStyle = {
    fill: isFocused ? "#5b5f77" : "#C0C0C5", // Change fill color based on focus
  };
  return (
    <div className=" grid grid-cols-[60%_40%] h-full">
      <AuthPreview />

      <div className="flex items-center justify-center">
        <div className="w-[20rem] flex flex-col  ">
          <div className="flex flex-col">
            <p className="text-[25px] font-bold">Hello Again!</p>
            <p className="pt-0 text-descriptiontext font-inter text-[16px]">
              Welcome Back to ODAQUE
            </p>
            <div className="pt-7 flex flex-col gap-4">
              <div className="flex flex-col gap-4">
                <Form.Item
                  className="font-inter"
                  name="FullName"
                  size="small"
                  style={{
                    margin: 0,
                    padding: 0,
                  }}
                  rules={[
                    {
                      required: true,
                      message: "Please enter Full Name!",
                    },
                  ]}
                >
                  <Input
                    style={{ height: "3rem", paddingLeft: "23px" }}
                    placeholder="Full Name"
                    onFocus={handleUserFocus}
                    onBlur={handleUserBlur}
                    prefix={
                      <div style={{ marginRight: "4px" }}>
                        <AppIcons.user fill={svgUserFillStyle.fill} />
                      </div>
                    }
                  />
                </Form.Item>
                <Form.Item
                  className="font-inter"
                  name="Password"
                  size="small"
                  style={{
                    margin: 0,
                    padding: 0,
                  }}
                  rules={[
                    {
                      required: true,
                      message: "Please enter Password!",
                    },
                  ]}
                >
                  <Input.Password
                    style={{
                      height: "3rem",
                      paddingRight: "23px",
                      paddingLeft: "23px",
                    }}
                    placeholder="Password"
                    onFocus={handlePasswordFocus}
                    onBlur={handlePasswordBlur}
                    prefix={
                      <div style={{ marginRight: "4px" }}>
                        <AppIcons.password fill={svgPasswordFillStyle.fill} />
                      </div>
                    }
                    suffix={<AppIcons.eye fill={svgPasswordFillStyle.fill} />}
                  />
                </Form.Item>
              </div>
              <div className="-pt-3">
                <div className="flex justify-between items-center">
                  <Checkbox>
                    <p className="text-disabled text-[12px] font-inter">
                      Remember Me
                    </p>
                  </Checkbox>
                  <ForgotPassword />
                </div>
              </div>
              <div className="pt-[15px]">
                <button
                  type="primary"
                  className="w-[20rem] h-12 flex justify-center items-center bg-blueSelected rounded-md"
                >
                  <p className="font-inter font-bold text-white text-[18px]">
                    Login
                  </p>
                </button>
              </div>
              <div className="mt-8 mb-4 grid grid-cols-[43%_4%_43%] gap-4">
                <div className="pl-3">
                  <div className="border-t border-gray-400"></div>
                </div>
                <div className="text-sm text-gray-400 -mt-3 -ml-[0.15rem]">
                  Or
                </div>
                <div className="pr-3">
                  <div className="border-t border-gray-400"></div>
                </div>
              </div>
              <div className="flex items-center justify-center flex-row space-x-1">
                <p className="text-[16px] font-inter flex text-disabled">
                  Don't have an account?
                </p>
                <Link href={"/sign-up"}>
                  <button className="text-blueSelected font-medium text-[16px]">
                    Sign Up?
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
