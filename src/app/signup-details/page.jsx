"use client";
import React, { useState } from "react";
import SignupDetailsForm from "../../components/SignupDetailsForm";
import AddImage from "../../components/AddImage";
import DetailsHeader from "../../components/SignUpDetailsHeader";
import ProfilePhotoDetails from "../../components/ProfilePhotoDetails";
import SignUpDone from "../../components/SignUpDone";
import { Button, Form } from "antd";
import AppIcons from "../../../public/assets/icons";

const Details = () => {
  const [stages, setStages] = useState([]);

  const handleSaveAndNextClick = () => {
    if (stages.includes(2)) {
      return setStages([...stages, 3]);
    }
    if (stages.includes(1)) {
      return setStages([...stages, 2]);
    }

    setStages([...stages, 1]);
  };
  return (
    <div className="h-full w-full bg-bgSignUp">
      <DetailsHeader />
      <div
        className={`flex justify-center ${
          stages.includes(2) ? "pt-[40px]" : "pt-[16px]"
        } ${stages.includes(2) ? "px-[370px]" : "px-[140px]"}`}
      >
        <div className="w-full">
          <div className="">
            {stages.includes(3) ? (
              ""
            ) : (
              <p className="text-[28px] pb-4 font-bold">Studio Details</p>
            )}
          </div>
          <div className="bg-white py-[45px] px-16 mb-[40px] ">
            <div className="flex justify-center flex-row items-center">
              <div
                className={`relative h-[40px] w-[40px] rounded-[40px] flex justify-center items-center border ${
                  stages.includes(1) ? "" : "border-blueSelected"
                } ${stages.includes(1) ? "bg-blueSelected" : "bg-white"}`}
              >
                {stages.includes(1) ? (
                  <AppIcons.tickicon />
                ) : (
                  <p
                    className={`font-inter text-[18px] font-medium text-blueSelected`}
                  >
                    1
                  </p>
                )}

                <div className="absolute w-[145px] font-inter font-medium text-[14px] top-12">
                  <p
                    className={`text-blueSelected font-inter ${
                      stages.includes(1) ? "font-regular" : "font-semibold"
                    } `}
                  >
                    Personal Information
                  </p>
                </div>
              </div>
              <div className="w-[170px] h-[3px] bg-blueSelected"></div>
              <div
                className={`h-[40px] relative w-[40px] rounded-[40px] flex justify-center items-center ${
                  stages.includes(2)
                    ? "bg-blueSelected"
                    : stages.includes(1)
                    ? "bg-white border-blueSelected border"
                    : "bg-bgSignUp"
                }`}
              >
                {stages.includes(3) ? (
                  <AppIcons.tickicon />
                ) : (
                  <p
                    className={`font-inter text-[18px] font-medium ${
                      stages.includes(2)
                        ? "text-white"
                        : stages.includes(1)
                        ? "text-blueSelected "
                        : "text-disabled"
                    }`}
                  >
                    2
                  </p>
                )}
                <div className="absolute w-[145px] font-inter font-medium text-[14px] top-12 -left-4  ">
                  <p
                    className={`font-semibold ${
                      stages.includes(2)
                        ? "text-blueSelected"
                        : stages.includes(1)
                        ? "text-blueSelected"
                        : "text-disabled"
                    }`}
                  >
                    Add Image
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`pt-7 ${stages.includes(2) ? "mb-0" : "mb-10 "}w-full`}
            >
              <Form name="signup Details Form">
                {stages.includes(3) ? (
                  <SignUpDone />
                ) : stages.includes(2) ? (
                  <ProfilePhotoDetails />
                ) : stages.includes(1) ? (
                  <AddImage />
                ) : (
                  <SignupDetailsForm />
                )}

                {stages.includes(3) ? (
                  " "
                ) : (
                  <div
                    className={`flex items-center ${
                      stages.includes(2) ? "justify-center" : "justify-between"
                    }  `}
                  >
                    <div />
                    <div
                      className={`flex flex-row items-center gap-4 ${
                        stages.includes(2) ? "pt-0" : "pt-12"
                      }`}
                    >
                      <Form.Item>
                        <Button className="flex items-center h-[40px] w-[174px] justify-center text-[16px] border border-blueSelected px-16 py-4 font-inter font-medium text-blueSelected">
                          {stages.includes(2) ? (
                            <p>Re-take Photo</p>
                          ) : stages.includes(1) ? (
                            <p>Back</p>
                          ) : (
                            <p>Skip</p>
                          )}
                        </Button>
                      </Form.Item>
                      <Form.Item>
                        <Button
                          className="flex items-center h-[40px] w-[174px] justify-center text-[16px] bg-blueSelected px-16 py-4 font-inter font-medium text-white"
                          htmlType="submit"
                          onClick={handleSaveAndNextClick}
                        >
                          {stages.includes(2) ? (
                            <p>Continue</p>
                          ) : (
                            <p>Save & Next</p>
                          )}
                        </Button>
                      </Form.Item>
                    </div>
                  </div>
                )}
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
