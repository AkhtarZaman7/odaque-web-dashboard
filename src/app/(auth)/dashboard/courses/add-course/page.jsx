"use client";

// import { UploadProps } from "antd";
import { Button, Col, Form, Input, message, Row, Select, Upload } from "antd";
import React, { useState } from "react";

import AppIcons from "../../../../../../public/assets/icons";
import instr1 from "../../../../../../public/assets/images/instr1.png";
import instr2 from "../../../../../../public/assets/images/instr2.png";
import instr3 from "../../../../../../public/assets/images/instr3.png";
import instr4 from "../../../../../../public/assets/images/instr4.png";
import Link from "next/link";

const { Option } = Select;
const { Dragger } = Upload;
const categoryOptions = [
  { value: "Fitness Gym", label: "Fitness Gym" },
  { value: "Dance Studio", label: "Dance Studio" },
  { value: "Yoga Training", label: "Yoga Training" },
];

const priceOptions = [
  { value: 20, label: "$20" },
  { value: 30, label: "$30" },
  { value: 40, label: "$40" },
];

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

const Forms = () => {
  const props = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };
  const onFinish = (values) => {
    console.log("Received values:", values);
  };
  const [selectedInstructor, setSelectedInstructor] = useState(null);

  const handleInstructorChange = (value) => {
    setSelectedInstructor(value);
  };
  return (
    <div className="rounded-md bg-white px-4 pt-3">
      <h1 className="mb-4 text-xl font-semibold">Create Course</h1>
      <Form name="sessionForm" onFinish={onFinish}>
        <Row gutter={16}>
          <Col span={8}>
            <p className="font-inter ">
              Course Title<span className="pl-1 text-xs text-red-500">*</span>
            </p>
            <Form.Item
              className="pt-1 font-inter"
              name="courseTitle"
              rules={[
                { required: true, message: "Please enter Course Title!" },
              ]}
            >
              <Input placeholder="Enter Course Title" size="large" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <p className="font-inter">
              Pricing<span className="pl-1 text-xs text-red-500">*</span>
            </p>
            <Form.Item
              className="pt-1 font-inter"
              name="price"
              rules={[{ required: true, message: "Please select Price!" }]}
            >
              <Select placeholder="Choose Price" size="large">
                {priceOptions.map((option) => (
                  <Option key={option.value} value={option.value}>
                    {option.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <p className="font-inter">
              Category<span className="pl-1 text-xs text-red-500">*</span>
            </p>
            <Form.Item
              className="pt-1 font-inter"
              name="category"
              rules={[{ required: true, message: "Please choose Category!" }]}
            >
              <Select placeholder="Choose Category" size="large">
                {categoryOptions.map((option) => (
                  <Option key={option.value} value={option.value}>
                    {option.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>

          <Col span={8}>
            <p className="font-inter">Instructor Name</p>
            <Form.Item
              className="pt-1 font-inter"
              name="instructor"
              rules={[
                { required: true, message: "Please select an Instructor!" },
              ]}
            >
              <Select
                placeholder="Select Instructor"
                optionLabelProp="label" // Set optionLabelProp to "label"
                value={selectedInstructor}
                onChange={handleInstructorChange}
                size="large"
              >
                {instructors.map((instructor) => (
                  <Option
                    key={instructor.id}
                    value={instructor.name}
                    label={
                      <div style={{ display: "flex", alignItems: "center" }}>
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
              Location<span className="pl-1 text-xs text-red-500">*</span>
            </p>
            <Form.Item
              className="pt-1 font-inter"
              name="location"
              rules={[
                { required: true, message: "Please enter Course Location!" },
              ]}
            >
              <Input placeholder="Enter Course Location" size="large" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <p className="font-inter">
              Total Slots<span className="pl-1 text-xs text-red-500">*</span>
            </p>
            <Form.Item
              className="pt-1 font-inter"
              name="slots"
              rules={[{ required: true, message: "Please select slots!" }]}
            >
              <Select placeholder="Choose no of slots" size="large">
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
              Description<span className="pl-1 text-xs text-red-500">*</span>
            </p>
            <Form.Item
              className="pt-1 font-inter"
              name="description"
              rules={[{ required: true, message: "Please enter Description!" }]}
            >
              <Input.TextArea
                size="large"
                placeholder="Enter Course's Description"
                autoSize={{ minRows: 5, maxRows: 7 }}
              />
            </Form.Item>
          </Col>
        </div>
        <Col>
          <p className="mb-1 font-inter">
            Upload Image<span className="pl-1 text-xs text-red-500">*</span>
          </p>
          <Dragger
            {...props}
            style={{ backgroundColor: "white", color: "black" }}
          >
            <div className="flex items-center justify-center">
              <AppIcons.Upload />
            </div>
            <div className="flex flex-row justify-center">
              <p className=" font-inter font-semibold text-disabled">
                Drop your Course Image here, or
              </p>
              <p className="font-inter font-semibold text-blueSelected pl-1">
                {" "}
                browse
              </p>
            </div>
            <p className="font-inter text-sm text-disabled">
              PNG, JPEG, Max size: 2MB
            </p>
          </Dragger>
        </Col>

        <div className="flex items-center justify-between ">
          <div />
          <div className="flex flex-row items-center gap-4 pt-16">
            <Form.Item>
              <Button className="flex items-center h-[40px] w-[174px] justify-center text-[16px] border border-blueSelected px-16 py-4 font-inter font-medium text-blueSelected">
                Back
              </Button>
            </Form.Item>
            <Link href="/dashboard/courses/course-summary">
              <Form.Item>
                <Button
                  className="flex items-center h-[40px] w-[174px] justify-center text-[16px] bg-blueSelected px-16 py-4 font-inter font-medium text-white"
                  htmlType="submit"
                >
                  Next
                </Button>
              </Form.Item>
            </Link>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Forms;
