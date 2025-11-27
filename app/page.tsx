"use client";

import React from "react";
import Header from "./static/header";
import { HeroCarouselSection } from "./component/web/HroCarousel";
import ServiceCard from "./component/web/ServiceCard";
import MissionSection from "./component/web/MissionSection";
import NewsSection from "./component/web/NewsSection";
import PaymentGatewaysSection from "./component/web/PaymentGatewaysSection";
import NewFrontierSection from "./component/web/NewFrontSection";
import AffiliateMarketingSection from "./component/web/Affiated";

const page = () => {
  return (
    <div>
      <Header />
      <HeroCarouselSection />
      <ServiceCard />
      <MissionSection />
      <NewsSection />
      <PaymentGatewaysSection />
      <NewFrontierSection />
      <AffiliateMarketingSection />
    </div>
  );
};

export default page;
