"use client";

// import { UploadProps } from "antd";
import { Button, Col, Form, Input, Select } from "antd";
import React, { useState } from "react";
import SubscriptionInput from "../components/SubscriptionInput";
import AppIcons from "../../public/assets/icons";

const { Option } = Select;

const slotOptions = [
  { value: "Recommended", label: "Recommended" },
  { value: "none", label: "none" },
];

const AddPlan = () => {
  const [isAddBenefitOpen, setIsAddBenefitOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [benefit, setBenefit] = useState([]);
  const onFinish = (values) => {
    console.log("Received values:", values);
  };
  const toggleAddBenefit = () => {
    if (inputText) {
      // Add the input text to a list or perform the desired action
      console.log("Added benefit:", inputText);
      setInputText(""); // Clear the input text
      setBenefit([...benefit, inputText]);
    }

    setIsAddBenefitOpen(!isAddBenefitOpen);
  };
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="rounded-md bg-white px-4 pt-3 h-[screen]">
      <h1 className="mb-4 text-xl font-semibold text-blackSecondary">
        Create Plan
      </h1>
      <Form name="sessionForm" onFinish={onFinish}>
        <div className="grid grid-cols-2 space-x-5">
          <SubscriptionInput
            label="Title of Plan"
            name="Plan Title"
            placeholder="Basic"
            rules={[{ required: true, message: "Please enter Session Title!" }]}
          />

          <Col>
            <p className="font-inter">
              Plan type<span className="pl-1 text-xs text-red-500">*</span>
            </p>
            <Form.Item
              className="pt-1 font-inter"
              name="slots"
              rules={[{ required: true, message: "Please select plan!" }]}
            >
              <Select placeholder="Choose plan type" size="large">
                {slotOptions.map((option) => (
                  <Option key={option.value} value={option.value}>
                    {option.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </div>
        <div className="grid grid-cols-2 space-x-5">
          <SubscriptionInput
            label="Monthly Pricing"
            name="monthly pricing"
            placeholder="Enter monthly pricing"
            rules={[{ required: true, message: "Please enter pricing!" }]}
          />

          <SubscriptionInput
            label="Yearly Pricing"
            name="yearly pricing"
            placeholder="Enter yearly pricing"
            rules={[{ required: true, message: "Please enter pricing!" }]}
          />
        </div>

        <div>
          <p className="font-sans">
            Benefits<span className="pl-1 text-xs text-red-500">*</span>
          </p>
          <div className="pt-3 ">
            <div className="p-[16px] border rounded-md">
              <div className="flex flex-row">
                <button onClick={toggleAddBenefit}>
                  <p className="text-blueSelected font-inter font-medium text-[16px]">
                    Add Benefit
                  </p>
                </button>
              </div>
            </div>
            {isAddBenefitOpen && (
              <div className="p-[16px] border flex flex-row space-x-10 bg-bgSignUp">
                <Input
                  value={inputText}
                  onChange={handleInputChange}
                  className="ant-input"
                  placeholder="Enter a benefit"
                />
                <button
                  onClick={toggleAddBenefit}
                  className="px-[13px] py-[4px] border border-blueSelected rounded-md"
                >
                  <p className="text-blueSelected font-inter text-[14px] ">
                    Add
                  </p>
                </button>
              </div>
            )}
          </div>
          <div className="mt-[16px] space-y-5">
            {benefit.map((item, index) => (
              <div className="p-[14px] border rounded-lg flex flex-row justify-between">
                <p
                  key={index}
                  className="font-inter text-[14px] text-descriptiontext"
                >
                  {item}
                </p>
                <div className="flex flex-row space-x-[12px]">
                  <button>
                    <AppIcons.deleteicon />
                  </button>
                  <button>
                    <AppIcons.edit />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between ">
          <div />
          <div className="flex flex-row items-center gap-4 pt-[150px]">
            <Form.Item>
              <Button className="flex items-center h-[40px] w-[174px] justify-center text-[16px] border border-blueSelected px-16 py-4 font-inter font-medium text-blueSelected">
                Back
              </Button>
            </Form.Item>
            <Form.Item>
              <Button
                className="flex items-center h-[40px] w-[174px] justify-center text-[16px] bg-blueSelected px-16 py-4 font-inter font-medium text-white"
                htmlType="submit"
              >
                Next
              </Button>
            </Form.Item>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default AddPlan;
