"use client";
import React, { useState } from "react";
import AppIcons from "../../public/assets/icons";
import { Input, Form, Button, Modal } from "antd";
import Link from "next/link";

const ForgotPassword = () => {
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [sendResetEmailModalVisible, setSendResetEmailModalVisible] =
    useState(false);
  const handleEmailFocus = () => {
    setIsEmailFocused(true);
  };

  const handleEmailBlur = () => {
    setIsEmailFocused(false);
  };
  const handleForgotPasswordClick = () => {
    setModalVisible(true);
  };

  const handleModalCancel = () => {
    setModalVisible(false);
  };

  const handleSendResetLink = () => {
    setModalVisible(false);
    setSendResetEmailModalVisible(true);
  };
  const svgEmailFillStyle = {
    fill: isEmailFocused ? "#5b5f77" : "#C0C0C5", // Change fill color based on focus
  };
  return (
    <>
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
          open={modalVisible}
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
                Send Reset Email
              </p>
            </Button>,
          ]}
        >
          <div style={{ marginBottom: "16px" }}>
            <p style={{ marginBottom: "8px" }}>
              Enter your email address and we will send you a verification email
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
        {sendResetEmailModalVisible && (
          <>
            <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 ">
              <div className=" bg-white px-16">
                <div className="bg-white py-[35px] rounded-lg max-w-md w-full ">
                  <div className="text-center">
                    <div>
                      <div className="flex flex-row justify-center items-center w-full">
                        <div className="bg-primaryBg p-[10px] rounded-[40px]">
                          <AppIcons.sendEmail />
                        </div>
                      </div>
                      <p className="text-[32px] font-bold mt-[18px] font-inter">
                        Check Your Email
                      </p>
                    </div>
                    <p className="text-[16px] mt-[13px] text-descriptiontext font-inter">
                      We’ve sent a verification email to abc@example.com
                    </p>
                    <div className="mt-[30px]">
                      <p className="text-black text-[18px] font-inter">
                        Click the link in your email to verify your account.
                      </p>
                      <p className="text-[16px] mt-[13px] text-descriptiontext font-inter ">
                        If you have trouble finding your email, check your spam
                        folder for an email from noreply@example.com
                      </p>
                    </div>

                    <div className="flex flex-row space-x-1 justify-center items-center mt-[32px]">
                      <p className=" text-[16px] font-poppins  text-descriptiontext ">
                        Didn’t receive an email?
                      </p>
                      <button className=" border-black border-b ">
                        <p className="text-black font-poppins text-[16px] font-medium -my-[5px] ">
                          Resend
                        </p>
                      </button>
                    </div>
                    <div className="pt-6">
                      <Link href="/sign-in/verification-code">
                        <button
                          type="primary"
                          onClick={() => setSendResetEmailModalVisible(false)}
                          className="w-[340px] py-[14px] rounded-md bg-blueSelected"
                        >
                          <p className="text-white text-[18px] font-bold font-inter">
                            Continue
                          </p>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ForgotPassword;
