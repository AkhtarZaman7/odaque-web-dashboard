'use client';

import React from 'react';

import choose1 from '../../public/assets/images/choose1.png';
import choose2 from '../../public/assets/images/choose2.png';
import ChooseUsInfo from './ChooseUsInfo';

const ChooseUsSection = () => {
  const chooseUsData = {
    title: 'Why Choose Us',
    button1: 'Gym',
    button2: 'Members',
    description:
      "We offer a complete solution for gym management, from seamless scheduling and membership tracking to expert instructor coordination. It's designed to optimize your operations, boost member engagement, and ultimately growth.",
    imageSrc: choose1.src,
  };
  const sessionData = {
    title: 'Why Choose Us',
    button1: 'Session',
    button2: 'Dance Courses',
    description:
      'Discover a world of fitness and expression through our gym training and dance studio sessions. From heart-pounding gym training sessions to graceful dance studio sessions, we provide the perfect balance for a well-rounded fitness routine.',
    imageSrc: choose2.src,
  };
  return (
    <div>
      <ChooseUsInfo data={chooseUsData} imageFirst />
      <ChooseUsInfo data={sessionData} imageFirst={false} />
    </div>
  );
};

export default ChooseUsSection;
