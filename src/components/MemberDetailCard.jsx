import React from "react";
import memberprofile from "../../public/assets/images/memberProfile.png";
import AppIcons from "../../public/assets/icons";

const MemberDetailCard = () => {
  const memberDetails = {
    id: 1,
    name: "Micheal James",
    email: "abc@example.com",
    phone: "(480)-1234-1234",
    address: "21st Avenue, St 42",
    joiningDate: "29 Sep 2023",
    createSessions: 20,
    createSession: 10,
    rating: 4.5,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus scelerisque in magna bibendum amet ipsum pellentesque scelerisque dui. Mattis felis venenatis a ut sed diam.",
  };

  return (
    <div className="px-[24px] py-[20px] pb-[26px] bg-white">
      <div className="flex justify-between">
        <p className="text-[20px] font-semibold font-sans text-secondary">
          Member Detail
        </p>
        <div className="bg-editBg px-[24px] py-[7px] rounded-lg">
          <p className="font-sans text-[14px] text-active font-medium">
            Active
          </p>
        </div>
      </div>

      <div className="pt-[22px] ">
        <div className="flex flex-row w-full">
          <img src={memberprofile.src} />
          <div className="pl-[30px] w-full">
            <div className="grid grid-cols-4  ">
              <div>
                <p className="font-inter font-light text-[16px] text-descriptiontext">
                  Name
                </p>
                <p className="pt-[8px] font-inter text-[16px] text-blackSecondary">
                  {memberDetails?.name}
                </p>
                <div className="pt-[25px]">
                  <p className="font-inter font-light text-[16px] text-descriptiontext">
                    Joining Date
                  </p>
                  <p className="pt-[8px] font-inter text-[16px] text-blackSecondary">
                    {memberDetails?.joiningDate}
                  </p>
                </div>
              </div>
              <div>
                <p className="font-inter font-light text-[16px] text-descriptiontext">
                  Email
                </p>
                <p className="pt-[8px] font-inter text-[16px] text-blackSecondary">
                  {memberDetails?.email}
                </p>

                <div className="pt-[25px]">
                  <p className="font-inter font-light text-[16px] text-descriptiontext">
                    Create Sessions
                  </p>
                  <p className="pt-[8px] font-inter text-[16px] text-blackSecondary">
                    {memberDetails?.createSessions}
                  </p>
                </div>
              </div>

              <div>
                <p className="font-inter font-light text-[16px] text-descriptiontext">
                  Phone
                </p>
                <p className="pt-[8px] font-inter text-[16px] text-blackSecondary">
                  {memberDetails?.phone}
                </p>

                <div className="pt-[25px]">
                  <p className="font-inter font-light text-[16px] text-descriptiontext">
                    Create Session
                  </p>
                  <p className="pt-[8px] font-inter text-[16px] text-blackSecondary">
                    {memberDetails?.createSession}
                  </p>
                </div>
              </div>
              <div>
                <p className="font-inter font-light text-[16px] text-descriptiontext">
                  Address
                </p>
                <p className="pt-[8px] font-inter text-[16px] text-blackSecondary">
                  {memberDetails?.address}
                </p>

                <div className="pt-[25px]">
                  <p className="font-inter font-light text-[16px] text-descriptiontext">
                    Rating
                  </p>
                  <div className="flex flex-row items-center pt-3">
                    {Array.from({ length: 5 }).map((_) => (
                      <div>
                        <AppIcons.star />
                      </div>
                    ))}
                    <div></div>
                  </div>
                  <div className="flex flex-row items-center w-full ">
                    <p className="pt-[4px] font-inter text-[16px] text-blackSecondary felx flex-row">
                      {memberDetails.rating} based on 250 subscriptions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="font-light font-inter text-[16px] text-descriptiontext pt-3 pb-2">
            Bio
          </p>
          <p className=" font-inter text-[16px] text-blackSecondary">
            {memberDetails.bio}
          </p>
        </div>
      </div>
    </div>
  );
};
export default MemberDetailCard;
