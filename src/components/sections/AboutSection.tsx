'use client'
import Image from "next/image";
import { ArrowRight, CheckCircle2, Target, TrendingUp } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-24 px-6 md:px-20 relative overflow-hidden bg-white">
       {/* Background accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-orange-50 to-white rounded-full blur-[100px] opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center relative z-10">
        
        {/* Left Side: Image Cluster */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative w-full aspect-square max-w-[500px] mx-auto z-10 rounded-3xl overflow-hidden shadow-2xl animate-fade-in-up">
            <Image
              src="/aboutus.jpg"
              alt="About NGA"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
          </div>

          {/* Floating Experience Card */}
          <div className="absolute -bottom-8 -right-4 md:right-8 z-20 bg-white p-6 rounded-2xl shadow-[0_10px_40px_rgba(255,115,0,0.15)] animate-float glass-card" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-4 border-l-4 border-[#FF7300] pl-4">
               <div>
                  <h3 className="text-4xl font-extrabold text-gray-900">7+</h3>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mt-1">Years Experience</p>
               </div>
            </div>
          </div>
          
          {/* Subtle Background Shape */}
           <div className="absolute -top-10 -left-10 w-full h-full bg-orange-100/50 rounded-3xl z-0 transform rotate-3 animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          
          {/* Section Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 w-fit mb-6">
            <Target className="w-4 h-4 text-[#FF7300]" />
            <span className="text-sm font-bold text-orange-600 tracking-wide uppercase">Who We Are</span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-[1.2] text-gray-900 tracking-tight">
            Shaping Futures at <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7300] to-orange-400">Next Gen Academy</span>
          </h2>

          {/* Main Description */}
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Next Gen Academy (NGA) is a leading skill-development institute in Hisar, Haryana. 
            We bridge the gap between academic learning and industry demands with a practical, agency-based approach. 
          </p>

          {/* List Items */}
          <div className="space-y-4 mb-10">
            <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-orange-50/50 transition-colors border border-transparent hover:border-orange-100">
              <div className="bg-[#FF7300]/10 p-3 rounded-xl">
                 <CheckCircle2 className="w-6 h-6 text-[#FF7300]" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-1">Industry-Curated Curriculum</h4>
                <p className="text-gray-600">Real-time knowledge in Digital Marketing and Web Development tailored for today's market.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-orange-50/50 transition-colors border border-transparent hover:border-orange-100">
              <div className="bg-[#FF7300]/10 p-3 rounded-xl">
                 <TrendingUp className="w-6 h-6 text-[#FF7300]" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-1">Hands-on Agency Projects</h4>
                <p className="text-gray-600">Work directly on live campaigns, ensuring complete transformation from beginner to professional.</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="group relative px-8 py-4 bg-gray-900 text-white font-bold rounded-full overflow-hidden w-fit flex items-center justify-center gap-2 shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_30px_rgba(255,115,0,0.3)] transition-all duration-300 transform hover:-translate-y-1">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#FF7300] to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10">Discover Our Story</span>
             <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </button>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
