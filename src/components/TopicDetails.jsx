"use client";

import React, { useState } from "react";
import Link from "next/link";
import AppIcons from "../../public/assets/icons";
import AddTopic from "../components/AddTopic";
import profilePicture from "../../public/assets/images/profilepicture.png";
import TopicDetailsCard from "./TopicDetailsCard";
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

  return (
    <div className="w-full bg-white p-4 rounded-lg">
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
            <AddTopic
              handleNextClick={handleNextClick}
              setModalVisible={setModalVisible}
              handleAddTopicClick={handleAddTopicClick}
              closeAddTopic={closeAddTopic}
            />
          </>
        )}
      </div>
      {clicked ? (
        <TopicDetailsCard data={data} />
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
