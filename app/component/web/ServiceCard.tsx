"use client";
import Image from "next/image";

// Import your images - update these paths with your actual images
import activeStrategiesImg from "@/public/images/image-3.jpeg";
import capitalMarketsImg from "@/public/images/image-4.jpeg";
import researchImg from "@/public/images/image-1.jpeg";

const ServicesSection = () => {
  const services = [
    {
      title: "Active Strategies",
      description:
        "Our managed strategies serve investors who prefer more tailored investment approaches. Access to these strategies are available to all accredited investors. Our actively traded strategies provide managed exposure to digital assets.",
      image: activeStrategiesImg,
    },
    {
      title: "Capital Markets",
      description:
        "Alliance-global Capital Markets matches human capital with purpose-built infrastructure and systems to help institutional counterparties and private investors meet their unique liquidity needs through a full suite of trading, risk management, and hedging services.",
      image: capitalMarketsImg,
    },
    {
      title: "Research",
      description:
        "Below the hype and speculation that have gripped this emerging asset class, there are market fundamentals. Our research aims to distill this information and separate signal from noise for novice and experienced digital asset investors alike.",
      image: researchImg,
    },
  ];

  return (
    <section className="relative py-16 bg-[#e4edf3]">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-[2px] shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 overflow-hidden max-w-sm mx-auto w-full">
              {/* Image Section - Top */}
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300" />
              </div>

              {/* Text Content Section - Bottom */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-12">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
