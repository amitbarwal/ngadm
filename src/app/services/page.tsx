"use client";
import React, { useState } from 'react';
import { 
  PhoneCall, 
  MessageCircle, 
  CheckCircle2, 
  Search, 
  Share2, 
  Megaphone, 
  Globe, 
  PenTool, 
  Video, 
  Users, 
  Mail, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  TrendingUp, 
  Building2, 
  HeartPulse, 
  Utensils, 
  GraduationCap, 
  Store, 
  ShoppingCart, 
  Target,
  BarChart,
  MessageSquare
} from 'lucide-react';
import Testimonial from '@/components/sections/Testimonial';

// --- DATA ---

const servicesData = [
  {
    id: 1,
    title: "Search Engine Optimization (SEO)",
    shortDesc: "Rank #1 on Google and get organic traffic.",
    benefit: "Drive Free, Native Traffic",
    icon: Search,
    whatWeDo: "We optimize your website technicals, content, and backlinks to ensure you rank at the top of Google for highly profitable keywords.",
    deliverables: ["Comprehensive SEO Audit", "Keyword Research & Mapping", "On-Page & Technical SEO", "High-Quality Link Building"],
    tools: ["Google Search Console", "Ahrefs", "Semrush"],
    results: "2x to 5x Organic Traffic Growth",
  },
  {
    id: 2,
    title: "Social Media Marketing (SMM)",
    shortDesc: "Build brand awareness and engaged communities.",
    benefit: "Boost Brand Engagement",
    icon: Share2,
    whatWeDo: "We manage your social presence end-to-end, creating viral content strategies, reels, and graphic posts that resonate with your target audience.",
    deliverables: ["Content Calendar Creation", "Graphic & Reel Production", "Community Management", "Follower Growth Strategy"],
    tools: ["Canva", "Meta Business Suite", "Hootsuite"],
    results: "Massive Brand Awareness & Loyalty",
  },
  {
    id: 3,
    title: "Google Ads & Meta Ads (PPC)",
    shortDesc: "Instant leads and sales with targeted advertising.",
    benefit: "High-Quality Instant Leads",
    icon: Megaphone,
    whatWeDo: "We run highly optimized, data-driven ad campaigns on Facebook, Instagram, and Google to capture users exactly when they are ready to buy.",
    deliverables: ["Ad Copywriting & Creatives", "A/B Testing Campaigns", "Landing Page Optimization", "Retargeting Setup"],
    tools: ["Google Ads", "Facebook Ads Manager", "Google Analytics"],
    results: "3x to 10x Return on Ad Spend (ROAS)",
  },
  {
    id: 4,
    title: "Website Design & Development",
    shortDesc: "Stunning, high-converting websites.",
    benefit: "Increase Conversion Rates",
    icon: Globe,
    whatWeDo: "We build blazing fast, beautifully designed websites optimized specifically to turn your regular visitors into paying customers.",
    deliverables: ["Custom UI/UX Design", "Mobile-Responsive Layout", "E-Commerce Setup", "Speed & SEO Optimization"],
    tools: ["WordPress", "Shopify", "React/Next.js", "Figma"],
    results: "Professional Digital Storefront",
  },
  {
    id: 5,
    title: "Branding & Graphic Design",
    shortDesc: "Stand out with a memorable brand identity.",
    benefit: "Establish Brand Authority",
    icon: PenTool,
    whatWeDo: "We give your business a visual personality. From logo creation to full brand kits, we ensure your agency looks premium across all channels.",
    deliverables: ["Logo & Brand Guidelines", "Social Media Kits", "Flyers & Brochures", "Packaging Design"],
    tools: ["Adobe Illustrator", "Photoshop", "Midjourney"],
    results: "Premium Brand Positioning",
  },
  {
    id: 6,
    title: "Video Editing & Content",
    shortDesc: "Cinematic videos and viral short-form reels.",
    benefit: "Maximize Viewer Retention",
    icon: Video,
    whatWeDo: "Attention is the new currency. We edit dynamic, fast-paced videos tailored to keep users watching till the very last second.",
    deliverables: ["Reel/Shorts Editing", "Corporate Video Shoots", "Podcast Editing", "Color Grading"],
    tools: ["Premiere Pro", "After Effects", "CapCut"],
    results: "Viral Reach Capabilities",
  },
  {
    id: 7,
    title: "Influencer Marketing",
    shortDesc: "Collaborate with top influencers for organic reach.",
    benefit: "Instant Trust & Sales",
    icon: Users,
    whatWeDo: "We connect your brand with local and national creators to promote your products natively to their highly loyal audiences.",
    deliverables: ["Creator Shortlisting", "Campaign Negotiation", "Scripting & Approvals", "Performance Tracking"],
    tools: ["Instagram", "YouTube", "Creator Marketplaces"],
    results: "High-Volume Trusted Referrals",
  },
  {
    id: 8,
    title: "Email & Affiliate Marketing",
    shortDesc: "Automated sequences that print money.",
    benefit: "Increase Lifecycle Value",
    icon: Mail,
    whatWeDo: "We set up automated email funnels that nurture your leads and abandon carts, alongside affiliate networks that sell on your behalf.",
    deliverables: ["Welcome Automation", "Abandoned Cart Funnels", "Copywriting", "Affiliate Portal Setup"],
    tools: ["Mailchimp", "Klaviyo", "ActiveCampaign"],
    results: "Passive Sales Generation",
  }
];

