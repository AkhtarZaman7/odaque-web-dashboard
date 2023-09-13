'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import rightArrow from '../../public/assets/images/arrow-right.png';
import odaque_logo from '../../public/assets/images/odaque_white_logo.png';

const Footer = () => {
  const items = [
    { title: 'About Us', href: '/' },
    { title: 'Services', href: '/' },
    { title: 'Contact', href: '/' },
    { title: 'Blog', href: '/' },
  ];
  const Resources = [
    { title: 'Session Management', href: '/' },
    { title: 'Courses Scheduling', href: '/' },
    { title: 'Services Management', href: '/' },
    { title: 'Expert Instructor', href: '/' },
  ];

  return (
    <div className="pt-24 font-montserrat">
      <div className="h-[65vh] bg-blueSelected">
        <div className="flex h-[55vh] w-full flex-row bg-blueSelected px-20 pt-20  ">
          <div className="flex flex-row border-b border-gray-500">
            <div className=" ">
              <div className="flex w-64 flex-col">
                <div className="flex flex-row items-center">
                  <Image src={odaque_logo} alt="logo" />
                  <p className="ml-3 text-xl font-bold text-white">ODAQUE</p>
                </div>
                <p className="pt-4 text-sm font-light text-white">
                  Your all-in-one fitness and dance management solution,
                  simplifying management and connecting you with top-tier
                  instructors for elevated experiences
                </p>
              </div>
            </div>
            <div className="pl-16">
              <div className="flex flex-col">
                <p className="font-semibold text-white">Company</p>
                <div>
                  <ul className="mt-5">
                    {items.map((item) => (
                      <li
                        key={item.title}
                        className="my-2 flex flex-col text-sm font-light text-white"
                      >
                        <Link href={item.href}>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-64 pl-16">
              <div className="flex flex-col">
                <p className="font-semibold text-white">Resources</p>
                <div>
                  <ul className="mt-5">
                    {Resources.map((item) => (
                      <li
                        key={item.title}
                        className="my-2 flex flex-col text-sm font-light text-white "
                      >
                        <Link href={item.href}>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className=" flex w-[500px] flex-col pl-12  ">
              <p className="font-semibold text-white">Join Our Newsletter</p>
              <div>
                <p className="mt-3 text-sm font-light text-white ">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna.
                </p>
              </div>

              <div className="pt-8">
                <div className="flex h-16 w-[450px] items-center justify-between rounded border border-white">
                  <div className="py-1 pl-3">
                    <input
                      type="text"
                      className=" bg-transparent p-2 text-sm text-white outline-none"
                      style={{ color: 'white' }}
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <div className="pr-2 ">
                      <button
                        className="flex h-12 cursor-pointer flex-row items-center justify-center rounded bg-white p-2 px-5 font-semibold text-blueSelected "
                        type="button"
                      >
                        <p>Join Now</p>
                        <Image
                          src={rightArrow}
                          alt="rightArrow"
                          width={22}
                          height={22}
                          className="ml-2"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between pl-20 pr-14 pt-4 text-sm font-light text-white">
          <p>ODAQE is a register gym and dance management platform, Inc.</p>
          <p>©2023 Management Solution, Inc.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
