"use client";

import React, { useState } from "react";
import AppIcons from "../../public/assets/icons";
import fitnessPicture from "../../public/assets/images/fitnesspicture.png";
import profilePicture from "../../public/assets/images/profilepicture.png";

const CourseDetails = () => {
  const coursestatus = [
    { id: 1, status: "Reviewed" },
    { id: 2, status: "Live" },
  ];
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [showInstructors, setShowInstructors] = useState(false);
  const instructors = [
    {
      name: "Jane Cooper",
      profile: profilePicture.src,
    },
    {
      name: "Jane Aelia",
      profile: profilePicture.src,
    },
    {
      name: "Jane Honey",
      profile: profilePicture.src,
    },
  ];
  const handleDropdownClick = () => {
    setShowInstructors(!showInstructors);
  };
  const handleInstructorClick = (instructor) => {
    setSelectedInstructor(instructor);
    setShowInstructors(false); // Close the dropdown
  };

  const Details = {
    id: 1,
    name: "Gym Course",
    description:
      " High-Intensity Interval Training (HIIT) Cardio Boost your fitness and calories",
    image: fitnessPicture.src,
    location: "Studio A",
    fitness: "Fitness",
    price: "$10.00",

    instructor: {
      name: "Jane Cooper",
      profile: profilePicture.src,
    },
  };

  return (
    <div className="w-full bg-white p-4">
      <div className="flex flex-row justify-between border-b pb-4">
        <p className="text-[20px] font-sans font-medium text-blackSecondary ">
          Course Details
        </p>
        <div className="flex flex-row items-center rounded-lg ">
          <div className="rounded-lg bg-editBg">
            <p
              className={`px-[16px] py-1 text-sm font-medium text-editText
                 font-inter`}
            >
              Reviewed
            </p>
          </div>
          <div className="pl-5  ">{AppIcons.union && <AppIcons.union />}</div>
        </div>
      </div>

      <div className="pt-6 ">
        <div>
          <div className="p-[14px] rounded-lg border shadow-sm">
            <div className="flex justify-between border-b pb-[14px]">
              <div className="flex flex-col w-[250px] justify-between ">
                <p className="text-[16px] text-black font-medium font-sans -mt-2">
                  {Details.name}
                </p>
                <p className="font-light text-descriptiontext text-[14px] font-inter pb-2 ">
                  {Details.description}
                </p>
              </div>
              <div>
                <img
                  src={Details.image}
                  height="72px"
                  width="72px"
                  alt="instructor"
                />
              </div>
            </div>

            <div className="">
              <div className="flex relative justify-between pt-4">
                <div className="flex items-center flex-row">
                  <AppIcons.currentlocation />
                  <p className="pl-[15px] text-[14px] text-blackSecondary font-inter">
                    {Details.location}
                  </p>
                </div>
                <div className="flex items-center flex-row">
                  <AppIcons.barbell />
                  <p className="pl-[15px] text-[14px] text-blackSecondary font-inter">
                    {Details.fitness}
                  </p>
                </div>
                <div className="flex items-center flex-row">
                  <AppIcons.dollar />
                  <p className="pl-[15px] text-[14px] text-blackSecondary font-inter">
                    {Details.price}
                  </p>
                </div>
                <div className="flex items-center flex-row ">
                  {selectedInstructor ? (
                    <>
                      <img
                        src={selectedInstructor.profile}
                        height="32px"
                        width="32px"
                        alt="instructor"
                      />
                      <p className="pl-[15px] text-[14px] text-blackSecondary font-inter">
                        {selectedInstructor.name}
                      </p>
                    </>
                  ) : (
                    <>
                      <img
                        src={Details.instructor.profile}
                        height="32px"
                        width="32px"
                        alt="instructor"
                      />
                      <p className="pl-[15px] text-[14px] text-blackSecondary font-inter">
                        {Details.instructor.name}
                      </p>
                    </>
                  )}
                  <button className="pl-8" onClick={handleDropdownClick}>
                    <AppIcons.dropdown />
                  </button>
                </div>
                {showInstructors && (
                  <div className="absolute -right-[16px] top-[45px] mt-2 pl-2 bg-white border border-gray-300 rounded w-[200px]">
                    {instructors.map((instructor, index) => (
                      <button
                        key={index}
                        className="flex flex-row items-center border-b w-full "
                        onClick={() => handleInstructorClick(instructor)}
                      >
                        <img
                          src={instructor.profile}
                          className="py-1"
                          height="32px"
                          width="32px"
                          alt="instructor"
                        />
                        <p className="pl-[15px] text-[14px] text-blackSecondary font-inter">
                          {instructor.name}
                        </p>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
