import React from "react";
import AppIcons from "../../public/assets/icons";
import Link from "next/link";
const SubscriptionDisplay = () => {
  return (
    <div className="w-full p-4 bg-white h-full">
      <div className="flex flex-row justify-between border-b pb-4">
        <p className="text-[20px]  font-medium text-blackSecondary font-sans ">
          Subscription Plan
        </p>
        <Link href="./subscription/create-plan">
          <button
            type="submit"
            className="flex flex-row justify-between font-inter"
          >
            <div className="flex h-7 flex-row items-center justify-between rounded bg-blueSelected py-[8px] p-2 px-3 border border-blueSelected">
              <p className=" text-xs font-inter  text-white">Add Plan</p>
              <div className="pl-2">
                <AppIcons.plus />
              </div>
            </div>
          </button>
        </Link>
      </div>
      <div className="py-[70px] hey">
        <div className=" flex w-full items-center justify-center flex-col">
          <div className="bg-[url('/assets/icons/subscriptionbg.svg')]  w-[300px]  h-[300px] bg-cover bg-no-repeat"></div>
          <p className="text-[14px] font-sans font-medium text-blackSecondary pt-[18px]">
            Create Subscription Plan here
          </p>
        </div>
      </div>
    </div>
  );
};
export default SubscriptionDisplay;
