"use client";
import React, { useState, useEffect } from "react";
import { Input } from "antd";
import AppIcons from "../../../public/assets/icons";
import Link from "next/link";

const VerificationCodeInput = () => {
  const correctCode = "1122";
  const [verificationCode, setVerificationCode] = useState(Array(4).fill(""));
  const [secondsRemaining, setSecondsRemaining] = useState(30);
  const [isCodeCorrect, setIsCodeCorrect] = useState(true);
  const [isVerifyClicked, setIsVerifyClicked] = useState(false);

  const handleVerifyClick = () => {
    const enteredCode = verificationCode.join("");
    setIsCodeCorrect(enteredCode === correctCode);
    setIsVerifyClicked(true);
  };

  const handleInputChange = (index, value) => {
    const updatedCode = [...verificationCode];
    updatedCode[index] = value;
    setVerificationCode(updatedCode);
    if (value.match(/[0-9]/) && index < verificationCode.length - 1) {
      const nextInput = document.getElementById(
        `verificationInput-${index + 1}`
      );
      nextInput && nextInput.focus();
    }
  };

  const handleInputKeyPress = (index, event) => {
    if (event.key === "Backspace" && index > 0 && !verificationCode[index]) {
      // Move focus to the previous input on backspace if the current input is empty
      const prevInput = document.getElementById(
        `verificationInput-${index - 1}`
      );
      prevInput && prevInput.focus();
    }
  };
  useEffect(() => {
    const timer = setInterval(() => {
      if (secondsRemaining > 0) {
        setSecondsRemaining((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [secondsRemaining]);

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 ">
      <div className=" bg-white px-16 rounded-md">
        <div className="bg-white py-[35px] rounded-lg max-w-md w-full ">
          <div className="text-center">
            <div>
              <div className="flex flex-row justify-center items-center w-full">
                <div
                  className={` p-[10px] rounded-[40px] ${
                    isCodeCorrect ? "bg-primaryBg" : "bg-lockbg"
                  }`}
                >
                  <AppIcons.lock fill={isCodeCorrect ? "#0A6EF0" : "#FF453A"} />
                </div>
              </div>
              <p className="text-[32px] font-bold mt-[18px] font-inter">
                Verification
              </p>
            </div>
            <p className="text-[16px] mt-[13px] text-descriptiontext font-inter">
              Enter your 4 digits code that you received on your email.
            </p>
            <div className="mt-[30px]">
              <div className="flex justify-center">
                {verificationCode.map((value, index) => (
                  <Input
                    key={index}
                    id={`verificationInput-${index}`}
                    value={value}
                    className={` w-[84px] h-[76px] mr-[10px] font-[36px] font-sans text-center text-descriptiontext ${
                      isVerifyClicked && !isCodeCorrect ? "border-red-500" : ""
                    }`}
                    maxLength={1}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    onKeyPress={(e) => handleInputKeyPress(index, e)}
                  />
                ))}
              </div>
              <div className="flex flex-row space-x-1 justify-center items-center mt-[28px]">
                <p className="text-[16px] font-inter  text-error ">
                  {secondsRemaining > 0
                    ? `00:${secondsRemaining}`
                    : "Resend code now!"}
                </p>
              </div>
            </div>

            <div className="pt-6">
              {isCodeCorrect ? (
                <Link href="/email-verified">
                  <button
                    type="primary"
                    className="w-[340px] py-[14px] rounded-md bg-blueSelected"
                    onClick={handleVerifyClick}
                  >
                    <p className="text-white text-[18px] font-bold font-inter">
                      Verify
                    </p>
                  </button>
                </Link>
              ) : (
                <button
                  type="primary"
                  className={`w-[340px] py-[14px] rounded-md ${
                    isVerifyClicked ? "bg-red-500" : "bg-blueSelected"
                  }`}
                  onClick={handleVerifyClick}
                  disabled={!isCodeCorrect} // Disable the button when code is incorrect
                >
                  <p className="text-white text-[18px] font-bold font-inter">
                    Verify
                  </p>
                </button>
              )}
            </div>
            <div className="flex flex-row space-x-1 justify-center items-center mt-[32px]">
              <p className=" text-[16px] font-inter  text-descriptiontext ">
                If you didn’t receive a code!
              </p>
              <button className=" ">
                <p className="text-blueSelected font-inter text-[16px] font-medium -my-[5px] ">
                  Resend
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationCodeInput;
