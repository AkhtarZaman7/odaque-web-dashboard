"use client";
import React from "react";
import { Input, Form } from "antd";
import AppIcons from "../../../public/assets/icons";
import Link from "next/link";
import { RULES } from "../../utils/rules";

const CreatePassword = () => {
  const handlePasswordChange = (e) => {
    // Handle password change logic
  };
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 ">
      <div className=" bg-white px-16 rounded-md">
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
                  className="m-[16px] p-0"
                  rules={RULES.password}
                >
                  <Input
                    className="h-[3rem] pl-[23px] w-[340px] rounded-[25px]"
                    placeholder="Enter new password"
                    onChange={handlePasswordChange}
                  />
                </Form.Item>

                <Form.Item
                  name="confirmNewPassword"
                  dependencies={["newPassword"]}
                  className="m-[16px] p-0"
                  hasFeedback
                  rules={RULES.confirmnewpassword}
                >
                  <Input
                    className="h-[3rem] pl-[23px] w-[340px] rounded-[25px]"
                    placeholder="Confirm new password"
                    onChange={handlePasswordChange}
                  />
                </Form.Item>
              </Form>
            </div>

            <div className="mt-[38px]">
              <Link href="/sign-in">
                <button
                  type="primary"
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
