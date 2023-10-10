import React from "react";

const Permissions = ({ activeButton, itemId }) => {
  return (
    <div>
      {" "}
      {activeButton === itemId && (
        <div className="px-[16px] py-[16px] bg-white shadow-md absolute top-0 right-16 z-50 rounded-lg">
          <button className="px-2 py-1  mb-2">
            <p className="text-[14px] font-inter text-descriptiontext font-medium">
              Edit
            </p>
          </button>
          <button className="px-2 py-1  text-white">
            <p className="text-[14px] font-inter text-descriptiontext font-medium">
              Delete
            </p>
          </button>
        </div>
      )}
    </div>
  );
};
export default Permissions;
