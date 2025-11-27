"use client";
import { Button } from "@/components/ui/button";

const AffiliateMarketingSection = () => {
  const values = [
    {
      number: "1",
      title: "Communication",
      description:
        "Communicate clearly and consistently. We build trusted and enduring relationships by being concise, credible, and direct.",
    },
    {
      number: "2",
      title: "Accountability",
      description:
        "Take responsibility. We learn from our failures and successes, and follow through on our promises to our team and our clients.",
    },
    {
      number: "3",
      title: "Integrity",
      description:
        "Do the right thing. We conduct ourselves and our work with honesty, determination and dedication to our mission.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AFFILIATE MARKETING
          </h1>
          <div className="text-2xl font-semibold text-[#03bfcb]">
            EARN 5% COMMISSION
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {values.map((value, index) => (
            <div key={index} className="text-center p-6">
              <div className="w-12 h-12 bg-[#03bfcb] text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                {value.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-[#03bfcb] hover:bg-[#03bfcb]/90 text-white">
            View services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AffiliateMarketingSection;
