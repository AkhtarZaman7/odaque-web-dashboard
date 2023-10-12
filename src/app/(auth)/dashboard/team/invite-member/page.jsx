"use client";

import { Button, Col, Form, Input, Row, Select, Upload } from "antd";
import React from "react";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import Link from "next/link";
const { Option } = Select;
const roles = [
  { value: "Trainer", label: "Trainer" },
  { value: "Manager", label: "Manager" },
];

const InviteMember = () => {
  const onFinish = (values) => {
    console.log("Received values:", values);
  };
  const createNotification = (type) => {
    return () => {
      switch (type) {
        case "info":
          NotificationManager.info("Info message");
          break;
        case "success":
          NotificationManager.success("Success message", "Invitation Sent");
          break;
        case "warning":
          NotificationManager.warning(
            "Warning message",
            "Close after 3000ms",
            3000
          );
          break;
        case "error":
          NotificationManager.error("Error message", "Click me!", 5000, () => {
            alert("callback");
          });
          break;
      }
    };
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
              <Link href="./member-detail">
                <Button
                  className="flex items-center h-[40px] w-[174px] justify-center text-[16px] bg-blueSelected px-16 py-4 font-inter font-medium text-white"
                  htmlType="submit"
                  onClick={createNotification("success")}
                >
                  Send Invite
                </Button>
              </Link>
            </Form.Item>
          </div>
        </div>
      </Form>
      <NotificationContainer />
    </div>
  );
};

export default InviteMember;
