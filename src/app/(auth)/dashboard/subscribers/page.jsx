import React from "react";
import AppIcons from "../../../../../public/assets/icons";
import SubscrierDetails from "../../../../components/SubscriberDetails";
import Link from "next/link";
export const metadata = {
  title: "Subscribers",
  description: "Subscribers",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "icon",
      url: "/favicon.ico",
    },
  ],
};

const Subscribers = () => {
  return (
    <div className="bg-white  p-4">
      <div className="flex justify-between  w-full flex-row items-center border-b  pb-4 ">
        <p className="font-semibold text-secondary text-[20px]">
          Subscriber Details
        </p>
        <Link
          href="/dashboard/team/invite-subscriber
        "
        >
          <button
            type="submit"
            className="flex flex-row justify-between font-inter"
          >
            <div className="flex h-7 flex-row items-center justify-between rounded bg-blueSelected p-2 px-3 ">
              <AppIcons.plus />
              <p className="pl-2 text-xs font-medium font-inter text-white">
                Invite new subscriber
              </p>
            </div>
          </button>
        </Link>
      </div>

      <SubscrierDetails />
    </div>
  );
};
export default Subscribers;
