"use client";
import React from "react";
import { Form, Input, Button, Row, Col, Typography } from "antd";

const { Title } = Typography;

const SignupForm = () => {
  const onFinish = (values) => {
    console.log("Received values:", values);
  };

  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
      <Col span={8}>
        <Title level={3} style={{ textAlign: "center" }}>
          Sign Up
        </Title>
        <Form
          name="signup"
          onFinish={onFinish}
          initialValues={{ remember: true }}
        >
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[
              {
                required: true,
                message: "Please enter your First Name!",
              },
              {
                pattern: /^[A-Za-z]+$/,
                message:
                  "First Name should contain only alphabetic characters.",
              },
            ]}
          >
            <Input placeholder="Enter First Name" size="large" />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[
              {
                required: true,
                message: "Please enter your Last Name!",
              },
              {
                pattern: /^[A-Za-z]+$/,
                message: "Last Name should contain only alphabetic characters.",
              },
            ]}
          >
            <Input placeholder="Enter Last Name" size="large" />
          </Form.Item>

          <Form.Item
            label="Email Address"
            name="email"
            rules={[
              {
                type: "email",
                message: "Please enter a valid Email Address!",
              },
              {
                required: true,
                message: "Please enter your Email Address!",
              },
            ]}
          >
            <Input placeholder="Enter Email Address" size="large" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please enter your Password!",
              },
              {
                min: 8,
                message: "Password must be at least 8 characters long.",
              },
              {
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                message:
                  "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
              },
            ]}
          >
            <Input.Password placeholder="Enter Password" size="large" />
          </Form.Item>

          <Form.Item>
            <Button
              className="flex items-center bg-blueSelected px-16 py-4 font-inter font-semibold text-white"
              htmlType="submit"
            >
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default SignupForm;
