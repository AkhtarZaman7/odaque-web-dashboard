import React from "react";
import profilePicture from "../../public/assets/images/profilepicture.png";
import member2 from "../../public/assets/images/teammember2.png";
import member3 from "../../public/assets/images/teammember3.png";
import member4 from "../../public/assets/images/teammember4.png";
import member5 from "../../public/assets/images/teammember5.png";
import member6 from "../../public/assets/images/teammember6.png";
import member7 from "../../public/assets/images/teammember7.png";
import member8 from "../../public/assets/images/teammember8.png";
import AppIcons from "../../public/assets/icons";
const TeamMemberDetails = () => {
  const TeamMembers = [
    {
      profile: profilePicture.src,
      MemberName: "Jane Cooper",
      role: "Manager",
      joiningDate: "18/08/23",
      location: "Studio A",
      status: "Active",
      Action: ".",
    },

    {
      profile: member2.src,
      MemberName: "Helli Bossi",
      role: "Manager",
      joiningDate: "20/09/25",
      location: "Gym Floor",
      status: "Inactive",
      Action: ".",
    },
    {
      profile: member3.src,
      MemberName: "Eric Smith",
      role: "Trainer",
      joiningDate: "20/09/25",
      location: "Dance Studio",
      status: "Active",
      Action: ".",
    },
    {
      profile: member4.src,
      MemberName: "Coro Drien",
      role: "Manager",
      joiningDate: "20/09/25",
      location: "Studio C",
      status: "Active",
      Action: ".",
    },
    {
      profile: member5.src,
      MemberName: "John Wrick",
      role: "Trainer",
      joiningDate: "20/09/25",
      location: "Studio D",
      status: "Inactive",
      Action: ".",
    },
    {
      profile: member6.src,
      MemberName: "Ahmad Aslam",
      role: "Manager",
      joiningDate: "20/09/25",
      location: "Studio M",
      status: "Active",
      Action: ".",
    },
    {
      profile: member7.src,
      MemberName: "Calara Doe",
      role: "Trainer",
      joiningDate: "20/09/25",
      location: "Studio B",
      status: "Inactive",
      Action: ".",
    },
    {
      profile: member8.src,
      MemberName: "Saqib Shakeel",
      role: "Trainer",
      joiningDate: "20/09/25",
      location: "Studio B",
      status: "Active",
      Action: ".",
    },
    {
      profile: member2.src,
      MemberName: "John Doe",
      role: "Trainer",
      joiningDate: "20/09/25",
      location: "Studio B",
      status: "Active",
      Action: ".",
    },
    {
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
    <div className="pt-[12px]">
      <div>
        <div className="bg-primarygraybg py-[12px] px-[12px] flex flex-row items-center rounded-tl-lg rounded-tr-lg">
          <div className=" w-[10%] font-medium font-sans text-black text-[14px]">
            Profile
          </div>
          <div className="w-[17%] font-medium text-black text-[14px]">
            Member
          </div>
          <div className="w-[15%] font-medium text-black text-[14px]">Role</div>
          <div className="w-[18%] font-medium text-black text-[14px] pl-[3px]">
            Joining Date
          </div>
          <div className="w-[18%] font-medium text-black text-[14px]">
            Location
          </div>
          <div className="w-[15%] font-medium text-black text-[14px]">
            Status
          </div>
          <div className="w-[6%] font-medium text-black  text-[14px]">
            Action
          </div>
        </div>
        <div
          className="overflow-y-scroll scrollbar-hide "
          style={{
            height: "calc(100vh - 13rem)",
          }}
        >
          {TeamMembers.map((item, index) => (
            <div
              key={index}
              className="py-[12px] px-[12px] flex flex-row items-center border-b"
            >
              <div className=" w-[10%] font-medium font-sans text-black">
                <img height="40px" width="40px" src={item.profile} />
              </div>
              <div className="w-[16%] font-inter font-light text-[14px] text-descriptionText">
                <p>{item.MemberName}</p>
              </div>
              <div className="w-[17%] bg-white ">
                <div className="flex items-center">
                  <div
                    className={`  py-1 px-[16px] font-inter rounded-lg ${
                      item.role == "Manager" ? "bg-primaryBg" : "bg-editBg"
                    }`}
                  >
                    <p
                      className={`text-[14px] ${
                        item.role === "Manager"
                          ? "text-blueSelected"
                          : "text-editText"
                      }`}
                    >
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[18%]  ">
                <p className="font-inter font-light text-[14px] text-descriptionText">
                  {item.joiningDate}
                </p>
              </div>
              <div className="w-[18%]">
                <p className="font-inter font-light text-[14px] text-descriptionText">
                  {item.location}
                </p>
              </div>
              <div className="w-[15%]">
                <div className="flex items-center">
                  <div
                    className={` py-1 ${
                      item.status === "Active"
                        ? "bg-activebgteams"
                        : "bg-inactivebg"
                    } px-[8px] font-inter font-medium rounded-lg`}
                  >
                    <p
                      className={` text-[14px] ${
                        item.status === "Active" ? "text-active" : "text-error"
                      }  `}
                    >
                      {item.status}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[6%] font-medium text-black ">
                <div className="pl-1">
                  <AppIcons.union />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberDetails;
