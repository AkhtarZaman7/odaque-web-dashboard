"use client";
import React, { useState } from "react";
import AppIcons from "../../../public/assets/icons";
import { Input, Form, Checkbox, Button } from "antd";
import ForgotPassword from "../../components/ForgotPassword";
import Link from "next/link";
import AuthPreview from "../../components/AuthPreview";
import { RULES } from "../../utils/rules";
import { PREFIX } from "../../utils/prefix";

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

  const svgFillStyle = (state) => {
    return {
      fill: state ? "#5b5f77" : "#C0C0C5",
    };
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
            <Form name="sessionForm">
              <div className="pt-7 flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                  <Form.Item
                    className="font-inter p-0 m-0"
                    name="email"
                    size="small"
                    rules={RULES.email}
                  >
                    <Input
                      className="h-[3rem] pl-[23px]"
                      placeholder="john@gmail.com"
                      onFocus={handleUserFocus}
                      onBlur={handleUserBlur}
                      prefix={
                        <PREFIX.fullnameprefix
                          svgFillStyle={svgFillStyle}
                          isUserFocused={isUserFocused}
                        />
                      }
                    />
                  </Form.Item>
                  <Form.Item
                    className="font-inter p-0 m-0"
                    name="Password"
                    size="small"
                    rules={RULES.password}
                  >
                    <Input.Password
                      className="pr-[23px] pl-[23px] h-[3rem]"
                      placeholder="Password"
                      onFocus={handlePasswordFocus}
                      onBlur={handlePasswordBlur}
                      prefix={
                        <PREFIX.loginpasswordprefix
                          svgFillStyle={svgFillStyle}
                          isFocused={isFocused}
                        />
                      }
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
                  <Form.Item>
                    <Button
                      htmlType="submit"
                      className="w-[20rem] h-12 flex justify-center items-center bg-blueSelected rounded-md"
                    >
                      <p className="font-inter font-bold text-white text-[18px]">
                        Login
                      </p>
                    </Button>
                  </Form.Item>
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
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
