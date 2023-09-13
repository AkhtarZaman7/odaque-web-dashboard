import React from "react";
import CourseItem from "./CourseItem";

export default function CoursesList(props) {
  const { data } = props;
  return (
    <div className="my-5 flex h-[75vh] grid-cols-1 flex-col divide-y  rounded-md bg-white">
      <div className="flex items-center justify-between p-5">
        <span className="to-white font-bold">Course Activity Details</span>
        <span className="to-white font-bold">Add button here</span>
      </div>
      <div className=" mb-5 overflow-scroll">
        {data.map((item) => {
          return (
            <CourseItem
              key={item.id.toString()}
              id={item.id}
              name={item.name}
              description={item.description}
              image={item.image}
              rating={item.rating}
              startDtae={item.startDtae}
              endDate={item.endDate}
              instructor={item.instructor}
              status={item.status}
              location={item.location}
            />
          );
        })}
      </div>
    </div>
  );
}
