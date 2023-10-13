import React from "react";
import AppIcons from "../../../public/assets/icons";
export default function CourseItem(props) {
  return (
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
                {props.name}
              </p>
              <div className="w-[197px] ">
                <p className="text-[14px] font-inter text-descriptiontext leading-6">
                  {props.description}
                </p>
              </div>

              <div className="flex flex-row items-center ">
                {Array.from({ length: 5 }).map((_) => (
                  <div>{AppIcons.star && <AppIcons.star />}</div>
                ))}
                <div>
                  <p className="pl-1 text-[14px] font-medium text-inter text-descriptiontext">
                    ({props.rating})
                  </p>
                </div>
              </div>
              <div className="flex flew-row items-center pt-[6px] py-1 pl-[6px]">
                {props?.subscribers?.map((item, index) => (
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
                    {props.startDtae}
                  </span>
                </div>
                <div className="flex flex-col ">
                  <span className="text-[14px] text-blackSecondary font-medium font-inter">
                    End Date
                  </span>
                  <span className="font-light font-inter text-[14px] pt-[3px] text-descriptiontext">
                    {props.endDate}
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
                      props.status == "Active"
                        ? "text-statusColor"
                        : "text-error"
                    }  font-inter`}
                  >
                    {props.status}
                  </p>
                </div>
                <div className="pl-5  ">
                  {AppIcons.menu && <AppIcons.menu />}
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-row items-center">
                <div>
                  <img
                    height="44px"
                    width="44px"
                    src={props.instructor?.image}
                    alt={props.instructor?.name}
                  />
                </div>
                <div className="flex flex-col justify-between ">
                  <p className="pl-4 font-inter text-blackSecondary  font-medium text-[16px] pb-1 ">
                    {props.instructor?.name}
                  </p>
                  <div className="flex flex-row items-center pl-4 pb-2 ">
                    {AppIcons.pin && <AppIcons.pin />}
                    <div>
                      <p className="pl-1 text-sm text-descriptiontext font-inter">
                        {props.location}
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
  );
}
