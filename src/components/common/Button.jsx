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
}) => {
  return (
    <button
      type="button"
      className={` flex ${rounded} ${border} border-blue-600 ${fontCat} ${px} ${py} ${font} ${textSize} hover:opacity-90 ${color} ${bg} ${
        text === "Members" || text === "Dance Courses" ? "shadow-md" : ""
      } `}
    >
      {text}
    </button>
  );
};

export default Button;
