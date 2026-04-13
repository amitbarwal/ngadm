'use client'
import Image from "next/image";
import { Briefcase, TrendingUp } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export const PLACED_STUDENTS = [
  {
    name: "Tanu",
    role: "Social Media Manager",
    salary: "6.5 LPA",
    image: "/students/tanu.png",
  },
  {
    name: "Piyush",
    role: "Performance Marketer",
    salary: "8.0 LPA",
    image: "/students/piyush.png",
  },
  {
    name: "Sourab",
    role: "Video Editor & SM Exec",
    salary: "5.5 LPA",
    image: "/students/sourab.png",
  },
  {
    name: "Jatin",
    role: "Social Media Executive",
    salary: "4.8 LPA",
    image: "/students/jatin.png",
  },
  {
    name: "Aarti",
    role: "Digital Marketing Exec",
    salary: "5.0 LPA",
    image: "/students/tanu.png",
  }
];

const PlacedStudents = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-[#FAFAFA] relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-[120px] opacity-40 animate-float" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#FF7300] rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-float" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-orange-200 shadow-sm mb-6">
            <TrendingUp className="w-4 h-4 text-[#FF7300]" />
            <span className="text-sm font-semibold text-orange-700 tracking-wide">
              Wall of Fame
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7300] to-orange-400">Successfully Placed</span> Students
          </h2>
          <p className="text-gray-600 text-lg">
            Join the league of top performers. Our practical training has empowered these individuals to secure exciting roles in the industry.
          </p>
        </div>

        {/* Carousel of students */}
        <div className="w-full relative pb-12">
          <style dangerouslySetInnerHTML={{ __html: `
            .swiper-pagination-bullet-active {
              background-color: #FF7300 !important;
            }
          `}} />
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ 
              clickable: true
            }}
            className="w-full !pb-12"
          >
            {PLACED_STUDENTS.map((student, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(255,115,0,0.15)] transition-all duration-500 transform hover:-translate-y-2 group relative overflow-hidden border border-gray-100">
                  {/* Card Background Glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full -z-10 transition-colors group-hover:bg-orange-100/50"></div>
                  
                  {/* Image */}
                  <div className="relative w-28 h-28 mx-auto mb-6 rounded-full p-1 bg-gradient-to-tr from-[#FF7300] to-orange-200">
                    <div className="w-full h-full relative rounded-full overflow-hidden bg-white">
                      <Image
                        src={student.image}
                        alt={student.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-extrabold text-gray-900 mb-2">{student.name}</h3>
                    
                    <div className="inline-flex items-center justify-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-xl w-full mb-4 group-hover:bg-orange-50/50 transition-colors duration-300">
                      <Briefcase className="w-3.5 h-3.5 text-gray-500 group-hover:text-orange-500 transition-colors duration-300" />
                      <span className="text-sm font-medium text-gray-600 group-hover:text-orange-700 transition-colors duration-300 line-clamp-1">
                        {student.role}
                      </span>
                    </div>

                    <div className="bg-gradient-to-r from-orange-50 to-orange-100/50 px-4 py-3 rounded-2xl border border-orange-100/50">
                      <p className="text-xs text-orange-600/80 font-semibold uppercase tracking-wider mb-1">Salary Package</p>
                      <p className="text-lg font-bold text-orange-600">{student.salary}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default PlacedStudents;
