import React from "react";
import { Col, Form, Input } from "antd";
const SubscriptionInput = ({ label, name, rules, placeholder }) => {
  return (
    <Col>
      <p className="font-sans">
        {label}
        <span className="pl-1 text-xs text-red-500">*</span>
      </p>
      <Form.Item className="pt-1 font-inter" name={name} rules={rules}>
        <Input placeholder={placeholder} size="large" />
      </Form.Item>
    </Col>
  );
};

export default SubscriptionInput;
