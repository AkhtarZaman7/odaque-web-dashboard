"use client";



import SessionActivityDetails from "../../../../components/SessionActivityDetails";
import SessionHistory from "../../../../components/SessionsHistory";
import AppIcons from "../../../../../public/assets/icons";
import Link from "next/link";

const Icon = AppIcons.plus;

export const metadata = {
  title: "Sessions",
  description: "Sessions",
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

const Sessions = () => (
  <div>
    <div className="flex flex-1 flex-col space-y-5">
      <SessionHistory />
      <div className=" flex flex-col rounded-md bg-white p-4">
        <div className="flex justify-between w-full flex-row items-center ">
          <p className="font-semibold text-black">Session Activity Details</p>
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
        <SessionActivityDetails />
      </div>
    </div>
  </div>
);

export default Sessions;
