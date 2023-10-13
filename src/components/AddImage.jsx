"use client";
import { Col, message, Upload } from "antd";
import React from "react";
import AppIcons from "../../public/assets/icons";

const AddImage = () => {
  const props = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };
  const { Dragger } = Upload;
  return (
    <Col>
      <div className="pb-6 pt-4">
        <p className="font-inter text-[24px] font-bold">Add Image</p>
      </div>
      <p className="mb-1 font-inter">
        Upload Image<span className="pl-1 text-xs text-red-500">*</span>
      </p>
      <Dragger
        {...props}
        style={{ backgroundColor: "white", color: "black" }}
        className=" pt-[40px] pb-[40px]"
      >
        <div className="flex items-center justify-center">
          <AppIcons.camera />
        </div>
        <div className="flex flex-row justify-center pt-[16px]">
          <p className=" font-inter font-semibold text-disabled">
            Drop your Image here, or
          </p>
          <p className="font-inter font-semibold text-blueSelected "> browse</p>
        </div>
        <p className="font-inter text-disabled text-[12px] pt-[16px]">
          PNG, JPEG, Max size: 2MB
        </p>
      </Dragger>
    </Col>
  );
};

export default AddImage;
