"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import financeImage from "@/public/images/alliance_2023-06-18_18-50-16.jpg";

const NewFrontierSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className=" overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0 items-center">

            <div className="relative h-[350px]">
              <Image
                src={financeImage}
                alt="New Frontier of Finance"
                fill
                className="object-cover rounded-[3px]"
                placeholder="blur"
              />
              <div className="absolute" />
            </div>
            {/* Text Content Side */}
            <div className="p-6 flex flex-col justify-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-3xl font-bold text-gray-900 leading-tight">
                  NEW FRONTIER OF
                  FINANCE
                </h2>

                <p className="text-md font-semibold text-gray-600 leading-relaxed">
                  Alliance Global is boldly charting a new path in a new frontier of finance, 
                  and helping investors of all types achieve their financial goals. The CoinShares 
                  Group brings together a wide range of financial products and services into a 
                  single brand that our clients can depend on.
                </p>

                <Button
                  size="lg"
                  className="bg-[#03bfcb] hover:bg-[#03bfcb]/90 text-white font-semibold px-6 py-6 text-lg transition-all hover:scale-105 shadow-lg group mt-4"
                >
                  Learn more
                  
                </Button>
              </div>
            </div>

            {/* Image Side */}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewFrontierSection;