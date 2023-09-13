'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import checkBlue from '../../public/assets/images/check_blue.png';
import checkWhite from '../../public/assets/images/check_white.png';

const Subscriptions = () => {
  const [clickedIndex, setClickedIndex] = useState(1);
  const subscriptionPlans = [
    {
      id: 1,
      title: 'Basic',
      prices: '$30',
      forWhat: 'For Small Business',
      instructions: [
        'Limited Customer Support',
        'Member Management Tool',
        'Gym Management Software',
        'Basic Reporting And Analytics',
        'Class Scheduling And Management',
      ],
    },
    {
      id: 2,
      title: 'Popular',
      prices: '$100',
      forWhat: 'For Small Business',
      instructions: [
        'Reminder For Members',
        'Priority Customer Support',
        'Enhanced Class Scheduling',
        'Expert Member Management',
        'Advanced Management Software',
        'Advanced Reporting And Analytics',
      ],
    },
    {
      id: 3,
      title: 'Pro',
      prices: '$200',
      forWhat: 'For Small Business',
      instructions: [
        'Limited Customer Support',
        'Membership Retention Tools',
        'Basic Reporting And Analytics',
        '24/7 Priorit Customer Support',
        'Class Scheduling And Management',
      ],
    },
  ];
  const handleGridClick = (index) => {
    setClickedIndex(index);
  };

  return (
    <div className="flex justify-between space-x-5 pt-12">
      {subscriptionPlans.map((plan, index) => (
        <div
          key={plan.id}
          className={`relative h-[76vh] w-1/3 rounded border border-gray-300 p-6 pt-8 shadow-md ${
            clickedIndex === index
              ? 'bg-blueSelected text-white'
              : 'bg-white text-black'
          }`}
          onClick={() => handleGridClick(index)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleGridClick(index);
            }
          }}
          role="button"
          tabIndex={0}
        >
          <div>
            <p
              className={`text-xl font-semibold text-black ${
                clickedIndex === index ? 'text-white' : 'text-black'
              } `}
            >
              {plan.title}
            </p>
            <div className="flex flex-row">
              <p
                className={`text-4xl font-bold ${
                  clickedIndex === index ? 'text-white' : 'text-blueSelected'
                }`}
              >
                {' '}
                {plan.prices}
              </p>
              <p
                className={`ml-2 mt-6 ${
                  clickedIndex === index ? 'text-white' : 'text-black'
                }`}
              >
                /month
              </p>
            </div>

            <div
              style={{
                borderBottom:
                  clickedIndex === index
                    ? '1px solid white'
                    : '1px solid #E5E7EB',
              }}
              className={`pb-4 ${
                clickedIndex === index ? 'text-white' : 'text-black'
              }`}
            >
              <p
                className={`pt-2 ${
                  clickedIndex === index ? 'text-white' : 'text-black'
                }`}
              >
                {plan.forWhat}
              </p>
            </div>
            <div className="py-2">
              <ul className="mt-4">
                {plan.instructions.map((instruction) => (
                  <li
                    key={uuidv4()}
                    className="mb-2 flex  items-center text-sm "
                  >
                    <div
                      className={`flex h-4 w-4 items-center justify-center rounded-full ${
                        clickedIndex === index
                          ? 'bg-white text-blueSelected'
                          : 'bg-blueSelected text-white'
                      } mr-2`}
                    >
                      {clickedIndex === index ? (
                        <Image src={checkBlue} alt="whiteCheck" />
                      ) : (
                        <Image src={checkWhite} alt="blueCheck" />
                      )}
                    </div>
                    <span>{instruction}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button
              type="button"
              className={`absolute bottom-8 left-1/2 w-80 -translate-x-1/2 py-2 font-semibold ${
                clickedIndex === index
                  ? 'bg-white text-blueSelected'
                  : 'bg-blueSelected text-white'
              } rounded text-center`}
            >
              Get Started
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Subscriptions;
