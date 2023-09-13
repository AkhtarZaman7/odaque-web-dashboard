'use client';

import Image from 'next/image';
import React from 'react';

import AnalyticsTag from '../components/AnalyticsTag';

import Dashboard from '../../public/assets/images/Dashboard 1 1.png';
import HeroTags from './common/HeroTags';

const DashboardReview = () => {
  return (
    <div>
      <div className="relative flex h-[90vh] w-full items-center justify-center font-montserrat">
        <Image src={Dashboard} alt="Dashboard" width={580} height={300} />

        <div className="absolute left-32 top-60">
          <HeroTags text="Expert Instructor" />
        </div>
        <div className="absolute right-44 top-28">
          <AnalyticsTag text="Analytics" />
        </div>

        <div className="absolute bottom-0 left-40">
          <HeroTags text="Gym Courses" />
        </div>

        <div className="absolute bottom-14 right-44 ">
          <HeroTags text="Dance Sessions" />
        </div>
      </div>
    </div>
  );
};
export default DashboardReview;
