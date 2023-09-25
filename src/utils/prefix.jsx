import React from "react";
import AppIcons from "../../public/assets/icons";

export const PREFIX = {
  emailprefix: ({ svgFillStyle, isEmailFocused }) => (
    <div className="mr-[4px]">
      <AppIcons.email fill={svgFillStyle(isEmailFocused).fill} />
    </div>
  ),
  userprefix: ({ svgFillStyle, isUserFocused }) => (
    <div className="mr-[4px]">
      <AppIcons.user fill={svgFillStyle(isUserFocused).fill} />
    </div>
  ),
  passwrodprefix: ({ svgFillStyle, isFocused }) => (
    <div className="mr-[4px]">
      <AppIcons.password fill={svgFillStyle(isFocused).fill} />
    </div>
  ),
  confirmpasswordprefix: ({ svgFillStyle, isConfirmFocused }) => (
    <div className="mr-[4px]">
      <AppIcons.password fill={svgFillStyle(isConfirmFocused).fill} />
    </div>
  ),
  fullnameprefix: ({ svgFillStyle, isUserFocused }) => (
    <div className="mr-[4px]">
      <AppIcons.email fill={svgFillStyle(isUserFocused).fill} />
    </div>
  ),
  loginpasswordprefix: ({ svgFillStyle, isFocused }) => (
    <div className="mr-[4px]">
      <AppIcons.password fill={svgFillStyle(isFocused).fill} />
    </div>
  ),
  forgotpassemailprefix: ({ svgFillStyle, isEmailFocused }) => (
    <div className="mr-[7px]">
      <AppIcons.email fill={svgFillStyle(isEmailFocused).fill} />
    </div>
  ),
};
