"use client";

import React from "react";

const Button = ({
  text,
  color,
  bg,
  border,
  py,
  px,
  rounded,
  font,
  fontCat,
  textSize,
  height,
  width,
  usingFont,
  size,
}) => {
  return (
    <button
      type="button"
      className={` flex justify-center items-center ${usingFont} ${size} ${rounded} ${border} ${height} ${width} border-blue-600 ${fontCat} ${px} ${py} ${font} ${textSize} hover:opacity-90 ${color} ${bg} ${
        text === "Members" || text === "Dance Courses" ? "shadow-md" : ""
      } `}
    >
      {text}
    </button>
  );
};

export default Button;
