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
    status: "Active",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus scelerisque in magna bibendum amet ipsum pellentesque scelerisque dui. Mattis felis venenatis a ut sed diam.",
  };

  return (
    <div className="px-[24px] py-[20px] pb-[26px] bg-white">
      <div className="flex justify-between">
        <p className="text-[20px] font-semibold font-sans text-secondary">
          Member Detail
        </p>
        <div
          className={`px-[24px] ${
            memberDetails?.status === "Active"
              ? "bg-activebg2"
              : "bg-inactivebg"
          } py-[7px] rounded-lg`}
        >
          {memberDetails?.status === "Active" ? (
            <div className="font-sans text-[14px] text-active font-medium">
              Active
            </div>
          ) : (
            <div className="font-sans text-[14px] text-error font-medium">
              Inactive
            </div>
          )}
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
                  <div className="flex flex-row items-center w-full   ">
                    <p className=" font-inter text-[16px] text-blackSecondary ">
                      {memberDetails.rating}
                    </p>
                    <p className="font-inter text-[16px] pl-1 text-blackSecondary">
                      based on{" "}
                    </p>

                    <div className=" pb-[4px]">
                      <a className="font-inter border-b text-[16px] pl-1 text-blueSelected pt-[1px] -pb-[4px]">
                        250 subs
                      </a>
                    </div>
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