const industries = [
  { name: "Real Estate", icon: Building2 },
  { name: "Healthcare", icon: HeartPulse },
  { name: "Restaurants & Hotels", icon: Utensils },
  { name: "Education Institutes", icon: GraduationCap },
  { name: "Local Businesses", icon: Store },
  { name: "E-Commerce Brands", icon: ShoppingCart },
];

const faqs = [
  { q: "How long does SEO take to show results?", a: "SEO is a long-term strategy. While you may see slight improvements within the first month, substantial ranking and traffic increases typically take 3 to 6 months depending on competition." },
  { q: "What is the cost of digital marketing?", a: "Our pricing is completely customized based on your business goals, target audience, and current digital footprint. We offer flexible packages tailored to local businesses and enterprise needs." },
  { q: "Do you guarantee leads or sales?", a: "While we cannot legally guarantee specific numbers due to market variables, we promise data-driven, highly optimized campaigns that have consistently delivered massive ROI for our past clients." },
  { q: "How do you report results to clients?", a: "We maintain 100% transparency. You will receive a detailed analytics dashboard and monthly performance reports breaking down exactly where your budget went and the ROI generated." },
];

export default function ServicesPage() {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleService = (id: number) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <main className="bg-white min-h-screen font-sans relative pb-24 md:pb-0 scroll-smooth">
      
      {/* 🟢 FLOATING WHATSAPP (Desktop / Main) */}
      <a 
        href="https://wa.me/917027500702" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-24 md:bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-[0_8px_30px_rgba(34,197,94,0.3)] hover:scale-110 transition-transform duration-300 z-50 flex items-center justify-center group"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-16 bg-white text-gray-800 text-sm font-bold px-4 py-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with an Expert
        </span>
      </a>

      {/* 🔴 STICKY BOTTOM BAR (Mobile Only) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 z-50 flex gap-4 shadow-[0_-10px_30px_rgba(0,0,0,0.1)]">
        <a href="tel:7027500702" className="flex-1 bg-gray-900 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2">
          <PhoneCall className="w-5 h-5"/> Call Now
        </a>
        <a href="https://wa.me/917027500702" className="flex-1 bg-[#25D366] text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2">
          <MessageCircle className="w-5 h-5"/> WhatsApp
        </a>
      </div>

      {/* SECTION 1: HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 md:px-20 overflow-hidden bg-gradient-to-b from-orange-50 to-white">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-orange-200 rounded-full blur-[120px] opacity-40 mix-blend-multiply animate-float pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-blue-100 rounded-full blur-[120px] opacity-40 mix-blend-multiply animate-float pointer-events-none" style={{ animationDelay: '2s' }} />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white text-[#FF7300] font-bold text-sm mb-8 shadow-sm border border-orange-100">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF7300]"></span>
            </span>
            Next Gen Agency — Hisar&apos;s Top Performance Marketers
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-6">
            Grow Your Business with <br className="hidden md:block" />
            <span className="bg-gradient-text">Smart Digital Marketing</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-800 font-semibold mb-4 bg-orange-50 inline-block px-4 py-2 rounded-lg">
            SEO | Social Media | Ads | Website | Branding
          </h2>
          <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
            We don&apos;t just post content. We help businesses generate high-quality leads, unpredictable sales, and extreme growth.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-[#FF7300] hover:bg-[#e66a00] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-[0_8px_30px_rgba(255,115,0,0.3)] transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
              onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Free Consultation <ArrowRight className="w-5 h-5" />
            </button>
            <a href="https://wa.me/917027500702" className="w-full sm:w-auto bg-white border-2 border-gray-100 hover:border-gray-200 text-gray-800 px-8 py-4 rounded-xl font-bold text-lg shadow-sm transition-all duration-300 hover:bg-gray-50 flex items-center justify-center gap-2">
              Get Quote
            </a>
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-8 text-gray-700 font-bold">
            <span className="flex items-center gap-2"><CheckCircle2 className="w-6 h-6 text-green-500"/> Result-Oriented Strategies</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-6 h-6 text-green-500"/> Industry Experts</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-6 h-6 text-green-500"/> Local & National Clients</span>
          </div>
        </div>
      </section>

      {/* SECTION 2 & 3: CORE SERVICES (GRID + EXPANDABLE DETAILS) */}
      <section className="py-24 px-6 md:px-20 bg-gray-50 border-y border-gray-100" id="services">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Our Core <span className="text-[#FF7300]">Services</span>
            </h2>
            <p className="mt-4 text-xl text-gray-500">Everything you need to scale your business online.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {servicesData.map((service) => (
              <div key={service.id} className="relative group">
                <div 
                  className={`bg-white border ${expandedService === service.id ? 'border-[#FF7300] shadow-[0_8px_40px_rgba(255,115,0,0.1)]' : 'border-gray-100 shadow-sm hover:border-[#FF7300]/50 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]'} rounded-[2rem] p-6 lg:p-8 transition-all duration-300 h-full flex flex-col cursor-pointer overflow-hidden`}
                  onClick={() => toggleService(service.id)}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 bg-orange-50 text-[#FF7300] rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-7 h-7" />
                    </div>
                    {expandedService === service.id ? <ChevronUp className="text-[#FF7300] w-6 h-6" /> : <ChevronDown className="text-gray-400 w-6 h-6 group-hover:text-[#FF7300]" />}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-500 text-sm mb-6 flex-grow">{service.shortDesc}</p>
                  
                  <div className="mb-6 pt-6 border-t border-gray-50">
                    <div className="inline-block bg-green-50 text-green-700 font-bold px-3 py-1 rounded-md text-xs uppercase tracking-wide">
                      ⚡ Goal: {service.benefit}
                    </div>
                  </div>

                  <button className="w-full py-3 rounded-xl bg-gray-50 text-gray-800 font-bold text-sm group-hover:bg-[#FF7300] group-hover:text-white transition-colors duration-300">
                    {expandedService === service.id ? 'Close Details' : 'Know More'}
                  </button>
                </div>

                {/* EXPANDED DETAILS DROPDOWN */}
                {expandedService === service.id && (
                  <div className="absolute top-full left-0 right-0 mt-4 bg-white border border-[#FF7300] rounded-[2rem] p-8 shadow-[0_20px_60px_rgba(255,115,0,0.15)] z-20 animate-fade-in-up md:min-w-[400px]">
                    <h4 className="text-2xl font-extrabold text-gray-900 mb-4">{service.title}</h4>
                    
                    <div className="mb-6">
                      <p className="text-gray-600 font-medium leading-relaxed">{service.whatWeDo}</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6 mb-8">
                      <div>
                        <p className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-3">Key Deliverables</p>
                        <ul className="space-y-2">
                          {service.deliverables.map((d, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                              <CheckCircle2 className="w-4 h-4 text-[#FF7300] flex-shrink-0" /> {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-3">Tools We Use</p>
                        <div className="flex flex-wrap gap-2">
                          {service.tools.map((t, i) => (
                            <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-bold rounded-lg">{t}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-gray-100">
                      <div className="flex-1 flex items-center gap-3 text-sm font-extrabold text-gray-900 p-4 bg-orange-50 rounded-xl">
                        <Target className="w-6 h-6 text-[#FF7300]" /> Expected: {service.results}
                      </div>
                    </div>

                    <div className="mt-6 flex gap-4">
                       <button className="flex-1 bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-xl font-bold transition-colors shadow-md">Get Proposal</button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
             <button className="bg-[#FF7300] hover:bg-[#e66a00] text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-[0_8px_30px_rgba(255,115,0,0.3)] transition-transform duration-300 hover:-translate-y-1">
                Explore Full Agency Profile
             </button>
          </div>
        </div>
      </section>

      {/* SECTION 4: INDUSTRIES WE SERVE */}
      <section className="py-24 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Industries We <span className="text-[#FF7300]">Partner With</span>
          </h2>
          <p className="text-xl text-gray-500 mb-16">Domain expertise that ensures highly targeted marketing.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((ind, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col items-center hover:bg-white hover:border-[#FF7300] hover:shadow-[0_8px_30px_rgba(255,115,0,0.1)] transition-all duration-300">
                <ind.icon className="w-10 h-10 text-gray-700 mb-4" />
                <h4 className="font-bold text-gray-900 text-sm">{ind.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: OUR PROCESS (VERY IMPORTANT) */}
      <section className="py-24 px-6 md:px-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-[#FF7300] rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              How We <span className="text-[#FF7300]">Work</span>
            </h2>
            <p className="text-xl text-gray-400 font-medium">Data-driven strategies with real results.</p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center relative gap-8 md:gap-4">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-800 -z-10 translate-y-[-50%]"></div>
            
            {[
               { no: 1, title: 'Business Setup & Understanding', icon: '🕵️' },
               { no: 2, title: 'Strategic Macro Planning', icon: '🗺️' },
               { no: 3, title: 'Pixel-Perfect Execution', icon: '🚀' },
               { no: 4, title: 'A/B Testing & Optimization', icon: '⚙️' },
               { no: 5, title: 'Reporting & Massive Growth', icon: '📈' },
            ].map((step) => (
              <div key={step.no} className="relative bg-gray-800 border border-gray-700 w-full md:w-56 p-8 rounded-3xl flex flex-col items-center text-center shadow-2xl hover:border-[#FF7300] transition-colors duration-300 hover:-translate-y-2">
                 <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-xl font-black text-[#FF7300] absolute -top-6 border-4 border-gray-900">
                    {step.no}
                 </div>
                 <div className="text-5xl mb-6 mt-4 drop-shadow-lg">{step.icon}</div>
                 <h4 className="font-extrabold text-lg leading-snug">{step.title}</h4>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
             <button className="bg-[#FF7300] hover:bg-[#e66a00] text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-[0_8px_30px_rgba(255,115,0,0.3)] transition-transform duration-300 hover:-translate-y-1">
                Start Your Project Today
             </button>
          </div>
        </div>
      </section>

      {/* SECTION 6: RESULTS / CASE STUDY */}
      <section className="py-24 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Results That <span className="text-[#FF7300]">Matter</span>
            </h2>
            <p className="mt-4 text-xl text-gray-500">We don&apos;t sell services, we sell business growth.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-100 rounded-[2.5rem] p-10 flex flex-col items-center text-center shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:-translate-y-2 transition-transform duration-300">
              <div className="w-20 h-20 bg-orange-50 text-[#FF7300] rounded-full flex items-center justify-center mb-6"><Users className="w-10 h-10"/></div>
              <h3 className="text-5xl font-black text-gray-900 mb-2">15k+</h3>
              <p className="text-gray-500 font-bold uppercase tracking-wider text-sm mb-4">Leads Generated</p>
              <p className="text-gray-400 text-sm">Consistent pipeline creation for Real Estate & Clinics.</p>
            </div>
            
            <div className="bg-white border border-gray-100 rounded-[2.5rem] p-10 flex flex-col items-center text-center shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:-translate-y-2 transition-transform duration-300">
              <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6"><TrendingUp className="w-10 h-10"/></div>
              <h3 className="text-5xl font-black text-gray-900 mb-2">350%</h3>
              <p className="text-gray-500 font-bold uppercase tracking-wider text-sm mb-4">Traffic Growth</p>
              <p className="text-gray-400 text-sm">Average organic traffic increase within 6 months.</p>
            </div>

            <div className="bg-white border border-gray-100 rounded-[2.5rem] p-10 flex flex-col items-center text-center shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:-translate-y-2 transition-transform duration-300">
              <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6"><BarChart className="w-10 h-10"/></div>
              <h3 className="text-5xl font-black text-gray-900 mb-2">5x</h3>
              <p className="text-gray-500 font-bold uppercase tracking-wider text-sm mb-4">ROI Improvement</p>
              <p className="text-gray-400 text-sm">Maximizing Ad budgets and lowering acquiring costs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: WHY CHOOSE NEXT GEN AGENCY */}
      <section className="py-24 px-6 md:px-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
           <div className="flex-1 space-y-8">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Why Choose Next Gen <span className="text-[#FF7300]">Agency?</span>
              </h2>
              <p className="text-lg text-gray-600">Unlike typical agencies, we don&apos;t apply copy-paste formulas. We analyze your local market demographics completely.</p>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-white p-2 rounded-lg shadow-sm text-[#FF7300]"><CheckCircle2 className="w-5 h-5"/></div>
                  <div><h4 className="font-bold text-xl text-gray-900">Customized Strategies</h4><p className="text-gray-500">Tailor-made attack plans perfectly suited for your niche.</p></div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-white p-2 rounded-lg shadow-sm text-[#FF7300]"><CheckCircle2 className="w-5 h-5"/></div>
                  <div><h4 className="font-bold text-xl text-gray-900">Local Market Focus</h4><p className="text-gray-500">Unmatched understanding of the Hisar and Haryana consumer mindset.</p></div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-white p-2 rounded-lg shadow-sm text-[#FF7300]"><CheckCircle2 className="w-5 h-5"/></div>
                  <div><h4 className="font-bold text-xl text-gray-900">Transparent Reporting</h4><p className="text-gray-500">Clear metrics. No vanity numbers. You see exactly where your budget goes.</p></div>
                </li>
              </ul>
           </div>
           
           <div className="flex-1 w-full bg-gradient-to-tr from-[#FF7300] to-orange-400 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-[100px] opacity-20"></div>
              <h3 className="text-3xl font-extrabold mb-6 relative z-10">Stop Wasting Ad Budgets</h3>
              <p className="text-lg font-medium opacity-90 mb-10 relative z-10">Partner with an agency that treats your money like their own. Let&apos;s engineer a marketing funnel that prints money.</p>
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors relative z-10 w-full sm:w-auto shadow-lg hover:-translate-y-1">
                 Book Strategy Call
              </button>
           </div>
        </div>
      </section>

      {/* SECTION 8: CLIENT TESTIMONIALS */}
      <Testimonial />

      {/* SECTION 9: PRICING / CONSULTATION */}
      <section className="py-24 px-6 md:px-20 bg-white" id="pricing">
        <div className="max-w-5xl mx-auto text-center bg-gray-50 border border-gray-100 rounded-[3rem] p-12 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
           <div className="inline-flex mx-auto items-center gap-2 px-6 py-2 rounded-full bg-orange-100 text-[#FF7300] font-bold text-sm mb-6 shadow-sm">
             Transparent Quotations
           </div>
           <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
             Affordable Plans for <span className="text-[#FF7300]">Every Business</span>
           </h2>
           <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
             We do not believe in standard pricing tiers. Why? Because a hospital needs different marketing than an e-commerce brand.
           </p>

           <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <div className="bg-white p-6 rounded-2xl w-full sm:w-64 border border-gray-100 shadow-sm">
                 <h4 className="font-bold text-xl text-gray-900 mb-2">Step 1</h4>
                 <p className="text-sm text-gray-500">Book your completely free audit consultation.</p>
              </div>
              <ArrowRight className="hidden sm:block text-gray-300 w-8 h-8"/>
              <div className="bg-white p-6 rounded-2xl w-full sm:w-64 border border-[#FF7300] shadow-[0_8px_20px_rgba(255,115,0,0.1)]">
                 <h4 className="font-bold text-xl text-[#FF7300] mb-2">Step 2</h4>
                 <p className="text-sm text-gray-600 font-medium">Receive a fully customized execution proposal.</p>
              </div>
           </div>

           <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-[#FF7300] hover:bg-[#e66a00] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-[0_8px_30px_rgba(255,115,0,0.3)] transition-transform duration-300 hover:-translate-y-1">
                Get Free Consultation
              </button>
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-sm transition-transform duration-300 hover:-translate-y-1">
                Request Proposal
              </button>
           </div>
        </div>
      </section>

      {/* SECTION 11: FAQ */}
      <section className="py-24 px-6 md:px-20 bg-white border-t border-gray-100">
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
                className="bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden cursor-pointer hover:border-[#FF7300]/50 transition-colors duration-300"
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

      {/* SECTION 10: FINAL CTA (STRONG) */}
      <section className="py-24 px-6 md:px-20 bg-gray-900 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF7300] rounded-full blur-[200px] opacity-20 pointer-events-none"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-8 leading-tight">
            Ready to Dominate Your Local Market?
          </h2>
          
          <div className="inline-block bg-orange-500/20 text-[#FF7300] border border-[#FF7300]/30 font-bold px-6 py-2 rounded-full mb-12 shadow-sm animate-pulse">
            🚨 Limited Client Slots Available For Next Month
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-3xl mx-auto">
            <a href="tel:7027500702" className="flex-1 bg-white hover:bg-gray-100 text-gray-900 px-6 py-5 rounded-2xl font-bold text-xl shadow-sm transition-transform duration-300 hover:-translate-y-1 flex items-center justify-center gap-3">
               <PhoneCall className="w-6 h-6"/> Call Now
            </a>
            <a href="https://wa.me/917027500702" className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-5 rounded-2xl font-bold text-xl shadow-sm transition-transform duration-300 hover:-translate-y-1 flex items-center justify-center gap-3">
               <MessageSquare className="w-6 h-6"/> WhatsApp
            </a>
            <button className="flex-1 bg-[#FF7300] hover:bg-[#e66a00] text-white px-6 py-5 rounded-2xl font-bold text-xl shadow-[0_8px_30px_rgba(255,115,0,0.3)] transition-transform duration-300 hover:-translate-y-1"
               onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: 'smooth' })}
            >
               Book Consultation
            </button>
          </div>
          
          <p className="text-gray-400 mt-10 font-medium">Or reach us directly at <span className="text-white">+91 7027500702</span></p>
        </div>
      </section>

    </main>
  );
}