"use client";

const cardData = [
  {
    title: "Design",
    image: "/digital_marketing.png",
  },
  {
    title: "Code",
    image: "https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true",
  },
  {
    title: "Launch",
    image: "https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true",
  },
];

export default function HoverCardGrid() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-[1000px] flex flex-wrap justify-between gap-4 px-4">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="relative w-[300px] h-[200px] cursor-pointer group perspective"
          >
            <div className="relative w-full h-full transition-transform duration-500 group-hover:-translate-y-24 z-10 bg-orange-500 flex flex-col items-center justify-center">
              <div className="opacity-20 group-hover:opacity-100 transition-opacity duration-500 text-center">
                <img src={card.image} alt={card.title} className="w-[100px] mx-auto" />
                <h3 className="text-white text-xl font-semibold mt-2">{card.title}</h3>
              </div>
            </div>

            <div className="absolute top-0 w-full h-full transition-transform duration-500 group-hover:translate-y-0 translate-y-[100px] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex items-center justify-center p-5 z-0">
              <div className="text-center">
                <p className="text-sm text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.
                </p>
                <a
                  href="#"
                  className="inline-block mt-4 text-sm font-bold text-[#333] border border-[#333] px-3 py-1 transition-all duration-300 hover:bg-[#333] hover:text-white"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
