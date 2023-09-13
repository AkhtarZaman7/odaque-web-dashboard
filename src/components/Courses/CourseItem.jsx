import React from "react";

export default function CourseItem(props) {
  return (
    <div className="flex flex-row items-center justify-between p-5">
      <div className="flex flex-row">
        <img src="/assets/images/course.png" alt="course" />
        <div className="ml-5 flex flex-col">
          <span className="text-2xl">{props.name}</span>
          <span>{props.description}</span>
          <span className="mt-2">Rating: {props.rating}</span>
          <div className="mt-2 flex w-52 flex-row items-center justify-between">
            <div className=" flex flex-col">
              <span>Start Date</span>
              <span>{props.startDtae}</span>
            </div>
            <div className="flex flex-col ">
              <span>End Date</span>
              <span>{props.endDate}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
