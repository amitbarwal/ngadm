'use client'
import Image from "next/image";
import { useState } from "react";
import LeadPopup from "../ui/LeadPopup";
import { Sparkles, Users, Award, Star, ArrowRight, CheckCircle } from "lucide-react";

const Hero = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#FAFAFA]">
      {/* Decorative Grid Pattern Background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Decorative Blur Background Elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-[500px] h-[500px] bg-orange-300 rounded-full mix-blend-multiply filter blur-[120px] opacity-40 animate-float" />
      <div className="absolute bottom-0 left-10 -mb-20 w-[400px] h-[400px] bg-yellow-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-50 animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 max-w-2xl text-center lg:text-left space-y-8 animate-fade-in-up">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-orange-200 shadow-sm mx-auto lg:mx-0 transform transition hover:scale-105 duration-300">
              <Sparkles className="w-4 h-4 text-[#FF7300]" />
              <span className="text-sm font-semibold text-orange-700 tracking-wide">
                Empowering the Next Generation
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
              Next <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7300] to-orange-400">Gen</span> Makes
              <br className="hidden sm:block" />
              <span className="relative inline-block mt-2">
                <span className="relative z-10"> Learning Easy</span>
                <svg className="absolute w-full h-4 -bottom-1 left-0 text-orange-200 -z-0" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 15 100 5" fill="currentColor" />
                </svg>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-gray-600 text-lg sm:text-xl font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              Transform your career. Become a Certified Digital Marketing or Coding Expert with our practical, agency-based training.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => setOpen(true)}
                className="group relative px-8 py-4 bg-gradient-to-r from-[#FF7300] to-orange-500 text-white font-bold rounded-full overflow-hidden shadow-[0_8px_30px_rgb(255,115,0,0.3)] hover:shadow-[0_8px_30px_rgb(255,115,0,0.5)] transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <span className="relative z-10">Book Free Demo</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 h-full w-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </button>
              
              <button className="px-8 py-4 bg-white text-gray-800 border-[1.5px] border-gray-200 font-bold rounded-full hover:border-[#FF7300] hover:text-[#FF7300] transition-all duration-300 w-full sm:w-auto shadow-sm hover:shadow-md">
                View Courses
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-6 border-t border-gray-200/60 mt-6">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-orange-500" />
                <span className="text-sm font-semibold text-gray-700">10K+ Students</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-orange-500" />
                <span className="text-sm font-semibold text-gray-700">100% Placement</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="text-sm font-semibold text-gray-700">4.9/5 Reviews</span>
              </div>
            </div>

          </div>

          {/* Right Column / Image Area */}
          <div className="flex-1 relative w-full max-w-lg lg:max-w-none animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            
            {/* Main Image Base with Background Bloom */}
            <div className="relative z-10 w-full aspect-square md:aspect-[4/3] lg:aspect-square flex justify-center items-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-200 to-transparent rounded-full transform rotate-12 scale-105 opacity-60 blur-3xl animate-float"></div>
              
              <Image
                src="/hero_image.png"
                alt="Next Gen Academy Learning"
                width={700}
                height={700}
                className="relative z-10 w-full h-auto object-contain drop-shadow-2xl animate-float"
                priority
              />

              {/* Floating Element 1 - Top Right */}
              <div className="absolute -right-4 lg:-right-8 top-10 z-20 glass-card px-4 py-3 rounded-2xl flex items-center gap-3 animate-float shadow-xl" style={{ animationDelay: '1s' }}>
                <div className="bg-green-100 p-2 rounded-full">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Certified</p>
                  <p className="text-sm font-bold text-gray-900">Instructors</p>
                </div>
              </div>

              {/* Floating Element 2 - Bottom Left */}
              <div className="absolute -left-4 lg:-left-8 bottom-16 z-20 glass-card px-4 py-3 rounded-2xl flex items-center gap-3 animate-float shadow-xl" style={{ animationDelay: '1.5s' }}>
                <div className="bg-orange-100 p-2 rounded-full">
                  <Sparkles className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Practical</p>
                  <p className="text-sm font-bold text-gray-900">Agency Training</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
    <LeadPopup isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Hero;
