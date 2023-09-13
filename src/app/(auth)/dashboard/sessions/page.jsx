"use client";

import React, { useState } from "react";

import SessionActivityDetails from "../../../../components/SessionActivityDetails";
import SessionHistory from "../../../../components/SessionsHistory";
import AppIcons from "../../../../../public/assets/icons";

import Forms from "./forms";

const Icon = AppIcons.plus;

const Team = () => {
  const [addSession, setAddSession] = useState(false);

  return (
    <div>
      {addSession ? (
        <Forms />
      ) : (
        <div className="flex flex-1 flex-col space-y-5">
          <SessionHistory />
          <div className=" flex flex-col rounded-md bg-white p-4">
            <button
              type="submit"
              className="flex flex-row justify-between font-inter"
              onClick={() => setAddSession(!addSession)}
            >
              <p className="font-semibold text-black">
                Session Activity Details
              </p>
              <div className="flex h-7 flex-row items-center justify-between rounded bg-blueSelected p-2 px-3 ">
                <Icon />
                <p className="pl-2 text-xs text-white">Add New Session</p>
              </div>
            </button>
            <SessionActivityDetails />
          </div>
        </div>
      )}
    </div>
  );
};

export default Team;
