"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    quote:
      "Teachings of the great explorer of truth, the master-builder of human happiness, no one rejects, dislikes, or avoids pleasure itself, pleasure itself.",
    name: "Finlay Kirk",
    role: "Web Developer",
    avatar: "/test.png",
  },
  {
    quote:
      "Complete account of the system and expound the actual Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots.",
    name: "Dannette P. Cervantes",
    role: "Web Design",
    avatar: "/test.png",
  },
  {
    quote:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    name: "Clara R. Altman",
    role: "UI/UX Design",
    avatar: "/test.png",
  },
  {
    quote:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    name: "Clara R. Altman",
    role: "UI/UX Design",
    avatar: "/test.png",
  },
  {
    quote:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    name: "Clara R. Altman",
    role: "UI/UX Design",
    avatar: "/test.png",
  },
  {
    quote:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    name: "Clara R. Altman",
    role: "UI/UX Design",
    avatar: "/test.png",
  },
];

export default function Testimonial() {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-[#FAFAFF] to-white relative overflow-hidden">
      {/* decorative blob */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-float"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="text-center relative z-10 max-w-2xl mx-auto mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 tracking-tight">
          Success Stories & <span className="bg-gradient-text">Testimonials</span>
        </h2>
        <p className="text-lg text-gray-500">
          Be inspired by real success stories and testimonials from our learners who transformed their careers.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
           autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx} className="pb-10 pt-4">
              <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] p-8 text-left min-h-[300px] flex flex-col justify-between relative overflow-hidden border border-gray-100 transition-all duration-300 transform hover:-translate-y-1 mx-2">
                <div className="absolute top-6 right-6 text-gray-100 origin-top-right scale-150 opacity-40">
                   <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                </div>
                <div className="relative z-10 flex-grow">
                  <p className="text-gray-700 text-base leading-relaxed italic mb-6">“{item.quote}”</p>
                </div>
                <div className="flex items-center gap-4 mt-auto relative z-10 border-t border-gray-50 pt-6">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover shadow-sm ring-2 ring-orange-50"
                  />
                  <div>
                    <p className="text-base font-bold text-gray-900">{item.name}</p>
                    <p className="text-sm text-[#FF7300] font-medium">{item.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
