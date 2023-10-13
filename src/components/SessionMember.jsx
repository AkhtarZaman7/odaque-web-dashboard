import React from "react";
import fitnessPicture from "../../public/assets/images/fitnesspicture.png";
import profilePicture from "../../public/assets/images/profilepicture.png";
import AppIcons from "../../public/assets/icons";
import subs1 from "../../public/assets/images/sessions_subs01.png";
import subs2 from "../../public/assets/images/sessions_subs02.png";
import subs3 from "../../public/assets/images/sessions_subs02.png";
import SessionActivityDetails from "./SessionActivityDetails";

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

const SessionMember = () => {
  const SessionDetail = [
    {
      id: 1,
      picture: fitnessPicture.src,
      title: "Lorem ipsum dolor sit amet,",
      price: "$10.0",
      date: "22 Nov - 30 Nov",
      rating: 15,
      details:
        "High-Intensity Interval Training (HIIT) Cardio, Boost your fitness and torch calories",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ipsum dolor sit amet, consectetur adipiscing elit",
      profilePicture: profilePicture.src,
      Name: "Jane Cooper",
      status: "Active",
      locationIcon: iconComponents[7],
      starIcon: iconComponents[8],
      studio: "Studio A",
      menuIcon: iconComponents[6],
      category: "Fitness Gym",
      edit: "Edit",
      studio: "Studio A",
      startDate: "September 26, 2023",
      subscribers: [
        { id: 1, image: subs1.src },
        { id: 2, image: subs2.src },
        { id: 3, image: subs3.src },
      ],
      endDate: "November 06, 2023",
    },
  ];

  return <SessionActivityDetails props={SessionDetail} />;
};
export default SessionMember;
