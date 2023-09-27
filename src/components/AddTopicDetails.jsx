"use client";
import React, { useState } from "react";
import AppIcons from "../../public/assets/icons";
import instr1 from "../../public/assets/images/instr1.png";
import instr2 from "../../public/assets/images/instr2.png";
import instr3 from "../../public/assets/images/instr3.png";
import instr4 from "../../public/assets/images/instr4.png";
import { Button, Col, Form, Input, message, Row, Select, Upload } from "antd";
const { Option } = Select;
const { Dragger } = Upload;
const instructors = [
  { id: 1, name: "Jane Cooper", image: instr1.src },
  { id: 2, name: "Heaven Fitch", image: instr2.src },
  { id: 3, name: "Mickle Brately", image: instr3.src },
  { id: 4, name: "Steve Smith", image: instr4.src },
];

const slotOptions = [
  { value: 10, label: "10" },
  { value: 20, label: "20" },
  { value: 30, label: "30" },
];

export const metadata = {
  title: "Add Topic Details",
  description: "Course Summary",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "icon",
      url: "/favicon.ico",
    },
  ],
};

const AddTopicDetails = ({ handleNextClick, closeAddTopic }) => {
  const [selectedInstructor, setSelectedInstructor] = useState(null);

  const handleInstructorChange = (value) => {
    setSelectedInstructor(value);
  };

  return (
    <div className="content">
      <div className="fixed flex justify-center  pl-[350px] pr-[100px] py-[100px] items-center bg-black bg-opacity-50 z-[9999px] left-0 top-0 h-screen w-screen">
        <Form name="sessionForm" className="bg-white w-full p-5 pb-2">
          <Row gutter={16}>
            <Col span={8}>
              <p className="font-inter">Instructor Name</p>
              <Form.Item
                className="pt-1 font-inter"
                name="instructor"
                rules={[
                  {
                    required: true,
                    message: "Please select an Instructor!",
                  },
                ]}
              >
                <Select
                  placeholder="Select Instructor"
                  optionLabelProp="label" // Set optionLabelProp to "label"
                  value={selectedInstructor}
                  onChange={handleInstructorChange}
                  size="medium"
                >
                  {instructors.map((instructor) => (
                    <Option
                      key={instructor.id}
                      value={instructor.name}
                      label={
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <img
                            src={instructor.image}
                            alt={instructor.name}
                            className="h-[25px] w-[25px] mr-[12px]"
                          />
                          {instructor.name}
                        </div>
                      }
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <img
                          src={instructor.image}
                          alt={instructor.name}
                          className="h-[25px] w-[25px] mr-[12px]"
                        />
                        {instructor.name}
                      </div>
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>

            <Col span={8}>
              <p className="font-inter">
                Topic Title
                <span className="pl-1 text-xs text-red-500">*</span>
              </p>
              <Form.Item
                className="pt-1 font-inter"
                name="location"
                rules={[
                  {
                    required: true,
                    message: "Please enter Topic Title!",
                  },
                ]}
              >
                <Input placeholder="Enter Topic Title" size="medium" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <p className="font-inter">
                Category
                <span className="pl-1 text-xs text-red-500">*</span>
              </p>
              <Form.Item
                className="pt-1 font-inter"
                name="slots"
                rules={[{ required: true, message: "Please select slots!" }]}
              >
                <Select placeholder="Choose no of slots" size="medium">
                  {slotOptions.map((option) => (
                    <Option key={option.value} value={option.value}>
                      {option.label}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <div className="">
            <Col>
              <p className="font-inter">
                Description
                <span className="pl-1 text-xs text-red-500">*</span>
              </p>
              <Form.Item
                className="pt-1 font-inter"
                name="description"
                rules={[
                  {
                    required: true,
                    message: "Please enter Description!",
                  },
                ]}
              >
                <Input.TextArea
                  size="medium"
                  placeholder="Enter Course's Description"
                  autoSize={{ minRows: 4, maxRows: 7 }}
                />
              </Form.Item>
            </Col>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Col>
              <p className="mb-1 font-inter">
                Upload Thumbnail
                <span className="pl-1 text-xs text-red-500">*</span>
              </p>
              <Dragger style={{ backgroundColor: "white", color: "black" }}>
                <div className="flex items-center justify-center">
                  <AppIcons.camera />
                </div>
                <div className="flex flex-row justify-center">
                  <p className=" font-inter font-semibold text-disabled">
                    Drop your Session Image here, or
                  </p>
                  <p className="font-inter font-semibold text-blueSelected">
                    {" "}
                    browse
                  </p>
                </div>
                <p className="font-inter text-sm text-disabled">
                  PNG, JPEG, Max size: 2MB
                </p>
              </Dragger>
            </Col>

            <Col>
              <p className="mb-1 font-inter">
                Upload Video<span className="pl-1 text-xs text-red-500">*</span>
              </p>
              <Dragger style={{ backgroundColor: "white", color: "black" }}>
                <div className="flex items-center justify-center">
                  <AppIcons.video />
                </div>
                <div className="flex flex-row justify-center">
                  <p className=" font-inter font-semibold text-disabled">
                    Drop your Session Image here, or
                  </p>
                  <p className="font-inter font-semibold text-blueSelected">
                    {" "}
                    browse
                  </p>
                </div>
                <p className="font-inter text-sm text-disabled">
                  PNG, JPEG, Max size: 2MB
                </p>
              </Dragger>
            </Col>
          </div>
          <div className="pt-7 flex flex-row justify-between">
            <div></div>

            <div className="flex flex-row items-center gap-4 pt-8">
              <Form.Item>
                <Button
                  onClick={closeAddTopic}
                  className="flex items-center h-[40px] w-[174px] justify-center text-[16px] border border-blueSelected px-16 py-4 font-inter font-medium text-blueSelected"
                >
                  Back
                </Button>
              </Form.Item>

              <Form.Item>
                <Button
                  onClick={handleNextClick}
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
    </div>
  );
};

export default AddTopicDetails;
