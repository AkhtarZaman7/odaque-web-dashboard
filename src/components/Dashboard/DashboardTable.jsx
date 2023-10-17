"use client";
import React from "react";
import SessionDetailsChart from "../../components/SessionDetailsChart";
import UpcomingSessions from "../../components/UpcomingSessions";
import Chartjs from "../../components/Chartjs";
export default function DashboardTable() {
  return (
    <div
      className="my-5 flex h-full w-full flex-col rounded-md bg-bgColor"
      // style={{
      //   height: "calc(100vh - 15rem)",
      // }}
    >
      <div className="grid grid-cols-[65%_35%] space-x-[18px]">
        <div className="h-[344px] bg-white rounded-lg px-[16px] py-[18px]">
          <SessionDetailsChart />
        </div>
        <div className="h-[344px] bg-white rounded-lg px-[16px] py-[18px]">
          <UpcomingSessions />
        </div>
      </div>
      {/* <Chartjs /> */}
    </div>
  );
}
