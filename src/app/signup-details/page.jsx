"use client";
import DetailsHeader from "../../components/SignUpDetailsHeader";

const Details = () => {
  return (
    <div className="h-screen w-full bg-bgSignUp">
      <DetailsHeader />
      <div className="flex justify-center pt-[28px] px-[140px] ">
        <div className="w-full">
          <div className="">
            <p className="text-[28px] font-bold">Studio Details</p>
          </div>
          <div className="bg-white py-[60px]">
            <div className="flex justify-center flex-row items-center">
              <div className="relative h-[40px] w-[40px] rounded-[40px] flex justify-center items-center border border-blueSelected">
                <p className="font-inter text-[18px] font-medium text-blueSelected">
                  1
                </p>
                <div className="absolute w-[145px] font-inter font-medium text-[14px] top-12">
                  <p>Personal Information</p>
                </div>
              </div>
              <div className="w-[170px] h-[3px] bg-blueSelected"></div>
              <div className="h-[40px] w-[40px] rounded-[40px] flex justify-center items-center bg-bgSignUp ">
                <p className="font-inter text-[18px] font-medium text-disabled">
                  2
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
