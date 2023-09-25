"use client";

import React from "react";

import { Col, Form, Input, Row, Select } from "antd";
import { RULES } from "../utils/rules";
const { Option } = Select;

const CityOptions = [
  { value: "City A", label: "City A" },
  { value: "City B", label: "City B" },
  { value: "City C", label: "City C" },
];
const studioOptions = [
  { value: "Studio A", label: "Studio A" },
  { value: "Studio B", label: "Studio B" },
  { value: "Studio C", label: "Studio C" },
];

const SignUpDetailsForm = () => {
  return (
    <div>
      <div className="pb-6 pt-4">
        <p className="font-inter text-[24px] font-bold">Studio Information</p>
      </div>
      <Row gutter={16}>
        <Col span={8}>
          <p className="font-inter">
            Name
            <span className="pl-1 text-xs text-red-500">*</span>
          </p>
          <Form.Item
            className="pt-1 font-inter"
            name="Name"
            rules={RULES.fullname}
          >
            <Input
             
              placeholder="Enter Name"
              size="large"
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <p className="font-inter">
            Email
            <span className="pl-1 text-xs text-red-500">*</span>
          </p>
          <Form.Item
            className="pt-1 font-inter"
            name="Email"
            rules={RULES.email}
          >
            <Input placeholder="Enter Email" size="large" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <p className="font-inter">
            Address
            <span className="pl-1 text-xs text-red-500">*</span>
          </p>
          <Form.Item
            className="pt-1 font-inter"
            name="Address"
            rules={RULES.address}
          >
            <Input placeholder="Enter Address" size="large" />
          </Form.Item>
        </Col>

        <Col span={8}>
          <p className="font-inter">
            Location
            <span className="pl-1 text-xs text-red-500">*</span>
          </p>
          <Form.Item
            className="pt-1 font-inter"
            name="Location"
            rules={RULES.location}
          >
            <Input placeholder="Enter Location" size="large" />
          </Form.Item>
        </Col>

        <Col span={8}>
          <p className="font-inter">
            City
            <span className="pl-1 text-xs text-red-500">*</span>
          </p>
          <Form.Item className="pt-1 font-inter" name="city" rules={RULES.city}>
            <Select placeholder="Choose City" size="large">
              {CityOptions.map((option) => (
                <Option key={option.value} value={option.value}>
                  {option.label}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>

        <Col span={8}>
          <p className="font-inter">
            Zip Code
            <span className="pl-1 text-xs text-red-500">*</span>
          </p>
          <Form.Item
            className="pt-1 font-inter"
            name="zipcode"
            rules={RULES.zipcode}
          >
            <Input placeholder="Enter Zipcode" size="large" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <p className="font-inter">
            Studio Type
            <span className="pl-1 text-xs text-red-500">*</span>
          </p>
          <Form.Item
            className="pt-1 font-inter"
            name="studio"
            rules={RULES.studiotype}
          >
            <Select placeholder="Choose Studio" size="large">
              {studioOptions.map((option) => (
                <Option key={option.value} value={option.value}>
                  {option.label}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col span={8}>
          <p className="font-inter">
            Contact No
            <span className="pl-1 text-xs text-red-500">*</span>
          </p>
          <Form.Item
            className="pt-1 font-inter"
            name="Contact No"
            rules={RULES.contactno}
          >
            <Input placeholder="Enter Zipcode" size="large" />
          </Form.Item>
        </Col>
      </Row>
    </div>
  );
};

export default SignUpDetailsForm;
