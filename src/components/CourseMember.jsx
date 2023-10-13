import React from "react";
import profilePicture from "../../public/assets/images/profilepicture.png";
import subs1 from "../../public/assets/images/subs1.png";
import subs2 from "../../public/assets/images/subs2.png";
import subs3 from "../../public/assets/images/subs3.png";
import AppIcons from "../../public/assets/icons";
import CourseItem from "./Courses/CourseItem";

const CourseMember = () => {
  const data = [
    {
      id: 1,
      name: "HIIT Cardio",
      description: "Boost your fitness and torch calories with intense",
      image: "/images/hitt-cardio.jpg",
      rating: "4.5",
      startDtae: "2021-01-01",
      endDate: "2021-01-31",
      status: "Active",
      instructor: {
        name: "John Doe",
        image: profilePicture.src,
      },
      subscribers: [
        { id: 1, image: subs1.src },
        { id: 2, image: subs2.src },
        { id: 3, image: subs3.src },
      ],
      location: "Studio A",
    },
  ];

  return (
    <div className="pt-[5px]">
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
  );
};
export default CourseMember;
