"use client";
import React, { useState } from 'react';
import {
  PhoneCall,
  MessageCircle,
  MapPin,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Send,
  MessageSquare
} from 'lucide-react';

const faqs = [
  { q: "How soon will I get a call?", a: "Our highly dedicated career counsellors will connect with you within 24 hours of form submission to resolve all your queries." },
  { q: "Is counselling free?", a: "100% Free! We believe in providing absolutely free, no-pressure clarity about your career before you enroll in anything." },
  { q: "Can I visit directly?", a: "Yes, you can visit us directly. Although we recommend booking an appointment so a mentor is guaranteed to be available just for you." },
  { q: "Do you offer demo classes?", a: "Yes, we do. Contact us, and we will schedule an exclusive demo class for your preferred course completely free of cost." },
];

export default function ContactPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for applying! Our team will contact you within 24 hours.");
  };

  return (
    <main className="bg-white min-h-screen font-sans relative pb-24 md:pb-0">

      {/* 🟢 FLOATING / STICKY WHATSAPP (Desktop / Main) */}
      <a
        href="https://wa.me/917027500702"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 md:bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-[0_8px_30px_rgba(34,197,94,0.3)] hover:scale-110 transition-transform duration-300 z-50 flex items-center justify-center group"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-16 bg-white text-gray-800 text-sm font-bold px-4 py-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat on WhatsApp
        </span>
      </a>

      {/* 🔴 STICKY BOTTOM BAR (Mobile Only) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 z-50 flex gap-4 shadow-[0_-10px_30px_rgba(0,0,0,0.1)]">
        <a href="tel:7027500702" className="flex-1 bg-gray-900 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2">
          <PhoneCall className="w-5 h-5" /> Call
        </a>
        <a href="https://wa.me/917027500702" className="flex-1 bg-[#25D366] text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2">
          <MessageCircle className="w-5 h-5" /> WhatsApp
        </a>
      </div>

      {/* SECTION 1: HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 md:px-20 overflow-hidden bg-gradient-to-b from-orange-50 to-white">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-200 rounded-full blur-[100px] opacity-40 pointer-events-none -translate-x-1/2 -translate-y-1/2" />

        <div className="max-w-7xl mx-auto relative z-10 text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-100 text-[#FF7300] font-bold text-sm mb-8 shadow-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF7300]"></span>
            </span>
            Limited Seats | 100+ Students Guided
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
            Start Your Career with <br className="hidden md:block" />
            <span className="bg-gradient-text">Next Gen Academy</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-800 font-bold mb-3">
            Get Free Career Guidance from Experts
          </h2>
          <p className="text-lg text-gray-500 mb-10">Confused about your career? Let our expert mentors guide you.</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-[#FF7300] hover:bg-[#e66a00] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-[0_8px_30px_rgba(255,115,0,0.3)] transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
              onClick={() => document.getElementById("lead-form")?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Free Counselling
            </button>
            <a href="https://wa.me/917027500702" className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white border-2 border-transparent px-8 py-4 rounded-xl font-bold text-lg shadow-[0_8px_30px_rgba(34,197,94,0.3)] transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2">
              <MessageSquare className="w-5 h-5" /> Chat on WhatsApp
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-gray-600 font-medium">
            <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#FF7300]" /> Practical Training</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#FF7300]" /> Placement Support</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#FF7300]" /> Expert Mentors</span>
          </div>
        </div>
      </section>

      {/* SECTION 2: QUICK CONTACT OPTIONS */}
      <section className="py-12 px-6 md:px-20 bg-white relative z-20 -mt-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <a href="tel:7027500702" className="bg-white border border-gray-100 rounded-[2rem] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
              <PhoneCall className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-500 font-medium mb-6">7027500702</p>
            <span className="text-blue-600 font-bold bg-blue-50 px-6 py-2 rounded-full w-full">Call Now</span>
          </a>

          <a href="https://wa.me/917027500702" className="bg-white border border-gray-100 rounded-[2rem] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp Us</h3>
            <p className="text-gray-500 font-medium mb-6">Ask Queries Instantly</p>
            <span className="text-green-600 font-bold bg-green-50 px-6 py-2 rounded-full w-full">Chat Now</span>
          </a>

          <a href="#map" className="bg-white border border-gray-100 rounded-[2rem] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-orange-50 text-[#FF7300] rounded-full flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Academy</h3>
            <p className="text-gray-500 font-medium mb-6">Next Gen Academy, Hisar</p>
            <span className="text-[#FF7300] font-bold bg-orange-50 px-6 py-2 rounded-full w-full">Get Directions</span>
          </a>
        </div>
      </section>

      {/* SECTION 3 & 4: LEAD FORM AND WHY NGA */}
      <section className="py-24 px-6 md:px-20 bg-gray-50 border-y border-gray-100 relative" id="lead-form">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-16">

          {/* Why Contact NGA */}
          <div className="flex-1 space-y-8 lg:pt-10">
            <div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4 tracking-tight">
                Why Connect With <br /><span className="text-[#FF7300]">Next Gen Academy?</span>
              </h2>
              <p className="text-lg text-gray-500">Stop debating, start doing. We offer highly personalized counselling to map out your digital career.</p>
            </div>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0 text-[#FF7300]"><CheckCircle2 /></div>
                <div><h4 className="text-xl font-bold text-gray-900">Get career clarity</h4><p className="text-gray-500">Our mentors will clear all your doubts and chart a clear path.</p></div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0 text-[#FF7300]"><CheckCircle2 /></div>
                <div><h4 className="text-xl font-bold text-gray-900">Personalized guidance</h4><p className="text-gray-500">1-on-1 career mapping according to your strengths and background.</p></div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0 text-[#FF7300]"><CheckCircle2 /></div>
                <div><h4 className="text-xl font-bold text-gray-900">Demo class access</h4><p className="text-gray-500">Experience our teaching methodology fully free before committing.</p></div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0 text-[#FF7300]"><CheckCircle2 /></div>
                <div><h4 className="text-xl font-bold text-gray-900">No pressure counselling</h4><p className="text-gray-500">We advise. You decide. Zero sales pressure whatsoever.</p></div>
              </li>
            </ul>

            {/* SECTION 6: WORKING HOURS (Integrated beautifully) */}
            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm mt-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2"><MapPin className="text-[#FF7300]" /> Working Hours</h4>
              <div className="space-y-2 font-medium text-gray-600">
                <p className="flex justify-between"><span>Monday to Saturday:</span> <span className="text-gray-900 font-bold">9:00 AM – 6:00 PM</span></p>
                <p className="flex justify-between"><span>Sunday:</span> <span className="text-[#FF7300] font-bold">Closed</span></p>
              </div>
            </div>
          </div>

          {/* Lead Form */}
          <div className="flex-1 w-full relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF7300] to-orange-300 rounded-[3rem] rotate-3 opacity-20 blur-xl"></div>
            <div className="relative bg-white p-8 md:p-12 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-50 z-10">
              <h3 className="text-3xl font-extrabold text-gray-900 mb-2">Book Free Career Counselling</h3>
              <p className="text-sm font-bold text-[#FF7300] mb-8 bg-orange-50 inline-block px-3 py-1 rounded-full">Limited Seats Available</p>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
                  <input type="text" required className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#FF7300] focus:bg-white transition-all font-medium" placeholder="Enter your full name" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number *</label>
                  <input type="tel" required className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#FF7300] focus:bg-white transition-all font-medium" placeholder="+91" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Course Interest *</label>
                  <select required defaultValue="" className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#FF7300] focus:bg-white transition-all font-medium appearance-none">
                    <option value="" disabled>Select a course</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="full-stack">Full Stack Development</option>
                    <option value="ai-tools">AI Tools</option>
                    <option value="business">Business Program</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Career Goal *</label>
                  <select required defaultValue="" className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#FF7300] focus:bg-white transition-all font-medium appearance-none">
                    <option value="" disabled>What are you aiming for?</option>
                    <option value="job">Corporate Job</option>
                    <option value="business">My Own Business</option>
                    <option value="freelancing">Freelancing</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Message (Optional)</label>
                  <textarea rows={3} className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#FF7300] focus:bg-white transition-all font-medium" placeholder="Any specific queries?" />
                </div>

                <button type="submit" className="w-full bg-[#FF7300] hover:bg-[#e66a00] text-white py-4 rounded-xl font-bold text-lg shadow-[0_8px_30px_rgba(255,115,0,0.3)] transition-transform duration-300 hover:-translate-y-1 flex justify-center items-center gap-2">
                  Apply Now <Send className="w-5 h-5" />
                </button>
                <p className="text-center text-sm font-medium text-green-600 mt-4">✔ Our team will contact you within 24 hours</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: GOOGLE MAP / LOCATION */}
      <section className="py-24 px-6 md:px-20 bg-white" id="map">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Find Us in <span className="text-[#FF7300]">Hisar</span>
          </h2>
          <p className="text-lg text-gray-500">Visit our premier campus for an in-person tour and counselling.</p>
        </div>

        <div className="max-w-7xl mx-auto rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 flex flex-col lg:flex-row relative z-10">
          <div className="w-full lg:w-2/3 h-[400px] lg:h-auto bg-gray-200">
            {/* Embed Map Placeholder - Replace src with actual Maps Embed URL */}
            <iframe
              src="https://maps.app.goo.gl/ViPxte18fnUMXWE8A"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="w-full lg:w-1/3 bg-gray-900 p-12 text-white flex flex-col justify-center">
            <h3 className="text-3xl font-extrabold text-white mb-6">Our Campus</h3>
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-[#FF7300] p-3 rounded-full mt-1">
                <MapPin className="text-white w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-1">Next Gen Academy</h4>
                <p className="text-gray-400 font-medium leading-relaxed">Behind Elite Cinema, Red Square Market<br />Hisar, Haryana 125001</p>
              </div>
            </div>

            <p className="text-gray-400 font-medium italic mb-10"><span className="text-[#FF7300]">Landmark:</span> Near Red Square Market</p>

            <a href="https://maps.app.goo.gl/7bra3oGKDSAT7Nwi8" target="_blank" rel="noreferrer" className="w-full text-center bg-[#FF7300] hover:bg-[#e66a00] text-white py-4 rounded-xl font-bold text-lg shadow-[0_4px_20px_rgba(255,115,0,0.4)] transition-all duration-300">
              Visit Our Academy Today
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 8: FAQ */}
      <section className="py-24 px-6 md:px-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
              Got <span className="text-[#FF7300]">Queries?</span>
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

      {/* SECTION 7: FINAL CTA (STICKY / REPEAT) */}
      <section className="py-24 px-6 md:px-20 bg-white text-center">
        <div className="max-w-5xl mx-auto bg-gray-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF7300] rounded-full blur-[120px] opacity-20 mix-blend-overlay pointer-events-none"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4 leading-tight">
              Ready to Start Your Career?
            </h2>
            <div className="inline-block bg-orange-500/20 text-[#FF7300] border border-[#FF7300]/30 font-bold px-6 py-2 rounded-full mb-10 shadow-sm animate-pulse">
              Limited Seats Available This Month
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-3xl mx-auto">
              <a href="tel:7027500702" className="flex-1 bg-white hover:bg-gray-100 text-gray-900 px-6 py-4 rounded-xl font-bold text-lg shadow-sm transition-transform duration-300 hover:-translate-y-1 flex items-center justify-center gap-2">
                <PhoneCall className="w-5 h-5" /> Call Now
              </a>
              <a href="https://wa.me/917027500702" className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-4 rounded-xl font-bold text-lg shadow-sm transition-transform duration-300 hover:-translate-y-1 flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" /> WhatsApp Now
              </a>
              <button onClick={() => document.getElementById("lead-form")?.scrollIntoView({ behavior: 'smooth' })} className="flex-1 bg-[#FF7300] hover:bg-[#e66a00] text-white px-6 py-4 rounded-xl font-bold text-lg shadow-[0_8px_30px_rgba(255,115,0,0.3)] transition-transform duration-300 hover:-translate-y-1">
                Book Counselling
              </button>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}