"use client";
import React from "react";
import { Select } from "antd";
import LineChart from "../components/LineChart";

const SessionDetailsChart = () => {
  const { Option } = Select;
  return (
    <div>
      <div className="flex justify-between items-center w-full">
        <p className="text-[20px] font-semibold text-secondary ">
          Session Details
        </p>
        <div className=" ">
          <Select defaultValue="monthly" style={{ width: 120 }}>
            <Option value="monthly">Monthly</Option>
            <Option value="yearly">Yearly</Option>
          </Select>
        </div>
      </div>
      <div className="w-full">
      <LineChart />

      </div>
      
    </div>
  );
};
export default SessionDetailsChart;
