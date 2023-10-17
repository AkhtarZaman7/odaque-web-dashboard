"use client";

import React from "react";
import SessionHistory from "../components/SessionsHistory";

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
const sessionHistory = [
    {
      id: 1,
      sessions: "34,146",
      history: "Held Sessions",
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
      direction: iconComponents[5],
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
const SessionHeader = () => {
  return (
    <SessionHistory props={sessionHistory}/>
  )
}
export default SessionHeader;