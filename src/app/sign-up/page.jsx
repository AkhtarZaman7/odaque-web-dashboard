"use client";
import React, { useState } from "react";
import AppIcons from "../../../public/assets/icons";
import { Input, Form, Checkbox } from "antd";
import Link from "next/link";
import AuthPreview from "../../components/AuthPreview";
import { RULES } from "../../utils/rules";
import { PREFIX } from "../../utils/prefix";

const SignUp = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isConfirmFocused, setIsConfirmFocused] = useState(false);
  const [isUserFocused, setIsUserFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);

  const handleUserFocus = () => {
    setIsUserFocused(true);
  };

  const handleUserBlur = () => {
    setIsUserFocused(false);
  };
  const handleEmailFocus = () => {
    setIsEmailFocused(true);
  };

  const handleEmailBlur = () => {
    setIsEmailFocused(false);
  };
  const handlePasswordFocus = () => {
    setIsFocused(true);
  };

  const handlePasswordBlur = () => {
    setIsFocused(false);
  };
  const handleConfirmPasswordFocus = () => {
    setIsConfirmFocused(true);
  };

  const handleConfirmPasswordBlur = () => {
    setIsConfirmFocused(false);
  };
  const svgFillStyle = (state) => {
    return {
      fill: state ? "#5b5f77" : "#C0C0C5",
    };
  };
  const onFinish = (values) => {
    console.log("Received values:", values);
  };
  return (
    <div className=" grid grid-cols-[60%_40%] h-full">
      <AuthPreview />

      <div className="flex items-center justify-center">
        <Form
          name="signup"
          onFinish={onFinish}
          initialValues={{ remember: true }}
        >
          <div className="w-[20rem] flex flex-col  ">
            <div className="flex flex-col">
              <p className="text-[25px] font-bold">Create Account!</p>
              <p className="pt-0 text-descriptiontext text-[16px] font-inter">
                Sign up to get started
              </p>
              <div className="pt-7 flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                  <Form.Item
                    className={`font-inter relative m-0 p-0 ${
                      isUserFocused ? "h-[50px]" : "h-[50px]"
                    }`}
                    name="FullName"
                    size="small"
                    rules={RULES.fullname}
                  >
                    <Input
                      className="h-[3rem] pl-[23px]"
                      placeholder="Full Name"
                      onFocus={handleUserFocus}
                      onBlur={handleUserBlur}
                      prefix={
                        <PREFIX.userprefix
                          svgFillStyle={svgFillStyle}
                          isUserFocused={isUserFocused}
                        />
                      }
                    />
                  </Form.Item>

                  <Form.Item
                    className={`font-inter relative m-0 p-0 ${
                      isUserFocused ? "h-[50px]" : "h-[50px]"
                    }`}
                    name="email"
                    size="small"
                    rules={RULES.email}
                  >
                    <Input
                      placeholder="Johnsmith123@gmail.com"
                      className="placeholder:text-xs h-[3rem] pl-[23px] text-black text-sm"
                      onFocus={handleEmailFocus}
                      onBlur={handleEmailBlur}
                      prefix={
                        <PREFIX.emailprefix
                          svgFillStyle={svgFillStyle}
                          isEmailFocused={isEmailFocused}
                        />
                      }
                    />
                  </Form.Item>

                  <Form.Item
                    className={`font-inter relative p-0 m-0 ${
                      isUserFocused ? "h-[50px]" : "h-[50px]"
                    }`}
                    name="Password"
                    size="small"
                    rules={RULES.password}
                  >
                    <Input.Password
                      className="h-[3rem] pr-[23px] pl-[23px]"
                      placeholder="Password"
                      onFocus={handlePasswordFocus}
                      onBlur={handlePasswordBlur}
                      prefix={
                        <PREFIX.passwrodprefix
                          svgFillStyle={svgFillStyle}
                          isFocused={isFocused}
                        />
                      }
                    />
                  </Form.Item>

                  <Form.Item
                    className={`font-inter relative p-0 m-0 ${
                      isUserFocused ? "h-[50px]" : "h-[50px]"
                    }`}
                    name="Confirm Password"
                    size="small"
                    rules={RULES.confirmpassword}
                  >
                    <Input.Password
                      className="h-[3rem] pr-[23px] pl-[23px]"
                      placeholder="Confirm Password"
                      onFocus={handleConfirmPasswordFocus}
                      onBlur={handleConfirmPasswordBlur}
                      prefix={
                        <PREFIX.confirmpasswordprefix
                          svgFillStyle={svgFillStyle}
                          isConfirmFocused={isConfirmFocused}
                        />
                      }
                    />
                  </Form.Item>
                </div>
                <div className="-pt-3">
                  <div className="flex justify-between items-center">
                    <Checkbox>
                      <p className="text-disabled text-[12px] font-inter ">
                        I have read and agreed to the Terms & Conditions
                      </p>
                    </Checkbox>
                  </div>
                </div>
                <div className="pt-[15px]">
                  <Link href="/sign-up/details">
                    <button
                      type="primary"
                      className="w-[20rem] h-12 flex justify-center items-center bg-blueSelected rounded-md"
                    >
                      <p className="font-inter font-bold text-white text-[18px]">
                        Create Account
                      </p>
                    </button>
                  </Link>
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
                    Already have an account?
                  </p>
                  <Link href={"/sign-in"}>
                    <button className="text-blueSelected font-medium text-[16px]">
                      Log in
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
