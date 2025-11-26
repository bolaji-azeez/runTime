import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import cityNight from "@/public/images/pexels-photo-210607.jpeg";
import blockchainNetwork from "@/public/images/pexels-photo-599982.jpeg";
import digitalTrading from "@/public/images/pexels-photo-6771242.jpeg";
import bgImage from "@/public/images/video-poster.jpeg";
import Image from "next/image";

const carouselSlides = [
  {
    title: "PIONEERS IN DIGITAL ASSET INVESTING",
    image: cityNight,
  },
  {
    title: "BLOCKCHAIN INNOVATION LEADERS",
    image: blockchainNetwork,
  },
  {
    title: "FUTURE OF FINANCIAL TECHNOLOGY",
    image: digitalTrading,
  },
];

export const HeroCarouselSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={bgImage}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Carousel Section - Left */}
          <div className="relative animate-slide-in">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              {/* Carousel Container */}
              <div className="relative aspect-video">
                {carouselSlides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}>
                    {/* Image Container - Takes full width */}
                    <div className="w-full h-full relative">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>

                    {/* Text Overlay - Positioned to overlay from left */}
                    <div className="absolute inset-0 flex items-center">
                      <div className="relative h-full flex items-center">
                        {/* Text container that overlays about 100px onto the image from left */}
                        <div className="relative z-20 bg-gradient-to-r from-black/80 to-transparent pl-8 pr-16 lg:pl-12 lg:pr-24 py-8 h-full flex items-center">
                          <div className="max-w-md">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                              {slide.title}
                            </h2>
                          </div>
                        </div>

                        {/* Optional: Add a subtle edge to make the overlay more defined */}
                        <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#03bfcb] to-transparent" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls - Arrows and Dots together */}
            <div className="flex items-center justify-center gap-4 mt-6">
              {/* Previous Button */}
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-[#03bfcb] hover:bg-[#03bfcb]/90 text-white flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                aria-label="Previous slide">
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dot Indicators */}
              <div className="flex justify-center gap-2">
                {carouselSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentSlide
                        ? "w-8 bg-[#03bfcb]"
                        : "w-2 bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-[#03bfcb] hover:bg-[#03bfcb]/90 text-white flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                aria-label="Next slide">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Content Section - Right */}
          <div className="text-white space-y-6 animate-fade-in lg:pl-8">
            <h3 className="text-3xl md:text-4xl font-bold">
              OUR <span className="text-[#03bfcb]">EVOLUTION</span>
            </h3>

            <p className="text-lg text-white/80 leading-relaxed max-w-xl">
              We believe that Bitcoin and blockchain networks are landmark
              innovations that will fundamentally reshape the global financial
              system, and investors should be able to participate in this
              transformation.
            </p>

            <Button
              size="lg"
              className="bg-[#03bfcb] hover:bg-[#03bfcb]/90 text-[#ffffff] font-semibold px-8 py-6 text-lg transition-all hover:scale-105 shadow-lg">
              Contact us
            </Button>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#03bfcb]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#03bfcb]/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
};
