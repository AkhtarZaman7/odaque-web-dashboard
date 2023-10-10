"use client";

import { Button, Col, Form, Input, Row, Select, Upload } from "antd";
import React from "react";

const { Option } = Select;
const roles = [
  { value: "Trainer", label: "Trainer" },
  { value: "Manager", label: "Manager" },
];

const InviteMember = () => {
  const onFinish = (values) => {
    console.log("Received values:", values);
  };

  return (
    <div className="rounded-md bg-white px-4 pt-3">
      <h1 className="mb-4 text-xl font-semibold">Invite Member</h1>
      <Form name="sessionForm" onFinish={onFinish}>
        <Row gutter={16}>
          <Col span={8}>
            <p className="font-inter">
              First Name<span className="pl-1 text-xs text-red-500">*</span>
            </p>
            <Form.Item
              className="pt-1 font-inter"
              name="firstName"
              rules={[{ required: true, message: "Please enter First Name!" }]}
            >
              <Input placeholder="Enter Member's First Name" size="large" />
            </Form.Item>
          </Col>

          <Col span={8}>
            <p className="font-inter">
              Last Name<span className="pl-1 text-xs text-red-500">*</span>
            </p>
            <Form.Item
              className="pt-1 font-inter"
              name="lastName"
              rules={[{ required: true, message: "Please enter Last Name!" }]}
            >
              <Input placeholder="Enter Last Name" size="large" />
            </Form.Item>
          </Col>

          <Col span={8}>
            <p className="font-inter">
              Role<span className="pl-1 text-xs text-red-500">*</span>
            </p>
            <Form.Item
              className="pt-1 font-inter"
              name="roles"
              rules={[{ required: true, message: "Please Choose Role!" }]}
            >
              <Select placeholder="Choose Role" size="large">
                {roles.map((option) => (
                  <Option key={option.value} value={option.value}>
                    {option.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>

          <Col span={8}>
            <p className="font-inter">
              Email<span className="pl-1 text-xs text-red-500">*</span>
            </p>
            <Form.Item
              className="pt-1 font-inter"
              name="Email"
              rules={[{ required: true, message: "Please enter Email!" }]}
            >
              <Input placeholder="Enter Email" size="large" />
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
        </Row>

        <div className="flex items-center justify-between ">
          <div />
          <div className="flex flex-row items-center gap-4 pt-28">
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
                Send Invite
              </Button>
            </Form.Item>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default InviteMember;
