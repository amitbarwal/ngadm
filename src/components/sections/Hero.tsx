'use client'
import Image from "next/image";
import { useState } from "react";
import LeadPopup from "../ui/LeadPopup";

const Hero = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
    <section className="px-6 md:px-20 py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-orange-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float" style={{ animationDelay: '2s' }} />

      <div className="flex flex-col-reverse md:flex-row items-center gap-12 relative z-10 max-w-7xl mx-auto">
        <div className="flex-1 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-gray-900">
            Next <span className="text-[#FF7300]">Gen <br /></span> Makes Easy <span className="bg-gradient-text">Learning</span>
          </h1>
          <p className="text-gray-600 mt-6 text-lg sm:text-xl md:text-2xl tracking-wide max-w-lg leading-relaxed">
            Become a Certified Digital Marketing with PAP or Coding Expert with Practical, Agency-Based Training.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-white text-[#FF7300] border-2 border-[#FF7300] font-semibold rounded-full hover:bg-orange-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(255,115,0,0.2)]">
              View Courses
            </button>
            <button
                onClick={() => setOpen(true)}
                className="px-8 py-4 bg-[#FF7300] text-white font-semibold rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:-translate-y-1 shadow-[0_4px_20px_rgba(255,115,0,0.4)]"
            >
              Book Free Demo
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-orange-200 to-transparent rounded-3xl transform rotate-3 scale-105 opacity-50 blur-2xl animate-float"></div>
             <Image
               src="/hero_image.png"
               alt="Hero Illustration"
               width={600}
               height={500}
               className="w-full h-auto relative z-10 transform transition-transform hover:scale-[1.02] duration-500 animate-float drop-shadow-2xl"
               priority
             />
          </div>
        </div>
      </div>
    </section>
     <LeadPopup isOpen={open} onClose={() => setOpen(false)} />
     </>
  );
};

export default Hero;
