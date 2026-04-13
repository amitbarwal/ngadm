"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Code, 
  Briefcase, 
  PenTool, 
  MonitorPlay, 
  Figma, 
  Video, 
  TrendingUp, 
  ChevronDown, 
  ChevronUp, 
  Star, 
  CheckCircle2, 
  Rocket,
  Code2,
  BrainCircuit,
  MessageCircle,
  PhoneCall,
  ArrowRight
} from 'lucide-react';
import WhyChooseSection from '@/components/sections/WhyChooseSection';
import Testimonial from '@/components/sections/Testimonial';

// --- DATA ---

const coursesData = [
  {
    id: 1,
    title: "Digital Marketing With AI",
    shortDesc: "Master SEO, Ads, and Social Media using next-gen AI tools.",
    duration: "4–6 Months",
    level: "Beginner to Advanced",
    icon: TrendingUp,
    audience: "Students, Business Owners, Career Switchers",
    learn: ["SEO & Content Strategy", "Google Ads & Meta Ads", "Social Media Marketing", "Email Automation"],
    tools: ["ChatGPT", "Google Analytics", "Meta Business Suite", "Semrush"],
    mode: "Online & Offline (Hisar)",
  },
  {
    id: 2,
    title: "Full Stack Development With AI",
    shortDesc: "Build modern, scalable applications from front to back.",
    duration: "6–8 Months",
    level: "Beginner to Job-Ready",
    icon: Code2,
    audience: "Students, Tech Aspiring, Freelancers",
    learn: ["React & Next.js", "Node.js & Express", "Database Management (MongoDB/SQL)", "API Integration"],
    tools: ["VS Code", "GitHub", "Vercel", "Cursor/Copilot"],
    mode: "Online & Offline (Hisar)",
  },
  {
    id: 3,
    title: "Startup Pro",
    shortDesc: "Launch your own tech business with modern strategies.",
    duration: "3 Months",
    level: "Intermediate to Advanced",
    icon: Briefcase,
    audience: "Entrepreneurs, Innovators, Visionaries",
    learn: ["Business Planning", "Go-To-Market Strategy", "Financial Modeling", "Pitching & Fundraising"],
    tools: ["Notion", "Canva", "Excel", "Stripe"],
    mode: "Online & Offline (Hisar)",
  },
  {
    id: 4,
    title: "Graphic Designing",
    shortDesc: "Create stunning visuals and brand identities.",
    duration: "3-4 Months",
    level: "Beginner to Advanced",
    icon: PenTool,
    audience: "Creative Students, Freelancers",
    learn: ["Typography & Color Theory", "Logo & Brand Design", "Print & Digital Media", "Social Media Creatives"],
    tools: ["Photoshop", "Illustrator", "Canva Pro", "Midjourney"],
    mode: "Online & Offline (Hisar)",
  },
  {
    id: 5,
    title: "UI & UX Designing",
    shortDesc: "Design intuitive interfaces and user experiences.",
    duration: "4 Months",
    level: "Beginner to Advanced",
    icon: Figma,
    audience: "Designers, Front-end Devs, Creatives",
    learn: ["User Research", "Wireframing & Prototyping", "Design Systems", "Usability Testing"],
    tools: ["Figma", "Adobe XD", "Miro", "Zeplin"],
    mode: "Online & Offline (Hisar)",
  },
  {
    id: 6,
    title: "Video Editing",
    shortDesc: "Edit cinematic videos and high-retention content.",
    duration: "3 Months",
    level: "Beginner to Advanced",
    icon: Video,
    audience: "Content Creators, Freelancers",
    learn: ["Timeline & Cutting", "Color Grading", "Audio Mixing", "Motion Graphics"],
    tools: ["Premiere Pro", "After Effects", "CapCut", "DaVinci Resolve"],
    mode: "Online & Offline (Hisar)",
  },
  {
    id: 7,
    title: "Stock Market & AI",
    shortDesc: "Trade smart with data-driven AI systems.",
    duration: "2-3 Months",
    level: "Beginner",
    icon: BrainCircuit,
    audience: "Investors, Students, Professionals",
    learn: ["Technical Analysis", "Fundamental Analysis", "Option Trading", "AI Trading Bots"],
    tools: ["TradingView", "Sensibull", "Python (Basics)", "Screener"],
    mode: "Online & Offline (Hisar)",
  }
];

