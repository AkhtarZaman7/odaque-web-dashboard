'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import logo from '../../public/assets/images/Vector.png';
import Button from "../components/common/Button"

const Header = () => {
  const pathname = usePathname();
  const [active, setActive] = useState('/');

  const links = [
    { title: 'Home', href: '/' },
    { title: 'How it Works', href: '/about' },
    { title: 'Pricing', href: '/contact' },
    { title: 'Become a Member', href: '/works' },
    { title: 'Connect', href: '/works' },
  ];

  useEffect(() => {
    if (pathname !== active && pathname) {
      setActive(pathname.toString());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <div className="flex items-center justify-between px-20 py-4 font-montserrat shadow">
      <div className="flex items-center">
        <Image src={logo} alt="logo" />
        <div className="ml-2 text-xl font-bold text-blueSelected">ODAQUE</div>
      </div>
      <div className="flex items-center gap-10">
        {links.map((item) => (
          <Link
            href={item.href}
            key={uuidv4()}
            className={`font-medium ${
              active === item.href ? 'text-blueSelected' : 'text-gray-800'
            }`}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <Button
          text="Schedule Demo"
          color="text-gray-100"
          bg="bg-blueSelected"
          py="py-2"
          px="px-3"
          border="border"
          rounded="rounded"
          font="font-semibold"
        />
        <Button
          text="Sign Up for Free"
          color="text-blueSelected"
          bg="bg-gray-100"
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

export default Header;
