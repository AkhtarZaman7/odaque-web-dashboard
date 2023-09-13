'use client';

import React from 'react';

const Services = () => {
  return (
    <div>
      <div className="pt-20">
        <div className="grid h-[20vh] md:grid-cols-2  ">
          <div className="pr-32 ">
            <p className="text-4xl font-bold leading-tight text-black">
              Let Our 25 Year Of Experience Be Your Guide
            </p>
          </div>
          <div>
            <p className="pl-5 text-sm leading-loose ">
              Introducing ODAQE, your ultimate fitness and dance management
              solution. Explore our versatile platform where we make management
              easy, offer a diverse array of classes, and connect you with
              top-notch instructors. Get ready to elevate your fitness and dance
              experiences
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between pt-20">
        <div className="flex flex-col">
          <p className="text-4xl font-bold text-black">20+</p>
          <p className="pt-2 text-sm">Fitness Sessions</p>
        </div>
        <div className="flex flex-col">
          <p className="text-4xl font-bold text-black">50+</p>
          <p className="pt-2 text-sm">Gym Services</p>
        </div>
        <div className="flex flex-col">
          <p className="text-4xl font-bold text-black">20+</p>
          <p className="pt-2 text-sm">Trusted Instructor</p>
        </div>
        <div className="flex flex-col">
          <p className="text-4xl font-bold text-black">15+</p>
          <p className="pt-2 text-sm">Multiple Courses</p>
        </div>
        <div className="flex flex-col">
          <p className="text-4xl font-bold text-black">35+</p>
          <p className="pt-2 text-sm">Dance Studio</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
