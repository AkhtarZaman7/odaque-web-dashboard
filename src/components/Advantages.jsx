"use client";

import React from "react";
import { v4 as uuidv4 } from "uuid";
import AppIcons from "../../public/assets/icons";

const Advantages = () => {
  const iconComponents = [
    AppIcons.expert,
    AppIcons.member,
    AppIcons.coursemanage,
    AppIcons.accessibility,
    AppIcons.scheduling,
    AppIcons.performance,
  ];
  const columnData1 = [
    {
      imageSrc: iconComponents[0],
      title: "Expert Instructors",
      description: "Sed rhoncus bibendum sapien,eu congues metus congue vitae.",
    },
    {
      imageSrc: iconComponents[1],
      title: "Member Engagement",
      description: "Sed rhoncus bibendum sapien,eu congues metus congue vitae.",
    },
    {
      imageSrc: iconComponents[2],
      title: "Course Management",
      description: "Sed rhoncus bibendum sapien,eu congues metus congue vitae.",
    },
    {
      imageSrc: iconComponents[3],
      title: "Accessibility",
      description: "Sed rhoncus bibendum sapien,eu congues metus congue vitae.",
    },
    {
      imageSrc: iconComponents[4],
      title: "Session Scheduling",
      description: "Sed rhoncus bibendum sapien,eu congues metus congue vitae.",
    },
    {
      imageSrc: iconComponents[5],
      title: "Performance Analytics",
      description: "Sed rhoncus bibendum sapien,eu congues metus congue vitae.",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-[33.33%_66.66%] px-20 pt-40 font-montserrat">
        <div className="flex flex-col pr-9 font-montserrat text-black">
          <p className="text-4xl font-bold ">Discover The Advantages</p>
          <p className="pt-7 leading-loose ">
            Experience a streamlined gym management system designed to enhance
            efficiency and member satisfaction
          </p>
        </div>

        <div className="mt-0 grid grid-cols-2 gap-4">
          {columnData1.map((item) => (
            <div key={uuidv4()} className="p-4 pt-0">
              <div className="mb-4 ">
                {item.imageSrc && <item.imageSrc />}
                <h2 className=" text-lg mt-7 font-semibold">{item.title}</h2>
                <p className="mt-4 text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advantages;
