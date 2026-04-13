'use client'
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="flex justify-center py-24 px-6 md:px-20 relative overflow-hidden bg-white">
       {/* Background accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-gradient-to-tr from-orange-100 to-white rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="flex flex-col md:flex-row bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] w-full max-w-[1155px] overflow-hidden relative z-10 animate-fade-in-up transition-all hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] duration-500">
        
        {/* Image Section */}
        <div className="relative w-full md:w-[50%] h-[300px] md:h-auto flex-shrink-0 group overflow-hidden">
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500 z-10"></div>
          <Image
            src="/aboutus.jpg"
            alt="About NGA"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center px-8 py-10 md:py-16 md:px-14 w-full md:w-[50%]">
          {/* Title */}
          <h2 className="text-3xl md:text-[40px] font-extrabold mb-6 leading-snug text-gray-900 tracking-tight">
            About <span className="text-[#FF7300]">NGA</span>
          </h2>

          {/* Paragraph */}
          <p className="text-gray-600 mb-8 text-base md:text-lg leading-relaxed">
            Next Gen Academy (NGA) is a leading skill-development institute in Hisar, Haryana, committed to shaping careers in 
            <span className="font-semibold text-gray-800"> Digital Marketing and Web Development</span>. With a practical and agency-based learning model, we focus on delivering real-time knowledge that prepares students for today’s competitive job market.
            <br /><br />
            We don’t just teach—we mentor. Our expert trainers bring 7+ years of industry experience to guide students on the latest trends, tools, and strategies. Every course at NGA is designed to transform beginners into professionals, with a focus on hands-on projects, live campaigns, and performance tracking.
          </p>

          {/* Button */}
          <button className="bg-gradient-to-r from-[#FF7300] to-orange-500 hover:from-orange-600 hover:to-orange-500 text-white font-semibold rounded-full px-8 py-3 w-fit shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-orange-400/50">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
