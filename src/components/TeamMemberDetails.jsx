"use client";
import React, { useState } from "react";
import profilePicture from "../../public/assets/images/profilepicture.png";
import member2 from "../../public/assets/images/teammember2.png";
import member3 from "../../public/assets/images/teammember3.png";
import member4 from "../../public/assets/images/teammember4.png";
import member5 from "../../public/assets/images/teammember5.png";
import member6 from "../../public/assets/images/teammember6.png";
import member7 from "../../public/assets/images/teammember7.png";
import member8 from "../../public/assets/images/teammember8.png";


import TeamDetailsCard from "../components/TeamDetailsCard";
const TeamMemberDetails = () => {
  

  const heading = [
    "Profile",
    "Member",
    "Role",
    "Joining Date",
    "Location",
    "Status",
    "Action",
  ];
  const TeamMembers = [
    {
      id: 1,
      profile: profilePicture.src,
      MemberName: "Jane Cooper",
      role: "Manager",
      joiningDate: "18/08/23",
      location: "Studio A",
      status: "Active",
      Action: ".",
    },

    {
      id: 2,
      profile: member2.src,
      MemberName: "Helli Bossi",
      role: "Manager",
      joiningDate: "20/09/25",
      location: "Gym Floor",
      status: "Inactive",
      Action: ".",
    },
    {
      id: 3,
      profile: member3.src,
      MemberName: "Eric Smith",
      role: "Trainer",
      joiningDate: "20/09/25",
      location: "Dance Studio",
      status: "Active",
      Action: ".",
    },
    {
      id: 4,
      profile: member4.src,
      MemberName: "Coro Drien",
      role: "Manager",
      joiningDate: "20/09/25",
      location: "Studio C",
      status: "Active",
      Action: ".",
    },
    {
      id: 5,
      profile: member5.src,
      MemberName: "John Wrick",
      role: "Trainer",
      joiningDate: "20/09/25",
      location: "Studio D",
      status: "Inactive",
      Action: ".",
    },
    {
      id: 6,
      profile: member6.src,
      MemberName: "Ahmad Aslam",
      role: "Manager",
      joiningDate: "20/09/25",
      location: "Studio M",
      status: "Active",
      Action: ".",
    },
    {
      id: 7,
      profile: member7.src,
      MemberName: "Calara Doe",
      role: "Trainer",
      joiningDate: "20/09/25",
      location: "Studio B",
      status: "Inactive",
      Action: ".",
    },
    {
      id: 8,
      profile: member8.src,
      MemberName: "Saqib Shakeel",
      role: "Trainer",
      joiningDate: "20/09/25",
      location: "Studio B",
      status: "Active",
      Action: ".",
    },
    {
      id: 9,
      profile: member2.src,
      MemberName: "John Doe",
      role: "Trainer",
      joiningDate: "20/09/25",
      location: "Studio B",
      status: "Active",
      Action: ".",
    },
    {
      id: 10,
      profile: member4.src,
      MemberName: "John Doe",
      role: "Trainerr",
      joiningDate: "20/09/25",
      location: "Studio B",
      status: "Active",
      Action: ".",
    },
  ];

  return (
    <div>
      <TeamDetailsCard heading={heading} TeamMembers={TeamMembers} useLink={true}/>
    </div>
  );
};

export default TeamMemberDetails;
