"use client";

// import { UploadProps } from "antd";
import { Button, Col, Form, Input, Select } from "antd";
import React, { useState } from "react";
import AppIcons from "../../public/assets/icons";
import SubscriptionPlan from "../components/SubscriptionPlan";
import PlanOverviewCard from "../components/PlanOverviewCard";
const { Option } = Select;

const slotOptions = [
  { value: "Recommended", label: "Recommended" },
  { value: "none", label: "none" },
];

const AddPlan = () => {
  const [isAddBenefitOpen, setIsAddBenefitOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [benefit, setBenefit] = useState([]);
  const [stages, setStages] = useState([]);
  const [planData, setPlanData] = useState({
    planTitle: "",
    planType: "",
    monthlyPricing: "",
    yearlyPricing: "",
  });
  const handlePlanInputChange = (name, value) => {
    console.log("handlePlanInputChange:", name, value);
    setPlanData({ ...planData, [name]: value });
  };
  const onFinish = (values) => {
    console.log("Received values:", values);
  };

  const handleSaveAndNextClick = () => {
    if (stages.includes(1)) {
      return setStages([...stages, 2]);
    }
    setStages([...stages, 1]);
  };
  const toggleAddBenefit = () => {
    if (inputText) {
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
    <div className="rounded-lg bg-white px-4 pt-3 h-[screen]">
      <Form name="PlanForm" onFinish={onFinish}>
        <div>
          {stages.includes(2) ? (
            <SubscriptionPlan />
          ) : stages.includes(1) ? (
            <PlanOverviewCard planData={planData} benefit={benefit} />
          ) : (
            <div>
              <h1 className="mb-4 text-xl font-semibold text-blackSecondary">
                Create Plan
              </h1>

              <div className="grid grid-cols-2 space-x-5">
                <Col>
                  <p className="font-sans">
                    Title of Plan
                    <span className="pl-1 text-xs text-red-500">*</span>
                  </p>
                  <Form.Item
                    className="pt-1 font-inter"
                    name="Plan Title"
                    rules={[
                      { required: true, message: "Please enter Plan Title!" },
                    ]}
                  >
                    <Input
                      placeholder="Basic"
                      size="large"
                      value={planData.planTitle}
                      onChange={(e) =>
                        handlePlanInputChange("planTitle", e.target.value)
                      }
                    />
                  </Form.Item>
                </Col>

                <Col>
                  <p className="font-inter">
                    Plan type
                    <span className="pl-1 text-xs text-red-500">*</span>
                  </p>
                  <Form.Item
                    className="pt-1 font-inter"
                    name="slots"
                    rules={[{ required: true, message: "Please select plan!" }]}
                  >
                    <Select
                      placeholder="Choose plan type"
                      size="large"
                      value={planData.planType} // Pass the value
                      onChange={(value) =>
                        handlePlanInputChange("planType", value)
                      }
                    >
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
                <Col>
                  <p className="font-sans">
                    Monthly Pricing
                    <span className="pl-1 text-xs text-red-500">*</span>
                  </p>
                  <Form.Item
                    className="pt-1 font-inter"
                    name="monthly pricing"
                    rules={[
                      { required: true, message: "Please enter pricing!" },
                    ]}
                  >
                    <Input
                      placeholder="Enter monthly pricing"
                      size="large"
                      value={planData.monthlyPricing} // Set the value of the input
                      onChange={(e) =>
                        handlePlanInputChange("monthlyPricing", e.target.value)
                      }
                    />
                  </Form.Item>
                </Col>

                <Col>
                  <p className="font-sans">
                    Yearly Pricing
                    <span className="pl-1 text-xs text-red-500">*</span>
                  </p>
                  <Form.Item
                    className="pt-1 font-inter"
                    name="yearly pricing"
                    rules={[
                      { required: true, message: "Please enter pricing!" },
                    ]}
                  >
                    <Input
                      placeholder="Enter yearly pricing"
                      size="large"
                      value={planData.monthlyPricing} // Set the value of the input
                      onChange={(e) =>
                        handlePlanInputChange("yearlyPricing", e.target.value)
                      }
                    />
                  </Form.Item>
                </Col>
              </div>

              <div>
                <p className="font-sans">
                  Benefits<span className="pl-1 text-xs text-red-500">*</span>
                </p>
                <div className="pt-3 ">
                  <div className="p-[16px] border rounded-md">
                    <div className="flex flex-row">
                      <button
                        onClick={toggleAddBenefit}
                        className="flex flex-row items-center"
                      >
                        <AppIcons.blueplus />
                        <p className="text-blueSelected font-inter font-medium text-[16px] pl-2">
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
            </div>
          )}
          {!stages.includes(2) && (
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
                    onClick={handleSaveAndNextClick}
                    className="flex items-center h-[40px] w-[174px] justify-center text-[16px] bg-blueSelected px-16 py-4 font-inter font-medium text-white"
                    htmlType="submit"
                  >
                    {stages.includes(1) ? <p>Save & Next</p> : <p>Next</p>}
                  </Button>
                </Form.Item>
              </div>
            </div>
          )}
        </div>
      </Form>
    </div>
  );
};

export default AddPlan;
