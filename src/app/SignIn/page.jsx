"use client";
import React, { useState } from "react";
import AppIcons from "../../../public/assets/icons";
import { Input, Form, Col, Checkbox, Button, Modal } from "antd";

const SignIn = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isUserFocused, setIsUserFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

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

  const handleForgotPasswordClick = () => {
    setModalVisible(true);
  };

  const handleModalCancel = () => {
    setModalVisible(false);
  };

  const handleSendResetLink = () => {
    // Logic to send reset link
  };

  const svgUserFillStyle = {
    fill: isUserFocused ? "#5b5f77" : "#C0C0C5", // Change fill color based on focus
  };
  const svgEmailFillStyle = {
    fill: isEmailFocused ? "#5b5f77" : "#C0C0C5", // Change fill color based on focus
  };
  const svgPasswordFillStyle = {
    fill: isFocused ? "#5b5f77" : "#C0C0C5", // Change fill color based on focus
  };
  return (
    <div className=" grid grid-cols-[60%_40%] h-full">
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

      <div className="flex items-center justify-center">
        <div className="w-[20rem] flex flex-col  ">
          <div className="flex flex-col">
            <p className="text-[25px] font-bold">Hello Again!</p>
            <p className="pt-1 text-descriptiontext font-sans">
              Welcome Back to ODAQUE
            </p>
            <div className="pt-8 flex flex-col gap-4">
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
                    </div>}
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
                      <AppIcons.password  fill={svgPasswordFillStyle.fill} />
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
                  <div>
                    <button type="button" onClick={handleForgotPasswordClick}>
                      <p className="font-inter text-[12px] text-blueSelected">
                        Forgot Password?
                      </p>
                    </button>
                    <Modal
                      title={
                        <p style={{ fontSize: "25px", fontWeight: "bold" }}>
                          Forgot Password?
                        </p>
                      }
                      visible={modalVisible}
                      onCancel={handleModalCancel}
                      centered
                      width={400} // Adjust the width of the modal as needed
                      footer={[
                        <Button
                          key="send"
                          type="primary"
                          onClick={handleSendResetLink}
                          className="w-full h-12 flex justify-center items-center bg-blueSelected rounded-md"
                        >
                          <p className="font-inter font-bold text-white text-[18px]">
                            Send Reset Link
                          </p>
                        </Button>,
                      ]}
                    >
                      <div style={{ marginBottom: "16px" }}>
                        <p style={{ marginBottom: "8px" }}>
                          Enter your email address and we will send you a link
                          to reset your password.
                        </p>
                      </div>

                      <Form.Item
                        className="font-inter"
                        name="Email"
                        size="small"
                        style={{
                          margin: 0,
                          padding: 0,
                        }}
                        rules={[
                          {
                            required: true,
                            message: "Please enter valid Email Address!",
                          },
                        ]}
                      >
                        <Input
                          style={{ height: "3rem", paddingLeft: "23px" }}
                          placeholder="Enter Email"
                          onFocus={handleEmailFocus}
                          onBlur={handleEmailBlur}
                          prefix={
                            <div style={{ marginRight: "7px" }}>
                              <AppIcons.email fill={svgEmailFillStyle.fill} />
                            </div>
                          }
                        />
                      </Form.Item>
                    </Modal>
                  </div>
                </div>
              </div>
              <div className="pt-5">
                <Button
                  type="primary"
                  className="w-[20rem] h-12 flex justify-center items-center bg-blueSelected rounded-md"
                >
                  <p className="font-inter font-bold text-white text-[18px]">
                    Login
                  </p>
                </Button>
              </div>
              <div className="mt-10 mb-6 grid grid-cols-[43%_4%_43%] gap-4">
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
              <div className="flex items-center justify-center flex-row">
                <p className="text-[16px] font-inter flex text-disabled">
                  Don't have an account?
                </p>
                <p className="text-blueSelected font-medium text-[16px]">
                  Sign Up?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
