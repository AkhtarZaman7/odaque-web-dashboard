"use client";

import React from "react";
import profile from "../../public/assets/images/SignUpProfile.png";
const ProfilePhotoDetails = () => {
  return (
    <div>
      <div className="py-7 pb-5 flex flex-col items-center justify-center w-full">
        <img src={profile.src} alt="profilepicture" height={160} width={160} />
        <div className="w-[194px] pt-5">
          <p className="text-[20px] font-semibold text-black text-center font-inter">
            A photo of you
          </p>
          <p className="text-center pt-2 font-inter text-descriptiontext text-[14px]">
            Please make sure your photo clearly shows your face.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePhotoDetails;
