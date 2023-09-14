"use client";
import React from "react";
import { Form, Input, Button, Row, Col, Typography } from "antd";

const { Title } = Typography;

const SignInForm = () => {
  const onFinish = (values) => {
    console.log("Received values:", values);
  };

  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
      <Col span={8}>
        <Title level={3} style={{ textAlign: "center" }}>
          Sign In
        </Title>
        <Form
          name="signin"
          onFinish={onFinish}
          initialValues={{ remember: true }}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please enter your Username!",
              },
              {
                pattern: /^[A-Za-z0-9_]{5,}$/,
                message:
                  "Username should contain at least 5 characters and can include letters, numbers, and underscores.",
              },
            ]}
          >
            <Input placeholder="Enter Username" size="large" />
          </Form.Item>

          {/* Password field */}
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

export default SignInForm;
