
import React from "react";
import Link from "next/link";
import AppIcons from "../../public/assets/icons";
import AddTopic from "../components/AddTopic";
import profilePicture from "../../public/assets/images/profilepicture.png";
const TopicDetailsCard = ({data}) => {
  return (
    <div className=" pb-[200px] ">
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
                      {AppIcons.menu && <AppIcons.menu/>}
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
                        <AppIcons.weight width="20px" height="20px" />
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
  )
}
 export default TopicDetailsCard;