const faqs = [
  { q: "What is Digital Marketing?", a: "Digital marketing involves promoting brands to connect with potential customers using the internet and other forms of digital communication. It includes SEO, social media, email, and web-based advertising." },
  { q: "Do you provide placement?", a: "Yes, we provide 100% placement support including resume building, mock interviews, and direct referrals to our partner companies and agencies." },
  { q: "Can beginners join?", a: "Absolutely! All our core programs start from absolute basics and scale up to advanced levels. No prior coding or marketing experience is required." },
  { q: "What is the PAP (Pay After Placement) plan?", a: "With PAP, you can enroll by paying a nominal registration fee or zero upfront tuition. You only pay the full tuition fee once you land a job above a minimum salary threshold." },
];

export default function CoursesPage() {
  const [expandedCourse, setExpandedCourse] = useState<number | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleCourse = (id: number) => {
    setExpandedCourse(expandedCourse === id ? null : id);
  };

  return (
    <main className="bg-white min-h-screen font-sans relative">
      
      {/* Floating WhatsApp CTA */}
      <a 
        href="https://wa.me/911234567890" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-[0_8px_30px_rgba(34,197,94,0.3)] hover:scale-110 transition-transform duration-300 z-50 flex items-center justify-center group"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-16 bg-white text-gray-800 text-sm font-bold px-4 py-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us!
        </span>
      </a>

      {/* SECTION 1: HERO SECTION */}
      <section className="relative py-28 px-6 md:px-20 overflow-hidden bg-gradient-to-b from-orange-50 to-white">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-40 mix-blend-multiply animate-float pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40 mix-blend-multiply animate-float pointer-events-none" style={{ animationDelay: '2s' }} />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-100 text-[#FF7300] font-bold text-sm mb-8 shadow-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF7300]"></span>
            </span>
            Limited Seats for Upcoming Batch
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
            Choose the Right Skill to <br className="hidden md:block" />
            <span className="bg-gradient-text">Build Your Career</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-800 font-semibold mb-3">
            Digital Marketing | Coding | AI | Business Skills
          </h2>
          <p className="text-lg text-gray-500 mb-10">Job, Freelancing, Business — All on One Platform.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-[#FF7300] hover:bg-[#e66a00] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-[0_8px_30px_rgba(255,115,0,0.3)] transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2">
              Book Free Counselling <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto bg-white border-2 border-gray-100 hover:border-gray-200 text-gray-800 px-8 py-4 rounded-xl font-bold text-lg shadow-sm transition-all duration-300 hover:bg-gray-50">
              View Courses
            </button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-gray-600 font-medium">
            <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500"/> Placement Support</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500"/> Practical Training</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500"/> 100+ Students Trained</span>
          </div>
        </div>
      </section>

      {/* SECTION 2 & 3: COURSES OVERVIEW & DETAILS */}
      <section className="py-24 px-6 md:px-20 bg-white" id="courses">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Our Premium <span className="text-[#FF7300]">Programs</span>
            </h2>
            <p className="mt-4 text-xl text-gray-500">Industry-aligned curriculums designed for modern standards.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {coursesData.map((course) => (
              <div key={course.id} className="relative group">
                <div 
                  className={`bg-white border ${expandedCourse === course.id ? 'border-[#FF7300] shadow-[0_8px_40px_rgba(255,115,0,0.1)]' : 'border-gray-100 shadow-sm hover:border-[#FF7300]/50 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]'} rounded-[2rem] p-6 lg:p-8 transition-all duration-300 h-full flex flex-col cursor-pointer overflow-hidden`}
                  onClick={() => toggleCourse(course.id)}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 bg-orange-50 text-[#FF7300] rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <course.icon className="w-7 h-7" />
                    </div>
                    {expandedCourse === course.id ? <ChevronUp className="text-[#FF7300] w-6 h-6" /> : <ChevronDown className="text-gray-400 w-6 h-6 group-hover:text-[#FF7300]" />}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-500 text-sm mb-6 flex-grow">{course.shortDesc}</p>
                  
                  <div className="space-y-3 mb-6 pt-6 border-t border-gray-50">
                    <div className="flex justify-between items-center text-sm font-medium">
                      <span className="text-gray-400">Duration</span>
                      <span className="text-gray-900">{course.duration}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm font-medium">
                      <span className="text-gray-400">Level</span>
                      <span className="text-[#FF7300]">{course.level}</span>
                    </div>
                  </div>

                  <button className="w-full py-3 rounded-xl bg-gray-50 text-gray-800 font-bold text-sm group-hover:bg-[#FF7300] group-hover:text-white transition-colors duration-300">
                    {expandedCourse === course.id ? 'Close Details' : 'View Details'}
                  </button>
                </div>

                {/* EXPANDED DETAILS DROPDOWN */}
                {expandedCourse === course.id && (
                  <div className="absolute top-full left-0 right-0 mt-4 bg-white border border-[#FF7300] rounded-[2rem] p-8 shadow-[0_20px_60px_rgba(255,115,0,0.15)] z-20 animate-fade-in-up md:min-w-[400px]">
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">{course.title} Curriculum</h4>
                    
                    <div className="mb-6">
                      <p className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">Who is this for?</p>
                      <p className="text-gray-800 font-medium">{course.audience}</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6 mb-8">
                      <div>
                        <p className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">What you will learn</p>
                        <ul className="space-y-2">
                          {course.learn.map((l, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                              <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" /> {l}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">Tools Covered</p>
                        <div className="flex flex-wrap gap-2">
                          {course.tools.map((t, i) => (
                            <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-lg">{t}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-gray-100">
                      <div className="flex-1 flex items-center gap-2 text-sm font-bold text-gray-900">
                        <MonitorPlay className="w-5 h-5 text-[#FF7300]" /> {course.mode}
                      </div>
                      <div className="flex-1 flex items-center gap-2 text-sm font-bold text-gray-900">
                        <Briefcase className="w-5 h-5 text-[#FF7300]" /> 100% Placement Supp.
                      </div>
                    </div>

                    <div className="mt-8 flex gap-4">
                       <button className="flex-1 bg-[#FF7300] hover:bg-[#e66a00] text-white py-3 rounded-xl font-bold transition-colors shadow-lg">Apply Now</button>
                       <button className="flex-1 bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-xl font-bold transition-colors">Book Demo</button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: LEARNING ROADMAP */}
      <section className="py-24 px-6 md:px-20 bg-gray-900 text-white overflow-hidden relative">
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#FF7300] rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            The NGA <span className="text-[#FF7300]">Roadmap to Success</span>
          </h2>
          <p className="text-xl text-gray-400 mb-16 font-medium">Learn → Practice → Earn</p>

          <div className="flex flex-col md:flex-row justify-between items-center relative gap-8 md:gap-0">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-800 -z-10 translate-y-[-50%]"></div>
            
            {[
               { no: 1, title: 'Basics & Foundation', icon: '📚' },
               { no: 2, title: 'Tools & Practical', icon: '🛠️' },
               { no: 3, title: 'Live Projects', icon: '💻' },
               { no: 4, title: 'Internship', icon: '🚀' },
               { no: 5, title: 'Placement', icon: '🏆' },
            ].map((step) => (
              <div key={step.no} className="relative bg-gray-800 border-2 border-gray-700 w-48 p-6 rounded-2xl flex flex-col items-center text-center shadow-xl hover:border-[#FF7300] transition-colors duration-300">
                 <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-2xl font-bold text-[#FF7300] absolute -top-6 border-4 border-gray-900">
                    {step.no}
                 </div>
                 <div className="text-4xl mb-4 mt-2">{step.icon}</div>
                 <h4 className="font-bold text-lg">{step.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: REUSE WHY CHOOSE US */}
      <WhyChooseSection />

      {/* SECTION 6: STUDENT OUTCOMES */}
      <section className="py-24 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Life After <span className="text-[#FF7300]">NGA</span>
            </h2>
            <p className="mt-4 text-xl text-gray-500">Real outcomes for dedicated students.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-orange-50 rounded-[2rem] p-10 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-4xl mb-6 shadow-md shadow-orange-100/50">🏢</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Corporate Jobs</h3>
              <p className="text-gray-600 mb-4">Digital Marketer, Web Developer, Designer</p>
              <div className="bg-white px-6 py-2 rounded-full text-[#FF7300] font-extrabold shadow-sm">₹3 Lakh - ₹8 Lakh / Year</div>
            </div>
            
            <div className="bg-blue-50 rounded-[2rem] p-10 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-4xl mb-6 shadow-md shadow-blue-100/50">💻</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Freelancing</h3>
              <p className="text-gray-600 mb-4">Remote Gigs, Upwork, Agency Partner</p>
              <div className="bg-white px-6 py-2 rounded-full text-blue-600 font-extrabold shadow-sm">₹30k - ₹1 Lakh / Month</div>
            </div>

            <div className="bg-green-50 rounded-[2rem] p-10 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-4xl mb-6 shadow-md shadow-green-100/50">🚀</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Business Growth</h3>
              <p className="text-gray-600 mb-4">Scale your own startup or family business</p>
              <div className="bg-white px-6 py-2 rounded-full text-green-600 font-extrabold shadow-sm">Limitless Potential</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: REUSE TESTIMONIALS */}
      <Testimonial />

      {/* SECTION 8: FEES & PAP PLAN */}
      <section className="py-24 px-6 md:px-20 bg-gradient-to-tr from-gray-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Invest in your Skills with <br/> <span className="text-[#FF7300]">Affordable Fees</span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              We believe quality education shouldn't cause financial stress. That’s why we offer transparent pricing, flexible EMIs, and a revolutionary Pay After Placement model.
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-center gap-3 font-semibold text-lg"><CheckCircle2 className="text-[#FF7300]"/> No Hidden Charges</li>
              <li className="flex items-center gap-3 font-semibold text-lg"><CheckCircle2 className="text-[#FF7300]"/> Zero Cost EMI Available</li>
              <li className="flex items-center gap-3 font-semibold text-lg"><CheckCircle2 className="text-[#FF7300]"/> Money-back Guarantee*</li>
            </ul>
          </div>

          <div className="flex-1 w-full bg-white text-gray-900 rounded-[2.5rem] p-10 shadow-2xl">
            <div className="inline-block bg-green-100 text-green-600 font-bold px-4 py-1 rounded-full text-sm mb-6">Introducing</div>
            <h3 className="text-4xl font-extrabold mb-4">Pay After Placement (PAP)</h3>
            <p className="text-gray-600 mb-8 font-medium">Learn now, pay your tuition fee only after you secure a job.</p>
            
            <div className="space-y-4 mb-8">
               <div className="bg-gray-50 p-4 rounded-xl flex items-center gap-4 text-gray-800 font-bold border border-gray-100">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#FF7300] shadow-sm">1</div> Enroll with a small registration fee
               </div>
               <div className="bg-gray-50 p-4 rounded-xl flex items-center gap-4 text-gray-800 font-bold border border-gray-100">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#FF7300] shadow-sm">2</div> Complete practical training
               </div>
               <div className="bg-gray-50 p-4 rounded-xl flex items-center gap-4 text-gray-800 font-bold border border-gray-100">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#FF7300] shadow-sm">3</div> Get Placed & Pay tuition
               </div>
            </div>
            
            <button className="w-full bg-[#FF7300] hover:bg-[#e66a00] text-white py-4 rounded-xl font-bold text-lg transition-colors">Enquire About PAP Plan</button>
            <p className="text-xs text-gray-400 text-center mt-4">*Terms & Conditions apply based on eligibility test.</p>
          </div>
        </div>
      </section>

      {/* SECTION 10: FAQ */}
      <section className="py-24 px-6 md:px-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
              Frequently Asked <span className="text-[#FF7300]">Questions</span>
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm cursor-pointer hover:border-[#FF7300]/50 transition-colors duration-300"
                onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
              >
                <div className="p-6 flex justify-between items-center text-left">
                  <h4 className="text-lg font-bold text-gray-900">{faq.q}</h4>
                  {expandedFaq === idx ? <ChevronUp className="text-[#FF7300] flex-shrink-0" /> : <ChevronDown className="text-gray-400 flex-shrink-0" />}
                </div>
                {expandedFaq === idx && (
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed font-medium animate-fade-in-up">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: FINAL CTA */}
      <section className="py-24 px-6 md:px-20 bg-white text-center">
        <div className="max-w-5xl mx-auto bg-orange-50 rounded-[3rem] p-12 md:p-20 relative overflow-hidden border border-orange-100">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl opacity-60 mix-blend-overlay"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
              Start Your Career with <br/> Next Gen Academy
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">Join Hisar&apos;s premier IT institute. Stop waiting for opportunities, start creating them today.</p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-[#FF7300] hover:bg-[#e66a00] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-[0_8px_30px_rgba(255,115,0,0.3)] transition-transform duration-300 hover:-translate-y-1">
                Apply Now
              </button>
              <button className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-8 py-4 rounded-xl font-bold text-lg shadow-sm transition-transform duration-300 hover:-translate-y-1">
                Visit Academy
              </button>
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-sm transition-transform duration-300 hover:-translate-y-1 flex items-center justify-center gap-2">
                <PhoneCall className="w-5 h-5"/> Call Now
              </button>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}