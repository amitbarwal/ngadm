import React from "react";
import Image from "next/image";
import TeamSection from "@/components/sections/TeamSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";

const AboutPage = () => {
  return (
    <main className="bg-white">
      {/* Page Header */}
      <section className="relative py-24 bg-gradient-to-b from-orange-50 to-white overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-orange-200 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-float" />
        <div className="max-w-7xl mx-auto px-6 md:px-20 relative z-10 text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
            About <span className="bg-gradient-text">Next Gen Academy</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Leading the way in digital education, empowering students to build successful careers in Tech and Digital Marketing.
          </p>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-20 px-6 md:px-20 relative overflow-hidden">
        <div className="absolute left-0 bottom-0 -ml-20 -mb-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-50 mix-blend-multiply pointer-events-none" />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
          <div className="flex-1 space-y-6">
            <div className="inline-block px-4 py-1 rounded-full bg-orange-100 text-[#FF7300] font-semibold text-sm mb-2 shadow-sm">
              Our Heritage & Growth
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-snug tracking-tight">
              An Elite IT Institute & Business School in Hisar
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed pt-2">
              Based in the heart of <span className="font-semibold text-gray-900">Hisar, Haryana</span>, Next Gen Academy is a premier IT Institute and School of Business. We bridge the gap between theoretical learning and industry reality by offering completely practical, agency-based training.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our vision is to build a skilled workforce fluent in cutting-edge technologies like Full Stack Web Development, Advanced Digital Marketing, and Modern Business Management. Whether you are aiming to be a software developer or a marketing genius, NGA is your launchpad to success.
            </p>
            
            <div className="pt-8 grid grid-cols-2 gap-8 border-t border-gray-100 mt-4">
              <div>
                <h4 className="text-4xl font-extrabold text-[#FF7300]">500k+</h4>
                <p className="text-gray-500 font-medium mt-1">Students Mentored</p>
              </div>
              <div>
                <h4 className="text-4xl font-extrabold text-[#FF7300]">7+</h4>
                <p className="text-gray-500 font-medium mt-1">Years Experience</p>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full relative">
            <div className="absolute inset-0 bg-[#FF7300] rounded-[2.5rem] rotate-3 opacity-20 scale-105 blur-xl animate-float hidden md:block"></div>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl glass-card ring-4 ring-white">
              <Image 
                src="/aboutus.jpg" 
                alt="Next Gen Academy Campus" 
                width={600} 
                height={500} 
                className="w-full h-[450px] object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-gray-50 px-6 md:px-20 border-y border-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-white p-12 rounded-[2.5rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-50 hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
            <div className="w-16 h-16 bg-orange-100 text-[#FF7300] rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-sm">👁️</div>
            <h3 className="text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              To be the most trusted and results-driven educational institute in India, recognized for producing industry-ready professionals who lead technological and business innovations worldwide.
            </p>
          </div>
          <div className="bg-white p-12 rounded-[2.5rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-50 hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-sm">🎯</div>
            <h3 className="text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              To deliver practical, hands-on learning experiences under expert mentorship. We focus entirely on skill development that translates directly into high-paying job opportunities and successful entrepreneurship.
            </p>
          </div>
        </div>
      </section>

      {/* Integrate other homepage components for continuity */}
      <WhyChooseSection />
      <TeamSection />
    </main>
  );
};

export default AboutPage;
