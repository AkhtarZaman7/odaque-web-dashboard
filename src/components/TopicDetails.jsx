"use client";

import React, { useState } from "react";
import Link from "next/link";
import AppIcons from "../../public/assets/icons";
import AddTopicDetails from "../components/AddTopicDetails";
import profilePicture from "../../public/assets/images/profilepicture.png";
const TopicDetails = () => {
  const data = {
    id: 1,
    name: "HIIT Cardio",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec quam ",
    image: "/images/hitt-cardio.jpg",
    rating: "4.5",
    startDtae: "2021-01-01",
    endDate: "2021-01-31",
    status: "Active",
    instructor: {
      name: "Jane Cooper",
      image: profilePicture.src,
    },
    location: "Fitness",
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleAddTopicClick = () => {
    setModalVisible(true);
  };
  const closeAddTopic = () => {
    setModalVisible(false);
  };
  const handleNextClick = () => {
    setClicked(true);
    setModalVisible(false);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <div className="w-full bg-white p-4">
      <div className="flex flex-row justify-between border-b pb-4">
        <p className="text-[20px] font-sans font-medium text-blackSecondary ">
          Topic Details
        </p>

        <button
          type="submit"
          className="flex flex-row justify-between font-inter"
          onClick={handleAddTopicClick}
        >
          <div className="flex h-7 flex-row items-center justify-between rounded bg-whitep-2 px-3 border border-blueSelected">
            <AppIcons.plus fill="#0A6EF0" />
            <p className="pl-2 text-xs text-blueSelected">Add New Topic</p>
          </div>
        </button>
        {modalVisible && (
          <>
            <AddTopicDetails
              handleNextClick={handleNextClick}
              setModalVisible={setModalVisible}
              handleAddTopicClick={handleAddTopicClick}
              closeAddTopic={closeAddTopic}
            />
          </>
        )}
      </div>
      {clicked ? (
        <div className=" ">
          <div className="border-b py-5">
            <div className="flex flex-row  justify-between">
              <div className="flex flex-row">
                <div className="relative">
                  <img
                    src="/assets/images/course.png"
                    className="h-[120px] w-[120px]"
                    alt="course"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <AppIcons.play />
                  </div>
                </div>
                <div className="ml-5 flex flex-col">
                  <span className="text-[18px] font-sans font-medium  text-secondary">
                    {data.name}
                  </span>
                  <div className="w-[197px] ">
                    <p className="text-[14px] pt-1 font-inter font-light text-descriptiontext ">
                      {data.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between pt-2 pb-1">
                <div className="flex flex-row justify-between">
                  <div></div>
                  <div className="flex flex-row items-center rounded-lg pr-4">
                    <div className="  ">
                      {AppIcons.union && <AppIcons.union />}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex flex-row items-center">
                    <div className="pr-1">
                      <img
                        className="relative"
                        height="44px"
                        width="44px"
                        src={data.instructor.image}
                        alt={data.instructor.name}
                      />
                    </div>
                    <div className="flex flex-col justify-between ">
                      <p className="pl-4 font-sans text-descriptiontext  font-medium text-[16px]  ">
                        {data.instructor.name}
                      </p>
                      <div className="flex flex-row items-center pl-4 pb-2 ">
                        <AppIcons.barbell width="20px" height="20px" />
                        <div>
                          <p className="pl-1 text-[14px] text-descriptiontext font-inter">
                            {data.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="py-[45px] hey">
          <div className=" flex w-full items-center justify-center flex-col">
            <div className="bg-[url('/assets/icons/details.svg')]  w-[290px] h-[295px] bg-cover bg-no-repeat"></div>
            <p className="text-[14px] font-sans font-medium text-descriptiontext pt-2">
              First add topic to view data
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopicDetails;
