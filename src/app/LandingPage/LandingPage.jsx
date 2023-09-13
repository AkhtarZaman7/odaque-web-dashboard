import React from "react";
import Image from "next/image";

import Advantages from "../../components/Advantages";
import AnalyticsTag from "../../components/AnalyticsTag";
import Brands from "../../components/Brands";
import ChooseUsSection from "../../components/ChooseUsSection";
import DashboardReview from "../../components/DashboardReview";
import Footer from "../../components/Footer";
import PlansAndPricing from "../../components/PlansAndPricing";
import ScheduleAndSignup from "../../components/ScheduleAndSignup";
import Services from "../../components/Services";

import myImage from "../../../public/assets/images/pngwing 7.png";
import HeroTags from "../../components/common/HeroTags";
const LandingPage = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <div className="bg-gray-50 font-montserrat">
        <div className="m-5 grid h-[100vh] md:m-10 md:grid-cols-2">
          <div className="ml-10 py-24 ">
            <ScheduleAndSignup />
          </div>
          <div className="relative mt-6 flex items-center justify-center">
            <div className="mt-10 flex h-72 w-72 items-center justify-center rounded-full bg-blue-600">
              <Image src={myImage} alt="my Image" width={300} height={300} />
            </div>
            <div className="absolute left-6 top-20">
              <HeroTags text="Dance Session" />
            </div>
            <div className="absolute right-6 top-24">
              <AnalyticsTag text="Analytics" />
            </div>
            <div className="absolute bottom-60 left-6">
              <HeroTags text="Gym Courses" />
            </div>
            <div className="absolute bottom-40 right-0 ">
              <HeroTags text="Expert Instructor" />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-5 h-[80vh] items-center overflow-y-auto py-6  font-montserrat md:mx-20">
        <div className="">
          <Brands />
        </div>
        <Services />
      </div>
      {/* here we will go for Dashboard  */}
      <DashboardReview />
      {/* This will tell that why choosing us? */}
      <ChooseUsSection />
      {/* Plans and Pricing */}
      <PlansAndPricing />

      {/* Plan Grids are here */}

      <Advantages />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
