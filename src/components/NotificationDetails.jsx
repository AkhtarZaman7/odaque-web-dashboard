"use client";

import React from "react";
import { v4 as uuidv4 } from "uuid";

const NotificationDetails = ({ notifications }) => {
  return (
    <div className="space-y-5">
      {notifications.map((item) => (
        <div
          key={item.id}
          className="pl-3 pt-3 pb-0 h-[166px] flex flex-col justify-between"
        >
          <div className=" flex justify-between">
            <div className="flex flex-col justify-between h-[71px] w-[181px] pb-1">
              <div className=" flex flex-row items-center">
                <img src={item.profile} alt={item.name} />
                <p className="font-semibold text-[20px] pl-[16px] text-black">
                  {item.name}
                </p>
              </div>

              <div className="flex flex-row items-center ">
                {Array.from({ length: 5 }).map((_) => (
                  <div key={uuidv4()}>{item.starIcon && <item.starIcon />}</div>
                ))}
              </div>
            </div>

            <div>
              <p className="font-inter text-[14px] font-medium text-black">
                {item.date}
              </p>
            </div>
          </div>

          <div>
            <p className="font-inter text-[16px] font-light text-descriptiontext">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationDetails;
