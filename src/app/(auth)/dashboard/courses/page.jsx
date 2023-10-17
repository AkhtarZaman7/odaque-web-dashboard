import CoursesList from "../../../../components/Courses/CoursesList";
import DashboardHeader from "../../../../components/Dashboard/DashboardHeader";
import SessionHistory from "../../../../components/SessionsHistory";
import profilePicture from "../../../../../public/assets/images/profilepicture.png";
import subs1 from "../../../../../public/assets/images/subs1.png";
import subs2 from "../../../../../public/assets/images/subs2.png";
import subs3 from "../../../../../public/assets/images/subs3.png";
import AppIcons from "../../../../../public/assets/icons";
import CourseHeader from "../../../../components/CourseHeader";
export const metadata = {
  title: "Courses",
  description: "Courses",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "icon",
      url: "/favicon.ico",
    },
  ],
};

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
  {
    id: 2,
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
  {
    id: 3,
    name: "HIIT Cardio",
    description: "Boost your fitness and torch calories with intense.",
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
  {
    id: 4,
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
  {
    id: 5,
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
  {
    id: 6,
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
  {
    id: 7,
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
const Courses = () => (
  <div className="content">
    <CourseHeader />
    <CoursesList data={data} />
  </div>
);

export default Courses;
