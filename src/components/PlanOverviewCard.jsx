import React from 'react'

const PlanOverviewCard = ({planData, benefit}) => {
  return (
    <div>
    <p className="mb-6 text-xl font-semibold text-blackSecondary">
      Plan Overview
    </p>
    <div className=" w-[79%]">
      <div className="flex justify-between ">
        <div>
          <p className="font-inter text-[16px] text-descriptiontext font-light">
            Subscription Plan
          </p>
          <p className="font-inter pt-[10px] text-[16px] text-blackSecondary">
            {planData.planTitle}
          </p>
        </div>

        <div>
          <p className="font-inter text-[16px] text-descriptiontext font-light">
            Monthly Pricing
          </p>
          <p className="font-inter pt-[10px] text-[16px] text-blackSecondary">
            {planData.monthlyPricing}
          </p>
        </div>

        <div>
          <p className="font-inter text-[16px] text-descriptiontext font-light">
            Yearly Pricing
          </p>
          <p className="font-inter pt-[10px] text-[16px] text-blackSecondary">
            {planData.yearlyPricing}
          </p>
        </div>

        <div>
          <p className="font-inter text-[16px] text-descriptiontext font-light">
            Type
          </p>
          <p className="font-inter pt-[10px] text-[16px] text-blackSecondary">
            {planData.planType}
          </p>
        </div>
      </div>
    </div>

    <div className="pt-[20px]">
      <div>
        <p className="font-inter text-[16px] text-descriptiontext font-light">
          Benefits
        </p>
        <div className="mt-[16px] space-y-3">
          {benefit.map((item, index) => (
            <div className="p-[14px] border rounded-lg flex flex-row justify-between">
              <p
                key={index}
                className="font-inter text-[14px] text-descriptiontext"
              >
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  )
}
export default PlanOverviewCard;
