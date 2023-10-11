import React from "react";
import fitnessPicture from "../../public/assets/images/fitnesspicture.png";
import profilePicture from "../../public/assets/images/profilepicture.png";
import AppIcons from "../../public/assets/icons";
const iconComponents = [
  AppIcons.completed,
  AppIcons.waiting,
  AppIcons.pending,
  AppIcons.cancelled,
  AppIcons.up,
  AppIcons.down,
  AppIcons.union,
  AppIcons.pin,
  AppIcons.star,
];

const MemberSession = () => {
  const SessionDetails = [
    {
      id: 1,
      picture: fitnessPicture.src,
      title: "Lorem ipsum dolor sit amet,",
      price: "$10.0",
      date: "22 Nov - 30 Nov",
      rating: 15,
      details:
        "High-Intensity Interval Training (HIIT) Cardio, Boost your fitness and torch calories",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ipsum dolor sit amet, consectetur adipiscing elit",
      profilePicture: profilePicture.src,
      Name: "Jane Cooper",
      status: "Active",
      locationIcon: iconComponents[7],
      starIcon: iconComponents[8],
      studio: "Studio A",
      unionIcon: iconComponents[6],
      category: "Fitness Gym",
      edit: "Edit",
      studio: "Studio A",
      startDate: "September 26, 2023",
      endDate: "November 06, 2023",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 pt-6">
      {SessionDetails.map((item) => (
        <div key={item.id} className="flex flex-col rounded-lg border p-6">
          <div className="flex flex-row">
            <img src={item.picture} alt={item.title} />
            <div className="  ml-9 flex w-full flex-col  ">
              <div className="flex flex-row justify-between">
                <div className="w-[163px]">
                  <p className="font-sans font-medium text-[18px] leading-tight text-black -mt-1">
                    {item.title}
                  </p>
                </div>
                <div className="font-sans font-medium text-black text-[16px]">
                  {item.price}
                </div>
              </div>
              <div className="pt-[4px]">
                <p className="text-sm text-descriptiontext font-inter pt-0">
                  {item.date}
                </p>
              </div>
              <div className="flex flex-row items-center pt-1 pb-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div key={index}>{item.starIcon && <item.starIcon />}</div>
                ))}
                <div>
                  <p className="pl-1 text-[14px] font-medium text-inter text-descriptiontext">
                    ({item.rating})
                  </p>
                </div>
              </div>
              {/* <div className="flex flew-row items-center pt-[4px]  pl-[6px]">
          {item.subscribers.map((item, index) => (
            <div className="flex flex-row ml-[-4px]">
              <img src={item.image} alt="subscriber" />
            </div>
          ))}
          <p className="text-[14px] font-medium text-descriptiontext font-inter pl-[4px]">
            +3
          </p>
        </div> */}
            </div>
          </div>

          <div className="w-full pt-5 ">
            <p className="font-inter text-xs text-descriptiontext">
              {item.description}
            </p>
          </div>

          <div className="flex flex-row justify-between pt-5">
            <div className="flex flex-row">
              <div>
                <img src={item.profilePicture} alt={item.title} />
              </div>

              <div className="flex flex-col ">
                <p className="pl-4 font-inter text-sm font-semibold ">
                  {item.Name}
                </p>
                <div className="flex flex-row items-center pl-3 pt-2 ">
                  {item.locationIcon && <item.locationIcon />}
                  <div>
                    <p className="pl-2 text-sm text-descriptiontext font-inter">
                      {item.studio}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row items-center rounded-lg ">
              <div className="rounded-lg bg-statusBg">
                <p className="px-2 py-1 text-sm font-semibold text-statusColor font-inter">
                  {item.status}
                </p>
              </div>
              <div className="pl-5  ">
                {item.unionIcon && <item.unionIcon />}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default MemberSession;