"use client";

import React from "react";

import notificationProfile from "../../public/assets/images/notificationProfile.png";
import AppIcons from "../../public/assets/icons";
// import { useRouter } from "next/router";
// import { useHistory } from "react-router-dom";
import Link from "next/link";
const NotificationDropdown = () => {
  //const history = useHistory();
  const notifications = [
    {
      id: 1,
      name: "Andreas James",
      description: "Lorem ipsum is simple dummy text of printing",
      date: "02 March 4:17pm",
      mark: "Mark as Read",
      profile: notificationProfile.src,
    },

    {
      id: 2,
      name: "Andreas James",
      description: "Lorem ipsum is simple dummy text of printing",
      date: "02 March 4:17pm",
      mark: "Mark as Read",
      profile: notificationProfile.src,
    },
    {
      id: 3,
      name: "Andreas James",
      description: "Lorem ipsum is simple dummy text of printing",
      date: "02 March 4:17pm",
      mark: "Mark as Read",
      profile: notificationProfile.src,
    },
  ];
  return (
    <div className="absolute -right-6 top-12 z-50 max-h-[400px] overflow-y-auto rounded-md   shadow-lg">
      <div
        className="flex flex-col rounded-md  shadow-md "
        style={{ height: "400px", width: "400px" }}
      >
        <div className="pl-[348px] -mb-1 ">
          <AppIcons.UpArrow />
        </div>
        <div className="bg-white">
          <div className="flex items-center  justify-between rounded-md bg-blueSelected p-3">
            <p className="font-inter font-semibold text-white">
              Notification(12)
            </p>
            <div>
              <button
                type="button"
                className="font-inter text-sm font-light text-white "
              >
                Clear all
              </button>
            </div>
          </div>

          <div className=" py-0 ">
            {notifications.map((item) => (
              <div
                key={item.id}
                className="border-b border-border2 p-3 pb-2 font-inter hover:bg-hover"
              >
                <div className="flex ">
                  <div className="flex w-full flex-row ">
                    <div>
                      <img
                        src={item.profile}
                        alt={item.name}
                        style={{ width: "65px", height: "45px" }}
                      />
                    </div>
                    <div className=" flex flex-col justify-between pl-2">
                      <p
                        style={{ textAlign: "left" }}
                        className="pt-1 leading-tight"
                      >
                        <span style={{ fontWeight: "bold", color: "black" }}>
                          {item.name}
                        </span>{" "}
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between pt-3 ">
                        <p className="text-sm font-light text-descriptiontext">
                          {item.date}
                        </p>
                        <button
                          type="button"
                          className="text-sm text-blueSelected"
                        >
                          {item.mark}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className=" bottom-0 flex h-12 w-full items-center justify-center ">
            <Link href="/dashboard/sessions/view-notifications">
              <button type="button">
                <p className="font-semibold text-blueSelected">View All</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationDropdown;
