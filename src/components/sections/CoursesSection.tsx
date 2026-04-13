import React from "react";
import Image from "next/image";

const courses = [
  {
    title: "Digital Marketing",
    type: "Advanced",
    modules: "35+ Module",
    mode: "Practical & Theory Classes",
    image: "/digital_marketing.png",
  },
  {
    title: "Stack Development",
    type: "Full",
    modules: "10 Module",
    mode: "Practical & Theory Classes",
    image: "/fullstack.png",
  },
  {
    title: "Graphic Design",
    type: "Advanced",
    modules: "6 Module",
    mode: "Practical & Theory Classes",
    image: "/graphi_design.png",
  },
  {
    title: "UI/UX Design",
    type: "Advanced",
    modules: "6 Module",
    mode: "Practical & Theory Classes",
    image: "/uiux.png",
  },
];

const CoursesSection = () => {
  return (
    <section className="py-16 px-4 md:px-12 flex flex-col items-center bg-white">
      {/* Title */}
      <div className="text-center mb-10" style={{ width: "334px", height: "44px" }}>
        <h2
          className="text-[35px] font-extrabold capitalize leading-[140%] text-gray-900"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          Courses <span className="text-orange-500 relative after:absolute after:w-[60px] after:h-[4px] after:bg-orange-400 after:-bottom-2 after:left-0">We Offer</span>
        </h2>
        <p
          className="mt-3 mb-10 text-gray-600 text-[18px]"
          style={{ fontFamily: "Roboto, sans-serif", lineHeight: "100%" }}
        >
          Explore a wide range of courses designed to meet today’s industry demands.
        </p>
      </div>

      {/* Cards */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10"
        style={{ width: "1295px", height: "373px" }}
      >
        {courses.map((course, index) => (
          <div
            key={index}
            className="w-[314px] h-[373px] rounded-lg border border-gray-200 p-4 bg-white shadow hover:shadow-md transition-all"
          >
            <div
              className="relative rounded-[10px] overflow-hidden mx-auto mb-4"
              style={{ width: "283px", height: "175px" }}
            >
              <Image
                src={course.image}
                alt={course.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className="text-sm text-gray-400 font-medium mb-1">{course.type}</p>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{course.title}</h3>
            <p className="text-orange-500 text-sm font-medium mb-1">{course.modules}</p>
            <p className="text-sm text-gray-500 mb-4">{course.mode}</p>

            <button
              className="bg-white border border-orange-500 text-orange-500 font-medium w-[152px] h-[40px] rounded-full hover:bg-orange-100 transition"
              style={{ borderRadius: "70.68px" }}
            >
              Join Course
            </button>
          </div>
        ))}
      </div>

      {/* Learn More Button */}
      <button
        className="mt-10 bg-orange-500 hover:bg-orange-600 text-white font-medium text-[16px] px-6 py-2 rounded-md shadow"
        style={{ width: "166px", height: "45px", borderRadius: "8px" }}
      >
        Learn More
      </button>
    </section>
  );
};

export default CoursesSection;
