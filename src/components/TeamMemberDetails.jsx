import React from "react";

const TeamMemberDetails = () => {
  const TeamMembers = [
    {
      profile: "URL_to_profile_image",
      MemberName: "Jane Cooper",
      role: "Manager",
      joiningDate: "18/08/23",
      location: "Studio A",
      status: "Active",
    },
    // Add more team members as needed
    {
      profile: "URL_to_profile_image",
      MemberName: "John Doe",
      role: "Developer",
      joiningDate: "20/09/25",
      location: "Studio B",
      status: "Active",
    },
  ];

  return (
    <div className="pt-[12px]">
      <div>
        <div className="bg-primarygraybg py-[12px] px-[12px] flex flex-row items-center">
          <div className=" w-[10%] bg-green-400  font-sans ">Profile</div>
          <div className="w-[17%] bg-rose-600">Member</div>
          <div className="w-[17%] bg-yellow-500">Role</div>
          <div className="w-[17%] bg-blue-900">Joining Date</div>
          <div className="w-[17%] bg-purple-500">Location</div>
          <div className="w-[15%] bg-purple-500">Status</div>
          <div className="w-[7%] bg-cyan-300 ">Location</div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberDetails;
