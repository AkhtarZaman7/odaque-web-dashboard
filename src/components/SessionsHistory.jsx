"use client";

import React from "react";

import AppIcons from "../../public/assets/icons";

const iconComponents = [
  AppIcons.completed,
  AppIcons.waiting,
  AppIcons.pending,
  AppIcons.cancelled,
  AppIcons.up,
  AppIcons.down,
  AppIcons.menu,
  AppIcons.pin,
  AppIcons.star,
];

const SessionHistory = (props) => {
  const { coursesHistory } = props;

  const AllSessions = [
    {
      id: 1,
      sessions: "34,146",
      history: "Held sessions",

      text: "down",
      details: "-0.91% this Month",
      ratio: "2.56",
      icon: iconComponents[0],
      direction: iconComponents[4],
    },
    {
      id: 2,
      sessions: "88,980",
      history: "Ongoing Sessions",
      text: "down",
      details: "-0.91% this Month",
      ratio: "2.56",
      icon: iconComponents[1],
      direction: iconComponents[4],
    },
    {
      id: 3,
      sessions: "19,935",
      history: "Ongoing Sessions",
      text: "down",
      details: "-0.91% this Month",
      ratio: "2.56",
      icon: iconComponents[2],
      direction: iconComponents[4],
    },
    {
      id: 4,
      sessions: "20%",
      history: "Ongoing Sessions",
      text: "down",
      details: "-0.91% this Month",
      ratio: "2.56",
      icon: iconComponents[3],
      direction: iconComponents[4],
    },
  ];
  const modifiedSessions = coursesHistory
    ? coursesHistory.map((overrideFields, index) => {
        // Merge with AllSessions or use defaults if no overrides
        const session = { ...AllSessions[index], ...overrideFields };
        return session;
      })
    : AllSessions;

  return (
    <div>
      <div className=" grid h-28 grid-cols-4 gap-14 rounded bg-white p-4 pt-2">
        {modifiedSessions.map((session) => (
          <div
            key={session.id}
            className="flex flex-col rounded-md font-montserrat  "
          >
            <div className=" flex w-full flex-row items-center justify-between  ">
              <div>
                <p className="font-inter text-2xl font-semibold text-black ">
                  {session.sessions}
                </p>
                <p className="my-0 pt-0 font-inter text-sm">
                  {session.history}
                </p>
              </div>
              <div className="flex flex-row pt-2">
                {session.icon && <session.icon />}
              </div>
            </div>

            <div className="flex flex-row items-center pt-0 font-inter">
              {session.direction && <session.direction />}
              <p className="pl-2 text-xs text-descriptiontext">
                {session.ratio}
              </p>
              <p className="pl-2 text-xs text-descriptiontext ">
                {session.details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SessionHistory;
