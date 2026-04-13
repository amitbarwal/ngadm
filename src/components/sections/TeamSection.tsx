'use client';

import React from 'react';
import Image from 'next/image';
import { Linkedin, Twitter } from 'lucide-react';

type TeamMember = {
  name: string;
  role: string;
  image: string;
  description: string;
};

const team: TeamMember[] = [
  {
    name: 'Amit',
    role: 'CEO & Mentor',
    image: '/aboutSection.png',
    description:
      'Amit is a Digital Marketer and Youtuber, known for his Digital Marketing & mentoring. He has 1M+ subscribers and mentored 500k+ students.',
  },
  {
    name: 'Vikas Prins',
    role: 'Mentor',
    image: '/vikas1.png',
    description:
      'Vikas Prins is a Software Engineer , known for his coding & mentoring. He has 1M+ subscribers and mentored 500k+ students. MCA From GJU, worked at SISC.',
  },
  {
    name: 'Sapna',
    role: 'Manager & HR',
    image: '/sapna.jpeg',
    description:
      'Sapna is a career counselor and Youtuber, She has 1M+ subscribers and mentored 500k+ students assisting them in finding their true north.',
  },
];

export default function TeamSection() {
  return (
    <section className="bg-white py-24 px-6 md:px-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-50/80 rounded-full blur-3xl mix-blend-multiply pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50/80 rounded-full blur-3xl mix-blend-multiply pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

      <div className="text-center mb-20 animate-fade-in-up relative z-10 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          Meet Our <span className="text-[#FF7300]">Expert Mentors</span>
        </h2>
        <p className="mt-6 text-gray-500 text-lg leading-relaxed">
          Learn directly from industry leaders who have successfully navigated the digital landscape and are now dedicated to your success.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {team.map((member, idx) => (
          <div
            key={idx}
            className="group bg-white rounded-[2rem] p-8 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(255,115,0,0.1)] transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center relative overflow-hidden"
          >
            {/* Background accent line on hover */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FF7300] to-orange-300 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>

            <div className="w-40 h-40 relative mb-8">
              <div className="absolute inset-0 bg-orange-100 rounded-full blur-xl opacity-0 group-hover:opacity-80 transition-opacity duration-500 scale-150"></div>
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover rounded-full shadow-lg border-4 border-white relative z-10 ring-4 ring-gray-50 group-hover:ring-orange-100 transition-all duration-500"
              />
            </div>

            <h3 className="text-2xl font-extrabold text-gray-900 mb-2">{member.name}</h3>
            <p className="text-[#FF7300] font-bold text-sm tracking-wide uppercase mb-6">{member.role}</p>

            <p className="text-gray-500 leading-relaxed mb-8 flex-grow">{member.description}</p>

            <div className="flex gap-4 mt-auto">
              <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-[#FF7300] hover:text-white transition-colors duration-300 shadow-sm hover:shadow-[0_4px_15px_rgba(255,115,0,0.4)]">
                <Linkedin className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-[#FF7300] hover:text-white transition-colors duration-300 shadow-sm hover:shadow-[0_4px_15px_rgba(255,115,0,0.4)]">
                <Twitter className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
