import React, { useState } from "react";
import AppIcons from "../../public/assets/icons";
import Link from "next/link";

const SubscriptionPlan = () => {
  const [clickedIndex, setClickedIndex] = useState(1);
  const subscriptionPlans = [
    {
      id: 1,
      title: "Basic",
      prices: "$30",
      planType: "none",
      plans: [
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
      ],
    },
    {
      id: 2,
      title: "Popular",
      prices: "$100",

      plans: [
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
      ],
      planType: "Recommended",
    },
    {
      id: 3,
      title: "Pro",
      prices: "$200",
      plans: [
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
      ],
    },
  ];
  const handleGridClick = (index) => {
    setClickedIndex(index);
  };
  return (
    <div className="pb-28 pt-1">
      <div className="flex flex-row justify-between border-b pb-4">
        <p className="text-[20px]  font-medium text-blackSecondary font-sans ">
          Current Plan
        </p>
        <Link href="./">
          <button
            type="submit"
            className="flex flex-row justify-between font-inter"
          >
            <div className="flex h-7 flex-row items-center justify-between rounded bg-blueSelected py-[8px] p-2 px-3 border border-blueSelected">
              <p className=" text-xs font-inter  text-white">Add New Plan</p>
              <div className="pl-2">
                <AppIcons.plus />
              </div>
            </div>
          </button>
        </Link>
      </div>

      <div className="pt-[23px]">
        <div className=" justify-between space-x-5 grid grid-cols-3 ">
          {subscriptionPlans.map((plan, index) => (
            <div
              className={`bg-blueSelected ${
                plan?.planType === "Recommended" ? " mb-0" : " mb-[6px]"
              } rounded-2xl`}
            >
              <div
                key={plan.id}
                className={`relative h-[76vh] ${
                  plan?.planType === "Recommended"
                    ? "mt-[6px] mb-0"
                    : "mt-0 mb-0"
                }  rounded-lg border border-gray-300 p-6  shadow-md bg-white text-black`}
                onClick={() => handleGridClick(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleGridClick(index);
                  }
                }}
                role="button"
                tabIndex={0}
              >
                <div className="bg-white">
                  <div className="bg-white">
                    {" "}
                    {plan?.planType === "Recommended" ? (
                      plan?.planType === "Recommended" ? (
                        <div className="flex flex-row justify-between items-center pb-3">
                          <div className="px-[16px] py-[7px] bg-playtypebg rounded-lg">
                            <p className="text-[14px] font-inter font-medium text-playtype">
                              {plan?.planType}
                            </p>
                          </div>

                          <div className="flex flex-row items-center">
                            <AppIcons.edit />
                            <p className="text-[14px] font-inter text-descriptiontext pl-2 font-medium">
                              Edit
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div></div>
                      )
                    ) : plan?.planType === "none" ? (
                      <div className="flex flex-row justify-between items-center ">
                        <div>
                          <p className="text-xl font-semibold text-black">
                            {plan.title}
                          </p>
                        </div>

                        <div className="flex flex-row items-center">
                          <AppIcons.edit />
                          <p className="text-[14px] font-inter text-descriptiontext pl-2 font-medium">
                            Edit
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div></div>
                    )}
                    <div className=" flex flex-row justify-between items-center">
                      {plan?.planType === "none" ? (
                        <div></div>
                      ) : (
                        <p className="text-xl font-semibold text-black">
                          {plan.title}
                        </p>
                      )}

                      {plan?.planType ? (
                        <div></div>
                      ) : (
                        <div className="flex flex-row items-center">
                          <AppIcons.edit />
                          <p className="text-[14px] font-inter text-descriptiontext pl-2 font-medium">
                            Edit
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-row">
                      <p className="text-[48px] font-bold font-sans text-blueSelected">
                        {" "}
                        {plan.prices}
                      </p>
                      <p className="ml-3 text-descriptiontext mt-10 font-inter font-medium text-[18px]">
                        /month
                      </p>
                    </div>
                    <div
                      style={{ borderBottom: "1px solid #E5E7EB" }}
                      className="pb-[18px] text-black"
                    ></div>
                    <div className="py-2">
                      <ul className="mt-4">
                        {plan.plans.map((instruction, index) => (
                          <li
                            key={index}
                            className="mb-[14px] flex items-center text-sm"
                          >
                            <div className="flex  items-center justify-center rounded-full bg-primaryBg  mr-3">
                              <div className=" py-[6px] px-[4px]">
                                <AppIcons.subscriptioncheck />
                              </div>
                            </div>
                            <p className=" font-inter text-descriptiontext text-[14px]">
                              {instruction}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button
                      type="button"
                      className={`absolute bottom-8 left-1/2 w-[260px] border border-blueSelected -translate-x-1/2 py-2 font-semibold ${
                        clickedIndex === index
                          ? "bg-blueSelected text-white"
                          : "bg-white text-blueSelected"
                      } rounded-lg text-center`}
                    >
                      <p className="font-medium text-[16px] font-inter">
                        Continue
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SubscriptionPlan;
