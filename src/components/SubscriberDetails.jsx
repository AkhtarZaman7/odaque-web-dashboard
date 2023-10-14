"use client";
import React from "react";
import profilePicture from "../../public/assets/images/profilepicture.png";
import member2 from "../../public/assets/images/teammember2.png";
import member3 from "../../public/assets/images/teammember3.png";
import member4 from "../../public/assets/images/teammember4.png";
import member5 from "../../public/assets/images/teammember5.png";
import member6 from "../../public/assets/images/teammember6.png";
import member7 from "../../public/assets/images/teammember7.png";
import member8 from "../../public/assets/images/teammember8.png";
import TeamDetailsCard from "../components/TeamDetailsCard";

const SubscriberDetails = () => {
  const heading = [
    "Profile",
    "Name",
    "Subscription Type",
    "Joining Date",
    "Location",
    "Status",
    "Action",
  ];
  const Subscribers = [
    {
      id: 1,
      profile: profilePicture.src,
      MemberName: "Jane Cooper",
      subscriptionType: "Premium",
      joiningDate: "18/08/23",
      location: "Studio A",
      status: "Paid",
      Action: ".",
    },

    {
      id: 2,
      profile: member2.src,
      MemberName: "Helli Bossi",
      subscriptionType: "Pro",
      joiningDate: "20/09/25",
      location: "Gym Floor",
      status: "Unpaid",
      Action: ".",
    },
    {
      id: 3,
      profile: member3.src,
      MemberName: "Eric Smith",
      subscriptionType: "Basic",
      joiningDate: "20/09/25",
      location: "Dance Studio",
      status: "Paid",
      Action: ".",
    },
    {
      id: 4,
      profile: member4.src,
      MemberName: "Coro Drien",
      subscriptionType: "Premium",
      joiningDate: "20/09/25",
      location: "Studio C",
      status: "Unpaid",
      Action: ".",
    },
    {
      id: 5,
      profile: member5.src,
      MemberName: "John Wrick",
      subscriptionType: "Pro",
      joiningDate: "20/09/25",
      location: "Studio D",
      status: "Paid",
      Action: ".",
    },
    {
      id: 6,
      profile: member6.src,
      MemberName: "Ahmad Aslam",
      subscriptionType: "Basic",
      joiningDate: "20/09/25",
      location: "Studio M",
      status: "Unpaid",
      Action: ".",
    },
    {
      id: 7,
      profile: member7.src,
      MemberName: "Calara Doe",
      subscriptionType: "Premium",
      joiningDate: "20/09/25",
      location: "Studio B",
      status: "Paid",
      Action: ".",
    },
    {
      id: 8,
      profile: member8.src,
      MemberName: "Saqib Shakeel",
      subscriptionType: "Pro",
      joiningDate: "20/09/25",
      location: "Studio B",
      status: "Unpaid",
      Action: ".",
    },
    {
      id: 9,
      profile: member2.src,
      MemberName: "John Doe",
      subscriptionType: "Basic",
      joiningDate: "20/09/25",
      location: "Studio B",
      status: "Paid",
      Action: ".",
    },
    {
      id: 10,
      profile: member4.src,
      MemberName: "John Doe",
      subscriptionType: "Premium",
      joiningDate: "20/09/25",
      location: "Studio B",
      status: "Unpaid",
      Action: ".",
    },
  ];
  return (
    <div>
      <TeamDetailsCard
        heading={heading}
        Details={Subscribers}
        useLink={true}
        route="./subscribers"
      />
    </div>
  );
};

export default SubscriberDetails;
