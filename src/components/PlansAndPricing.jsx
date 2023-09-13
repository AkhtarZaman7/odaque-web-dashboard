'use client';

import React from 'react';

import Button from './common/Button';
import Subscriptions from './Subscriptions';

const PlansAndPricing = () => {
  return (
    <div className="h-[110vh]">
      <div className="flex flex-col space-y-6 px-20 pt-10">
        <p className="font-sans text-4xl font-bolder text-black">
          Plans and Pricing
        </p>
        <div className=" grid grid-cols-2 items-center ">
          <div className="">
            <p className="font-montserrat leading-loose">
              Revolutionize your gym&apos;s efficiency and member experience
              with our all-in-one management system. From scheduling sessions to
              coordinating expert instructors, we&apos;ve got your gym covered.
            </p>
          </div>

          <div className=" flex flex-row items-center justify-end gap-4 font-montserrat text-base">
            <Button
              text="Monthly"
              color="text-gray-100"
              bg="bg-blueSelected"
              border="border"
              py="py-2"
              px="px-3"
              rounded="rounded"
              font="font-semibold"
            />
            <Button
              text="Yearly"
              color="text-blue-600"
              bg="bg-gray-100"
              border="border"
              py="py-2"
              px="px-5"
              rounded="rounded"
              font="font-semibold"
            />
          </div>
        </div>
      </div>
      <div className="px-20 font-montserrat">
        <Subscriptions />
      </div>
    </div>
  );
};

export default PlansAndPricing;
