import React from "react";
import CourseItem from "./CourseItem";
import Link from "next/link";
import AppIcons from "../../../public/assets/icons";
const Icon = AppIcons.plus;

export default function CoursesList(props) {
  const { data } = props;
  return (
    <div className="my-5 flex h-[75vh] grid-cols-1 flex-col divide-y  rounded-md bg-white">
      <div className="flex justify-between w-full flex-row p-5 items-center ">
        <p className="font-semibold text-black">Course Activity Details</p>
        <Link href="/dashboard/courses/add-course">
          <button
            type="submit"
            className="flex flex-row justify-between font-inter"
          >
            <div className="flex h-7 flex-row items-center justify-between rounded bg-blueSelected p-2 px-3 ">
              <Icon />
              <p className="pl-2 text-xs text-white">Add New Course</p>
            </div>
          </button>
        </Link>
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
              subscribers={item.subscribers}
            />
          );
        })}
      </div>
    </div>
  );
}
