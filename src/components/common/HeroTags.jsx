'use client';

import Image from 'next/image';
import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';

import gymIcon from '../../../public/assets/images/gym_icon.png';

const HeroTags = ({ text }) => {
  let iconToRender;

  switch (text) {
    case 'Gym Courses':
      iconToRender = (
        <Image src={gymIcon} alt="Gym Icon" width={20} height={20} />
      );
      break;
    // Add more cases for other text values if needed
    default:
      iconToRender = <AiOutlineCheck />;
      break;
  }

  return (
    <div className="flex items-center gap-2 rounded bg-white p-2 px-4 shadow">
      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blueSelected text-white ">
        {iconToRender}
      </div>
      <p className="text-xs font-medium text-gray-800 md:text-sm">{text}</p>
    </div>
  );
};

export default HeroTags;
