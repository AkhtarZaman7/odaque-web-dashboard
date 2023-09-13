'use client';

import Image from 'next/image';
import React from 'react';

import Analytics from '../../public/assets/images/analytics.png';

const AnalyticsTag = ({ text }) => {
  return (
    <div className="flex items-center gap-2 rounded bg-white p-3 px-4 shadow">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
        <Image width={30} height={30} src={Analytics} alt="AnalyticsTag" />
      </div>
      <div className="flex flex-col">
        <p className="text-xs font-medium text-gray-800 md:text-sm">{text}</p>
        <p className="text-xs font-medium text-gray-800 ">Real time report</p>
      </div>
    </div>
  );
};

export default AnalyticsTag;
