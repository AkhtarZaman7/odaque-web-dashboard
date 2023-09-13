'use client';

import Image from 'next/image';
import React from 'react';

import list_dot from '../../public/assets/images/List_dot.png';
import Button from './common/Button';

const ScheduleAndSignup = () => {
  return (
    <div className="leading-tight">
      <p className="text-4xl font-bold leading-tight text-blueSelected  ">
        Fitness & Dance
      </p>
      <p className="text-4xl font-bold leading-tight "> Empowerment With Top</p>
      <p className="text-4xl font-bold leading-tight ">Management Solutions</p>
      <div className=" mt-5 text-sm">
        <div className="flex flex-row items-center pb-3">
          <Image src={list_dot} alt="listDot" className="h-4 w-4" />
          <p className="ml-3">
            Display your tracking sessions on smartphones and laptops in your
            area
          </p>
        </div>
        <div className="flex flex-row items-center pb-3 ">
          <Image src={list_dot} alt="listDot" className="h-4 w-4" />
          <p className="ml-3">
            Find the trainig sessions who are ready to join you
          </p>
        </div>
        <div className="flex flex-row items-center ">
          <Image src={list_dot} alt="listDot" className="h-4 w-4" />
          <p className="ml-3">Provide detailed profiles for each instructor</p>
        </div>
      </div>

      {/* Sign Up and Schedule buttons */}

      <div className="mt-8 flex flex-row items-center gap-4 text-base">
        <Button
          text="Sign Up for Free"
          color="text-blue-600"
          bg="bg-gray-100"
          border="border"
          py="py-2"
          px="px-3"
          rounded="rounded"
          font="font-semibold"
        />
        <Button
          text="Schedule Demo"
          color="text-gray-100"
          bg="bg-blueSelected"
          border="border"
          py="py-2"
          px="px-3"
          rounded="rounded"
          font="font-semibold"
        />
      </div>
    </div>
  );
};

export default ScheduleAndSignup;
