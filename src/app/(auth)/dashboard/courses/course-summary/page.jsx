import AppIcons from "../../../../../../public/assets/icons";
import CourseDetails from "../../../../../components/CourseDetails";
import TopicDetails from "../../../../../components/TopicDetails";
export const metadata = {
  title: "Course Summary",
  description: "Course Summary",
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

const CourseSummary = () => (
  <div className="content">
    <div className="pt-0">
      <p className="font-inter font-semibold text-[20px] text-black pb-3">
        Course Activity Details
      </p>
      <CourseDetails />
      <div className="pt-2">
        <TopicDetails />
      </div>
    </div>
  </div>
);

export default CourseSummary;
