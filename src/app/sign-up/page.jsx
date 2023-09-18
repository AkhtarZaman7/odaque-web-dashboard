"use client";
import React from "react";
import { Form, Input, Button, Row, Col, Typography } from "antd";
import { RULES } from "../../utils/rules";

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
            rules={RULES.firstName}
          >
            <Input placeholder="Enter First Name" size="large" />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="lastName"
            rules={RULES.lastName}
          >
            <Input placeholder="Enter Last Name" size="large" />
          </Form.Item>

          <Form.Item
            label="Email Address"
            name="email"
            rules={RULES.email}
          >
            <Input placeholder="Enter Email Address" size="large" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={RULES.password}
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
