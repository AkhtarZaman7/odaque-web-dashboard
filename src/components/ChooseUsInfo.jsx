'use client';

import Image from 'next/image';
import React from 'react';

import Button from './common/Button';



const ChooseUsInfo = ({ data, imageFirst }) => {
  return (
    <div className="mx-5 mt-20 grid h-[90vh] md:mx-20 md:grid-cols-2">
      {imageFirst ? (
        <>
          <div>
            <Image
              src={data.imageSrc}
              alt={data.title}
              height={470}
              width={450}
            />
          </div>
          <div className="flex flex-col space-y-8 pl-3 pt-16">
            <div>
              <p className="font-sans text-4xl font-bold text-black">
                {data.title}
              </p>
            </div>
            <div className="flex flex-row font-montserrat">
              <Button
                text={data.button1}
                color="text-white"
                bg="bg-blueSelected"
                border="border-none"
                py="py-4"
                px="px-7"
                rounded="rounded-none"
                font="font-normal"
              />
              <Button
                text={data.button2}
                color="text-black"
                bg="bg-white"
                border="border-none"
                py="py-4"
                px="px-7"
                rounded="rounded-none"
                font="font-normal"
              />
            </div>
            <div className="pr-5 font-montserrat leading-loose">
              {data.description}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col space-y-8 pl-3 pt-20">
            <div>
              <p className="font-sans text-4xl font-bold text-black">
                {data.title}
              </p>
            </div>
            <div className="flex flex-row font-montserrat ">
              <Button
                text={data.button1}
                color="text-white"
                bg="bg-blueSelected"
                border="border-none"
                py="py-4"
                px="px-7"
                rounded="rounded-none"
                font="font-normal"
              />
              <Button
                text={data.button2}
                color="text-black"
                bg="bg-white"
                border="border-none"
                py="py-4"
                px="px-7"
                rounded="rounded-none"
                font="font-normal"
              />
            </div>
            <div className="pr-5 font-montserrat leading-loose">
              {data.description}
            </div>
          </div>
          <div className="pl-28">
            <Image
              src={data.imageSrc}
              alt={data.title}
              height={470}
              width={450}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ChooseUsInfo;
