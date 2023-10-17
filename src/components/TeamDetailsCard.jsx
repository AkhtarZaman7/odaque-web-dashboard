import React, { useState } from "react";
import AppIcons from "../../public/assets/icons";
import Permissions from "./Permissions";
import Link from "next/link";
import { useTheme } from "next-themes";

const TeamDetailsCard = ({ heading, TeamMembers, useLink, route }) => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setActiveButton(activeButton === buttonId ? null : buttonId);
  };
  const { setTheme } = useTheme();
  return (
    <div className="pt-[12px]">
      <div>
        <div className="bg-primarygraybg py-[12px] px-[12px] flex flex-row items-center rounded-tl-lg rounded-tr-lg">
          <div className=" w-[10%] font-medium font-sans text-black text-[14px]">
            {heading?.[0]}
          </div>
          <div className="w-[17%] font-medium text-black text-[14px]">
            {heading?.[1]}
          </div>
          <div className="w-[15%] font-medium text-black text-[14px]">
            {heading?.[2]}
          </div>
          <div className="w-[18%] font-medium text-black text-[14px] pl-[3px]">
            {heading?.[3]}
          </div>
          <div className="w-[18%] font-medium text-black text-[14px]">
            {heading?.[4]}
          </div>
          <div className="w-[15%] font-medium text-black text-[14px]">
            {heading?.[5]}
          </div>
          <div className="w-[6%] font-medium text-black  text-[14px]">
            {heading?.[6]}
          </div>
        </div>
        <div
          className="overflow-y-scroll scrollbar-hide "
          style={{
            height: "calc(100vh - 18rem)",
          }}
        >
          {TeamMembers.map((item, index) => (
            <div
              key={index}
              className="py-[12px] px-[12px] flex flex-row items-center border-b"
              //onClick={() => setActiveButton(null)}
            >
              <Link
                href={route}
                className=" w-[10%] font-medium font-sans text-black"
              >
                <img height="40px" width="40px" src={item.profile} />
              </Link>
              {useLink ? (
                <Link
                  href={route}
                  className="w-[16%] font-inter font-light text-[14px] text-descriptionText hover:text-primarybg "
                >
                  <div className="">
                    <p>{item.MemberName}</p>
                  </div>
                </Link>
              ) : (
                <div className="w-[16%] font-inter font-light text-[14px] text-descriptionText hover:text-primarybg ">
                  <div className="">
                    <p>{item.MemberName}</p>
                  </div>
                </div>
              )}

              <div className="w-[17%] bg-white ">
                <div className="flex items-center">
                  <div
                    className={`  py-1 px-[16px] font-inter rounded-lg ${
                      item.role == "Manager" ? "bg-primaryBg" : "bg-editBg"
                    }`}
                  >
                    <button
                      className={`text-[14px] ${
                        item.role === "Manager"
                          ? "text-blueSelected"
                          : "text-editText"
                      }`}
                      onClick={() => setTheme("dark")}
                    >
                      {item.role}
                    </button>
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

              <div className="w-[6%] font-medium text-black relative ">
                <button
                  className="pl-1"
                  onClick={() => handleButtonClick(item.id)}
                >
                  <AppIcons.menu />
                </button>

                {activeButton && (
                  <Permissions activeButton={activeButton} itemId={item.id} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TeamDetailsCard;
