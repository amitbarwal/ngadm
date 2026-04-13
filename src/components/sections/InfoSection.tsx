const InfoSection = () => {
  return (
    <section className="py-24 overflow-hidden bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Our Placement <span className="text-[#FF7300]">Partners</span>
          </h2>
          <p className="mt-4 text-gray-500">Trusted by top companies to hire our certified professionals.</p>
        </div>

        <div className="relative w-full overflow-hidden">
          {/* Gradient Edges for smooth scroll fading */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

          <div className="flex gap-16 animate-slide items-center opacity-70 hover:opacity-100 transition-opacity duration-500 w-max">
            <img src="/nga_logo.png" alt="NGA" className="h-[4.5rem] w-auto grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110" />
            <img src="/partner/nextgen.jpeg" alt="Nextgen" className="h-[4.5rem] w-auto grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110" />
            <img src="/partner/jsl.jpeg" alt="JSL" className="h-[4.5rem] w-auto grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110" />
            <img src="/partner/om.jpeg" alt="OM" className="h-[4.5rem] w-auto grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110" />
            <img src="/partner/amozen.jpeg" alt="Amozen" className="h-[4.5rem] w-auto grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110" />
            
            {/* Duplicate for seamless loop */}
            <img src="/nga_logo.png" alt="NGA" className="h-[4.5rem] w-auto grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110" />
            <img src="/partner/nextgen.jpeg" alt="Nextgen" className="h-[4.5rem] w-auto grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110" />
            <img src="/partner/jsl.jpeg" alt="JSL" className="h-[4.5rem] w-auto grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110" />
            <img src="/partner/om.jpeg" alt="OM" className="h-[4.5rem] w-auto grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110" />
            <img src="/partner/amozen.jpeg" alt="Amozen" className="h-[4.5rem] w-auto grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
