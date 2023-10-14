import React, { useState } from "react";
import AppIcons from "../../public/assets/icons";
import { Radio } from "antd";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
const Permissions = ({ activeButton, itemId, route }) => {
  const [isEditClicked, setIsEditClicked] = useState(false);

  const handleEditClick = () => {
    setIsEditClicked(!isEditClicked);
  };
  const createNotification = (type) => {
    return () => {
      switch (type) {
        case "info":
          NotificationManager.info("Info message");
          break;
        case "success":
          NotificationManager.success(
            "Success message",
            "Email Sent Successfully"
          );
          break;
        case "warning":
          NotificationManager.warning(
            "Warning message",
            "Close after 3000ms",
            3000
          );
          break;
        case "error":
          NotificationManager.error("Error message", "Click me!", 5000, () => {
            alert("callback");
          });
          break;
      }
    };
  };

  return (
    <div>
      {activeButton === itemId && (
        <div
          className={`px-[16px] py-[16px] bg-white ${
            route === "./subscribers" && "w-[150px]"
          } flex flex-col  shadow-md absolute top-0 right-16 z-50 rounded-lg`}
        >
          <button
            onClick={
              route === "./subscribers"
                ? () => createNotification("success")()
                : handleEditClick
            }
            className="px-2 py-1 flex flex-row mb-2 items-center "
          >
            {route === "./subscribers" ? (
              <AppIcons.forwardemail />
            ) : (
              <AppIcons.edit />
            )}

            <p className="text-[14px] font-inter pl-[10px] text-descriptiontext font-medium ">
              {route === "./subscribers" ? "Send Email" : "Edit"}
            </p>
          </button>
          <button className="px-2 py-1 flex flex-row text-white items-center">
            <AppIcons.deleteicon />
            <p className="text-[14px] font-inter text-descriptiontext pl-[10px] font-medium">
              Delete
            </p>
          </button>
        </div>
      )}

      {isEditClicked && (
        <div className="  bg-white shadow-md absolute top-0 right-16 z-50 rounded-lg w-[380px]  ">
          {/* Content for the new div */}
          <div className="w-full items-center py-[14px] flex bg-primaryBg rounded-tl-lg rounded-tr-lg flex-row justify-between px-[31px]">
            <p className="font-inter text-[18px] text-secondary">Edit</p>
            <button onClick={() => setIsEditClicked(false)}>
              <AppIcons.close />
            </button>
          </div>
          <div className="w-full items-center py-[14px] flex flex-row justify-between px-[31px]">
            <div>
              <p className="font-medium text-[18px] font-sans text-secondary">
                Change Status
              </p>
              <p className="pt-[5px] font-inter text-[16px] text-descriptiontext font-regular">
                You can change organization status
              </p>
            </div>
          </div>
          <div className="px-[31px] w-full ">
            <Radio.Group defaultValue="A" className=" grid grid-cols-2 gap-y-3">
              <Radio value="A">
                <p className="font-inter text-descriptiontext text-[16px] font-regular">
                  Active
                </p>
              </Radio>
              <Radio value="B">
                <p className="font-inter text-descriptiontext text-[16px] font-regular">
                  In Progress
                </p>
              </Radio>
              <Radio value="C">
                <p className="font-inter text-descriptiontext text-[16px] font-regular ">
                  Inactive
                </p>
              </Radio>
            </Radio.Group>

            <div className="pt-[30px] pb-[16px]">
              <button className="bg-blueSelected w-full flex items-center justify-center rounded-md py-[10px]">
                <p className="text-[14px] font-inter font-bold text-white">
                  Update
                </p>
              </button>
            </div>
          </div>
        </div>
      )}
      <NotificationContainer />
    </div>
  );
};

export default Permissions;
