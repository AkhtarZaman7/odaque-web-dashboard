import React from "react";
import AppIcons from "../../public/assets/icons";
import pic1 from "../../public/assets/images/yogapic1.png";
import pic2 from "../../public/assets/images/yogapic2.png";
import pic3 from "../../public/assets/images/yogapic3.png";
import pic4 from "../../public/assets/images/yogapic4.png";

const UpcomingSessions = () => {
  const data = [
    {
      profilePic: pic1.src,
      time: "4 mins ago",
      expertise: "Yoga For Beginners",
      description: "You have a sale order with respect to....",
    },
    {
      profilePic: pic2.src,
      time: "4 mins ago",
      expertise: "Zumba Dance",
      description: "You have a sale order with respect to....",
    },
    {
      profilePic: pic3.src,
      time: "4 mins ago",
      expertise: "HIIT Cardio",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      profilePic: pic4.src,
      time: "4 mins ago",
      expertise: "Strength Training",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      profilePic: pic1.src,
      time: "4 mins ago",
      expertise: "Graphic Design",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      profilePic: pic3.src,
      time: "4 mins ago",
      expertise: "Graphic Design",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      profilePic: pic4.src,
      time: "4 mins ago",
      expertise: "Graphic Design",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    // ... and so on for 8 objects
  ];

  return (
    <div className=" w-full">
      <div className="flex justify-between items-center">
        <p className=" text-secondary font-sans text-[20px] font-semibold">
          Upcoming Sessions (3,900)
        </p>
        <AppIcons.Notification
          isRedDotVisible="true"
          width="20px"
          height="20px"
          fill="#0A6EF0"
        />
      </div>
      <div className="pt-[10px]">
        <div className="overflow-y-scroll h-[250px]">
          {data.map((item, index) => (
            <div
              key={index}
              className="px-[8px] flex flex-row items-center py-[8px] border-b mb-2   w-full"
            >
              <img src={item.profilePic} alt="profile" />
              <div className="pl-[12px] flex flex-col">
                <div className=" w-full">
                  <div className="font-sans text-blackSecondary text-[13px] font-medium w-[225px] truncate">
                    {item.description}
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-[6px]">
                  <p className="text-inter text-[12px] text-descriptiontext">
                    {item.expertise}
                  </p>
                  <p className="text-inter text-[12px] text-descriptiontext">
                    {item.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default UpcomingSessions;
