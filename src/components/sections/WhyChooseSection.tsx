import Image from "next/image";

const features = [
  {
    number: "01",
    title: "Live Training",
    description: "Experience hands-on learning with our live training sessions.",
    icon: "🎥",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    number: "02",
    title: "Internships",
    description: "Apply your skills in a professional setting, build your portfolio, and take a confident step toward your future career.",
    icon: "💼",
    bgColor: "bg-green-50",
    iconColor: "text-green-500",
  },
  {
    number: "03",
    title: "Expert Trainers",
    description: "Learn from expert trainers with real-world experience and deep industry knowledge.",
    icon: "👨‍🏫",
    bgColor: "bg-red-50",
    iconColor: "text-red-500",
  },
  {
    number: "04",
    title: "Certifications",
    description: "Showcase your achievement, enhance your resume, and open doors to new career opportunities.",
    icon: "🏆",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-500",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white to-[#FFF8F4] py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-orange-200 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Why Choose{"   "}
            <span className="text-[#FF6A00] relative inline-block">
              NGA?
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-orange-300" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
              </svg>
            </span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">We provide everything you need to start a successful career in tech and marketing.</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Features Section */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {features.map((item, index) => (
              <div 
                key={index} 
                className={`p-8 rounded-3xl bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-sm group-hover:scale-110 transition-transform ${item.bgColor}`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                   <span className="text-sm font-semibold text-gray-400">{item.number}</span>
                   {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full relative">
            <div className="absolute inset-0 bg-[#FF7300] rounded-[3rem] rotate-3 opacity-20 scale-105 blur-lg hidden lg:block animate-float"></div>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white transform transition-transform hover:scale-[1.02] duration-500 bg-white group">
              <Image
                src="/whychoose.png"
                alt="Why choose NGA"
                width={600}
                height={600}
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white font-semibold text-xl px-4 py-2 glass-card rounded-full scale-95 group-hover:scale-100 transition-transform">
                Accelerate Your Career
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;


