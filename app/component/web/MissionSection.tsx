"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Image from "next/image";
import businessMeeting from "@/public/images/pexels-photo-599982.jpeg";
import signature from "@/public/images/image-3.jpeg";

const MissionSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [businessMeeting, businessMeeting, businessMeeting];

  const nextSlide = () => setCurrentSlide((p) => (p + 1) % images.length);
  const prevSlide = () =>
    setCurrentSlide((p) => (p - 1 + images.length) % images.length);

  useEffect(() => {
    const id = setInterval(nextSlide, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    // limit height to 60vh on md+; small screens remain natural height
    <section className="py-8 px-6 sm:px-6 lg:px-12 bg-[#e4edf3]">
      <div className="container mx-auto max-w-6xl">
        {/* make the grid stretch and limit its height */}
        <div
          className="grid lg:grid-cols-2 gap-8 items-stretch
                        md:max-h-[50vh] md:overflow-hidden">
          {/* Image Carousel - fills available column height */}
          <div className="relative group h-full">
            <div className="relative h-full w-full overflow-hidden rounded-[2px] shadow-2xl">
              <Image
                src={images[currentSlide]}
                alt="Professional team collaboration"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                placeholder="blur"
                priority={currentSlide === 0}
              />

              {/* Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      i === currentSlide
                        ? "bg-primary scale-125"
                        : "bg-white/80 hover:bg-white"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <Button
                variant="secondary"
                size="icon"
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label="Previous slide">
                <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label="Next slide">
                <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
              </Button>

              {/* Slide counter */}
              <div className="absolute top-4 right-4 bg-black/60 text-white text-sm px-2 py-1 rounded-md backdrop-blur-sm">
                {currentSlide + 1} / {images.length}
              </div>
            </div>
          </div>

          {/* Content - constrained to same column height */}
          <div className="justify-between overflow-hidden flex flex-col gap-2">
            <div className="space-y-0">
              <h3 className="text-[#0cc1cd] font-semibold tracking-wider text-sm uppercase">
                How We Achieved This Mission
              </h3>

              <h2 className="text-4xl md:text-4xl lg:text-4xl font-bold text-[#004767] leading-tight tracking-tight">
                Professional solutions for digital asset investors
              </h2>
            </div>

            <div className="space-y-2 overflow-auto pr-1">
              <p className="text-muted-foreground text-lg leading-relaxed">
                At Aliance Global, our mission is to expand access to the
                digital asset ecosystem while serving as trusted partners for
                our clients.
              </p>
            </div>

            <div className="border-t border-border pt-2">
              <div className="flex items-center gap-3">
                <Image
                  src={signature}
                  alt="Signature"
                  className="h-10 w-auto"
                  placeholder="blur"
                />
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-primary">
                    Rukeshvarman R CHELLIAH
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    CEO & Shareholder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
