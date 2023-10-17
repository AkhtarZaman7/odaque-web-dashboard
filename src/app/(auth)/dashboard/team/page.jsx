import React from "react";
import TeamHeader from "../../../../components/TeamHeader";
import Link from "next/link";
import AppIcons from "../../../../../public/assets/icons";
import TeamMemberDetails from "../../../../components/TeamMemberDetails";
export const metadata = {
  title: "Team",
  description: "Team",
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

const Team = () => (
  <div className="content">
    <div className="flex flex-1 flex-col space-y-5">
      <TeamHeader />
      <div className=" flex flex-col rounded-md bg-white p-4 h-full">
        <div className="flex justify-between w-full flex-row items-center border-b pb-4">
          <p className="font-semibold text-black text-[20px]">
            Team Member Details
          </p>
          <Link
            href="/dashboard/team/invite-member
        "
          >
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
        <TeamMemberDetails />
      </div>
    </div>
  </div>
);

export default Team;
