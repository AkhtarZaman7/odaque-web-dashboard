"use client";

import React, { useEffect, useState } from "react";

import AppIcons from "../../../../../../public/assets/icons";
import Link from "next/link";

import Button from "../../../../../components/common/Button";
import { useSearchParams } from "next/navigation";
import { SessionDetails as details } from "../../../../../components/common/dummy";
// import { useParams } from "react-router-dom";

const SessionDetails = ({}) => {
  const searchParams = useSearchParams();
  const item = details[searchParams.get("id") - 1];
 

  const Icon = AppIcons.plus;
  return (
    <div className=" space-y-10 flex flex-col max-h-screen">
      <div className="flex justify-between w-full flex-row items-center ">
        <p className="font-semibold text-[20px] text-black">
          Session Activity Details
        </p>
        <Link href="/dashboard/sessions/add-session">
          <button
            type="submit"
            className="flex flex-row justify-between font-inter"
          >
            <div className="flex h-7 flex-row items-center justify-between rounded bg-blueSelected p-2 px-3 ">
              <Icon />
              <p className="pl-2 text-xs text-white">Add New Session</p>
            </div>
          </button>
        </Link>
      </div>

      <div className=" flex flex-col rounded-md   bg-white py-3 pt-6 px-[20px] h-[570px] ">
        <div className=" border-b pb-4 flex items-center flex-row justify-between">
          <p className="text-blackSecondary font-semibold text-[20px]">
            Session Details
          </p>
          <button className=" bg-editBg rounded-md px-[16px] py-[4px]">
            <div className="w-[29px] h-[22px] flex items-center justify-center">
              <p className="px-2 py-1 text-[14px] font-medium text-editText font-inter ">
                Edit
              </p>
            </div>
          </button>
        </div>

        <div className="flex flex-col h-full justify-between pb-5">
          <div className="grid grid-cols-4 pt-[24px] w-full ">
            <div className="w-[199.81px] flex flex-col ">
              <div className="flex flex-col h-[140px] ">
                <div className="w-[111px] h-[24px]">
                  <p className="font-inter text-[16px] text-black">
                    Session Image
                  </p>
                </div>
                <div className="pt-[8px]">
                  <img src={item.picture} />
                </div>
              </div>
              <div className="h-[40px]"></div>
              <div className="w-[200px] h-[56px]">
                <div className="h-[24px] w-[65px]">
                  <p className="text-[16px] text-black font-inter">Location</p>
                </div>
                <div className="pt-[8px] h-[24px] ">
                  <p className="font-light text-[16px] text-descriptiontext font-inter">
                    {item.studio}
                  </p>
                </div>
              </div>
              <div className="h-[40px]"></div>
              <div className="w-[155px] h-[56px] ">
                <div className="h-[24px] ">
                  <p className="text-[16px] text-black font-inter">
                    Start Date
                  </p>
                </div>
                <div className="pt-[8px] h-[24px] w-[155px]">
                  <p className="font-light text-[16px] text-descriptiontext font-inter">
                    {item.startDate}
                  </p>
                </div>
              </div>
            </div>

            {/* 2nd div */}
            <div className="w-[199.81px] ">
              <div className="flex flex-col h-[140px] ">
                <div className="w-[111px] h-[24px]">
                  <p className="font-inter text-[16px] text-black ">
                    Session Title
                  </p>
                </div>
                <div className="pt-[8px]">
                  <p className="font-light text-[16px] text-descriptiontext font-inter">
                    {item.title}
                  </p>
                </div>
              </div>
              <div className="h-[40px]"></div>
              <div className="w-[200px] h-[56px]">
                <div className="h-[24px] w-[65px]">
                  <p className="text-[16px] text-black font-inter">Category</p>
                </div>
                <div className="pt-[8px] h-[24px] ">
                  <p className="font-light text-[16px] text-descriptiontext font-inter">
                    {item.category}
                  </p>
                </div>
              </div>
              <div className="h-[40px]"></div>
              <div className="w-[155px] h-[56px] ">
                <div className="h-[24px] ">
                  <p className="text-[16px] text-black font-inter">End Date</p>
                </div>
                <div className="pt-[8px] h-[24px] w-[155px]">
                  <p className="font-light text-[16px] text-descriptiontext font-inter">
                    {item.endDate}
                  </p>
                </div>
              </div>
            </div>

            {/* 3rd div */}

            <div className="w-[199.81px] ">
              <div className="flex flex-col h-[140px] ">
                <div className="w-[111px] h-[24px]">
                  <p className="font-inter text-[16px] text-black ">Pricing</p>
                </div>
                <div className="pt-[8px]">
                  <p className="font-light text-[16px] text-descriptiontext font-inter">
                    {item.price}
                  </p>
                </div>
              </div>
              <div className="h-[40px]"></div>
              <div className="w-[200px] h-[56px]">
                <div className="h-[24px] ">
                  <p className="text-[16px] text-black font-inter">
                    Instructor Name
                  </p>
                </div>
                <div className="pt-[8px] h-[24px] ">
                  <p className="font-light text-[16px] text-descriptiontext font-inter">
                    {item.Name}
                  </p>
                </div>
              </div>
              <div className="h-[40px]"></div>
              <div className="w-[155px] h-[56px] ">
                <div className="h-[24px] ">
                  <p className="text-[16px] text-black font-inter">
                    Start Date
                  </p>
                </div>
                <div className="pt-[8px] h-[24px] w-[155px]">
                  <p className="font-light text-[16px] text-descriptiontext font-inter">
                    {item.startDate}
                  </p>
                </div>
              </div>
            </div>

            {/* 4th div */}
            <div className="w-[242.77px] ">
              <div className="flex flex-col h-[140px]">
                <div className=" h-[24px]">
                  <p className="font-inter text-[16px] text-black ">
                    Instructor Image
                  </p>
                </div>
                <div className="pt-[8px]">
                  <img src={item.profilePicture} />
                </div>
              </div>

              <div className="h-[40px]"></div>

              <div className="w-[200px] h-[128px]">
                <div className="h-[24px] ">
                  <p className="text-[16px] text-black font-inter">
                    Description
                  </p>
                </div>
                <div className="pt-[8px] h-[964px] ">
                  <p className="font-light text-[16px] text-descriptiontext font-inter">
                    {item.details}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between w-full ">
            <div></div>

            <div className="flex items-center gap-4">
              <Button
                size="text-[16px]"
                usingFont="font-inter"
                text="Back"
                color="text-blueSelected"
                bg="bg-gray-100"
                border="border"
                py="py-2"
                px="px-3"
                rounded="rounded"
                font="font-medium"
                height="h-[40px]"
                width="w-[174px]"
              />
              <Button
                size="text-[16px]"
                usingFont="font-inter"
                text="Save & Next"
                color="text-gray-100"
                bg="bg-blueSelected"
                py="py-2"
                px="px-3"
                border="border"
                rounded="rounded"
                font="font-medium"
                height="h-[40px]"
                width="w-[174px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionDetails;
