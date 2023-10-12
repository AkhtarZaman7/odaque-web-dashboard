import React from "react";
import profilePicture from "../../public/assets/images/profilepicture.png";
import subs1 from "../../public/assets/images/instr1.png";
import subs2 from "../../public/assets/images/instr2.png";
import subs3 from "../../public/assets/images/instr3.png";
import AppIcons from "../../public/assets/icons";

const CourseMember = () => {
  const data = [
    {
      id: 1,
      name: "HIIT Cardio",
      description: "Boost your fitness and torch calories with intense",
      image: "/images/hitt-cardio.jpg",
      rating: "4.5",
      startDtae: "2021-01-01",
      endDate: "2021-01-31",
      status: "Active",
      instructor: {
        name: "John Doe",
        image: profilePicture.src,
      },
      subscribers: [
        { id: 1, image: subs1.src },
        { id: 2, image: subs2.src },
        { id: 3, image: subs3.src },
      ],
      location: "Studio A",
    },
  ];

  return (
    <div>
      {data.map((item, index) => (
        <div className=" ">
          <div className="border-b py-5">
            <div className="flex flex-row  justify-between">
              <div className="flex flex-row">
                <img
                  height="175px"
                  width="175px"
                  src="/assets/images/course.png"
                  alt="course"
                />
                <div className="ml-5 flex flex-col">
                  <p className="text-[18px] fot-inter font-medium text-secondary">
                    {item.name}
                  </p>
                  <div className="w-[197px] ">
                    <p className="text-[14px] font-inter text-descriptiontext leading-6">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex flex-row items-center ">
                    {Array.from({ length: 5 }).map((_) => (
                      <div>{AppIcons.star && <AppIcons.star />}</div>
                    ))}
                    <div>
                      <p className="pl-1 text-[14px] font-medium text-inter text-descriptiontext">
                        ({item.rating})
                      </p>
                    </div>
                  </div>
                  <div className="flex flew-row items-center pt-[6px] py-1 pl-[6px]">
                    {item.subscribers.map((item, index) => (
                      <div className="flex flex-row ml-[-4px]">
                        <img src={item.image} alt="subscriber" />
                      </div>
                    ))}
                    <p className="text-[14px] font-medium text-descriptiontext font-inter pl-[4px]">
                      +3
                    </p>
                  </div>
                  <div className="mt-1 flex w-52 flex-row items-center justify-between">
                    <div className=" flex flex-col">
                      <span className="text-[14px] text-blackSecondary font-medium font-inter">
                        Start Date
                      </span>
                      <span className="font-light font-inter text-[14px] pt-[3px] text-descriptiontext">
                        {item.startDtae}
                      </span>
                    </div>
                    <div className="flex flex-col ">
                      <span className="text-[14px] text-blackSecondary font-medium font-inter">
                        End Date
                      </span>
                      <span className="font-light font-inter text-[14px] pt-[3px] text-descriptiontext">
                        {item.endDate}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between pt-4 pb-1">
                <div className="flex flex-row justify-between">
                  <div></div>
                  <div className="flex flex-row items-center rounded-lg pr-4">
                    <div className="rounded-lg bg-statusBg">
                      <p
                        className={`px-2 py-1 text-sm font-semibold ${
                          item.status == "Active"
                            ? "text-statusColor"
                            : "text-error"
                        }  font-inter`}
                      >
                        {item.status}
                      </p>
                    </div>
                    <div className="pl-5  ">
                      {AppIcons.union && <AppIcons.union />}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex flex-row items-center">
                    <div>
                      <img
                        height="44px"
                        width="44px"
                        src={item.instructor.image}
                        alt={item.instructor.name}
                      />
                    </div>
                    <div className="flex flex-col justify-between ">
                      <p className="pl-4 font-inter text-blackSecondary  font-medium text-[16px] pb-1 ">
                        {item.instructor.name}
                      </p>
                      <div className="flex flex-row items-center pl-4 pb-2 ">
                        {AppIcons.pin && <AppIcons.pin />}
                        <div>
                          <p className="pl-1 text-sm text-descriptiontext font-inter">
                            {item.location}
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
      ))}
    </div>
  );
};
export default CourseMember;
