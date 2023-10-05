import React from "react";
import AppIcons from "../../../../../public/assets/icons";
export const metadata = {
  title: "Subscription",
  description: "Subscription",
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

const Subscription = () => (
  <div className="content">
    <div className="w-full p-4 bg-white">
      <div className="flex flex-row justify-between border-b pb-4">
        <p className="text-[20px]  font-medium text-blackSecondary font-sans ">
          Subscription Plan
        </p>

        <button
          type="submit"
          className="flex flex-row justify-between font-inter"
          //   onClick={handleAddTopicClick}
        >
          <div className="flex h-7 flex-row items-center justify-between rounded bg-blueSelected py-[8px] p-2 px-3 border border-blueSelected">
            <p className=" text-xs font-inter  text-white">Add Plan</p>
            <div className="pl-2">
              <AppIcons.plus />
            </div>
          </div>
        </button>
      </div>
    </div>
  </div>
);

export default Subscription;
