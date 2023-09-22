"use client";
import React, { useState } from "react";
import { Input, Form } from "antd";
import AppIcons from "../../../../public/assets/icons";
import Link from "next/link";

const CreatePassword = () => {
  const handlePasswordChange = (e) => {
    // Handle password change logic
  };
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 ">
      <div className=" bg-white px-16">
        <div className="bg-white py-[35px] rounded-lg max-w-md w-full ">
          <div className="text-center">
            <div>
              <div className="flex flex-row justify-center items-center w-full">
                <div className="bg-primaryBg p-[10px] rounded-[40px]">
                  <AppIcons.lock />
                </div>
              </div>
              <p className="text-[32px] font-bold mt-[18px] font-inter">
                Create New Password
              </p>
            </div>
            <p className="text-[16px] mt-[13px] text-descriptiontext font-inter">
              That’s it. Setup your new password
            </p>
            <div className="pt-5">
              <Form>
                <Form.Item
                  name="newPassword"
                  style={{
                    margin: 16,
                    padding: 0,
                  }}
                  rules={[
                    {
                      required: true,
                      message: "Please enter a new password",
                    },
                  ]}
                >
                  <Input
                    style={{
                      height: "3rem",
                      paddingLeft: "23px",
                      borderRadius: "25px",
                      width: "340px",
                    }}
                    placeholder="Enter new password"
                    onChange={handlePasswordChange}
                  />
                </Form.Item>

                <Form.Item
                  name="confirmNewPassword"
                  dependencies={["newPassword"]}
                  style={{
                    margin: 16,
                    padding: 0,
                  }}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Please confirm your new password",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("newPassword") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error("The two passwords do not match")
                        );
                      },
                    }),
                  ]}
                >
                  <Input
                    style={{
                      height: "3rem",
                      paddingLeft: "23px",
                      borderRadius: "25px",
                    }}
                    placeholder="Confirm new password"
                    onChange={handlePasswordChange}
                  />
                </Form.Item>
              </Form>
            </div>

            <div className="mt-[38px]">
              <Link href="/sign-in/create-password">
                <button
                  type="primary"
                  //onClick={() => setSendResetEmailModalVisible(false)}
                  className="w-[340px] py-[14px] rounded-md bg-blueSelected"
                >
                  <p className="text-white text-[18px] font-bold font-inter">
                    Set New Password
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

export default CreatePassword;
