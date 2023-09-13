"use client";

import React from "react";
import { v4 as uuidv4 } from "uuid";

import Access from "../../public/assets/images/Accessiblility.png";
import Performance from "../../public/assets/images/Analytics_.png";
import Expert from "../../public/assets/images/ExpertIns.png";
import CourseMng from "../../public/assets/images/Management.png";
import Engage from "../../public/assets/images/Member.png";
import Session from "../../public/assets/images/Scheduling.png";

const Advantages = () => {
  const columnData1 = [
    {
      imageSrc: Expert.src,
      title: "Expert Instructors",
      description: "Sed rhoncus bibendum sapien,eu congues metus congue vitae.",
    },
    {
      imageSrc: Engage.src,
      title: "Member Engagement",
      description: "Sed rhoncus bibendum sapien,eu congues metus congue vitae.",
    },
    {
      imageSrc: CourseMng.src,
      title: "Course Management",
      description: "Sed rhoncus bibendum sapien,eu congues metus congue vitae.",
    },
    {
      imageSrc: Access.src,
      title: "Accessibility",
      description: "Sed rhoncus bibendum sapien,eu congues metus congue vitae.",
    },
    {
      imageSrc: Session.src,
      title: "Session Scheduling",
      description: "Sed rhoncus bibendum sapien,eu congues metus congue vitae.",
    },
    {
      imageSrc: Performance.src,
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
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  width={60}
                  height={60}
                  className="mb-2"
                />
                <h2 className="mt-5 text-lg font-semibold">{item.title}</h2>
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
