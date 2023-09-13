import Image from 'next/image';
import React from 'react';

import logo1 from '../../public/assets/images/logo1.png';
import logo2 from '../../public/assets/images/logo2.png';
import logo3 from '../../public/assets/images/logo3.png';
import logo4 from '../../public/assets/images/logo4.png';
import logo5 from '../../public/assets/images/logo5.png';

const Brands = () => {
  return (
    <div className="mt-4 flex flex-col items-center justify-center space-y-4 md:flex-row md:justify-between md:space-x-4 md:space-y-0 ">
      <Image src={logo1} alt="logo1" />
      <Image src={logo2} alt="logo2" />
      <Image src={logo3} alt="logo3" />
      <Image src={logo4} alt="logo4" />
      <Image src={logo5} alt="logo5" />
    </div>
  );
};

export default Brands;
