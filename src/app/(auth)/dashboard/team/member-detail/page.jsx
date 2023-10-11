"use client";
import React, { useState } from "react";
import AppIcons from "../../../../../../public/assets/icons";
import Link from "next/link";
import MemberDetailCard from "../../../../../components/MemberDetailCard";
import MemberCourse from "../../../../../components/MemberCourse";
import MemberSession from "../../../../../components/MemberSession";

const MemberDetail = () => {
  const [joined, setJoined] = useState(true);
  return (
    <div className="content">
      <div className="flex flex-1 flex-col space-y-5">
        <div className=" flex flex-col rounded-md h-full">
          <div className="flex justify-between w-full flex-row items-center  pb-4">
            <div className="flex flex-row items-center">
              <p className="font-inter text-descriptiontext font-light text-[14px] ">
                Team
              </p>
              <p className="pl-[6px] font-inter text-descriptiontext font-light text-[14px]">
                /
              </p>
              <p className=" text-secondary font-sans text-[14px] font-medium pl-[6px]">
                Member Detail
              </p>
            </div>
            <Link href="/dashboard/team/invite-member">
              <button
                type="submit"
                className="flex flex-row justify-between font-inter"
              >
                <div className="flex h-7 flex-row items-center justify-between rounded bg-blueSelected p-2 px-3 ">
                  <AppIcons.plus />
                  <p className="pl-2 text-xs font-medium font-inter text-white">
                    Invite new member
                  </p>
                </div>
              </button>
            </Link>
          </div>
          <MemberDetailCard />
        </div>
        <div className="bg-white">
          <div className="px-[24px] py-[20px] pb-[26px]">
            <p className="text-secondary text-[20px] font-sans font-medium">
              Joined Sessions & Courses
            </p>
            <div className="pt-[20px] border-b flex flex-row">
              <button
                onClick={() => setJoined(true)}
                className={`${
                  joined
                    ? "text-blueSelected border-b border-blueSelected"
                    : "text-disabled"
                }`}
              >
                <p className="px-2 text-[18px] font-medium pb-2">Sessions</p>
              </button>
              <div className="pl-16">
                <button
                  onClick={() => setJoined(false)}
                  className={`${
                    joined
                      ? "text-disabled"
                      : "text-blueSelected border-b border-blueSelected"
                  }`}
                >
                  <p className=" px-2  text-[18px] font-medium pb-2">Courses</p>
                </button>
              </div>
            </div>
            {joined ? <MemberSession /> : <MemberCourse />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MemberDetail;
