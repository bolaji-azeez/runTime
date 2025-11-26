"use client";

import React from "react";
import { FaFlagUsa } from "react-icons/fa";
import { FaBitcoin } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import bg from "../../../public/images/hd-2.jpeg";

const NewsSection = () => {
  return (
    <section
      className="relative w-full h-[90vh] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(${bg.src})`, // Replace with your image path
      }}>
      <div className="absolute inset-0"></div>

      <div className="relative max-w-6xl z-10 container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* LEFT COLUMN */}
        <div className="text-white mt-10">
          <h1 className="text-4xl font-bold mb-4">Live news</h1>
          <p className="text-lg max-w-lg mb-8 opacity-80">
            Get updated on what happening in the crypto and forex space...
          </p>

          <button className="px-5 py-2 border border-white/40 rounded-lg hover:bg-white/10 transition">
            others news
          </button>

          {/* Language Selector */}
          <div className="absolute bottom-8 left-6 flex items-center gap-3">
            <img src="/uk-flag.png" alt="EN" className="w-8 h-8" />
            <span className="text-white">EN ▾</span>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="text-white mt-10">
          <h2 className="text-3xl font-semibold mb-6">Top Stories</h2>

          <div className="space-y-6 overflow-y-auto h-[60vh] pr-3 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
            {/* STORY 1 */}
            <div>
              <div className="flex items-center gap-3 text-sm opacity-70 mb-1">
                <FaFlagUsa /> <span>21 hours ago</span>
              </div>
              <p className="text-lg leading-snug">
                EUR/USD: Euro Jumps Above $1.1550 After Private Payrolls Show US
                Lost Jobs
              </p>
            </div>

            {/* STORY 2 */}
            <div>
              <div className="flex items-center gap-3 text-sm opacity-70 mb-1">
                <FaGoogle /> <span>yesterday</span>
              </div>
              <p className="text-lg leading-snug">
                GOOGL: Alphabet Stock Hits Record as Larry Page Becomes 2nd
                Wealthiest Person
              </p>
            </div>

            {/* STORY 3 */}
            <div>
              <div className="flex items-center gap-3 text-sm opacity-70 mb-1">
                <span>🌐</span> <span>yesterday</span>
              </div>
              <p className="text-lg leading-snug">
                IXIC: Nasdaq Composite Shoots Up 2.7% as AI Trade Stages Big
                Rebound
              </p>
            </div>

            {/* STORY 4 */}
            <div>
              <div className="flex items-center gap-3 text-sm opacity-70 mb-1">
                <FaFlagUsa /> <span>2 days ago</span>
              </div>
              <p className="text-lg leading-snug">
                EUR/USD: Euro Sinks Below 200-Day Moving Average as Dollar
                Dominates FX Trading
              </p>
            </div>

            {/* STORY 5 */}
            <div>
              <div className="flex items-center gap-3 text-sm opacity-70 mb-1">
                <FaBitcoin /> <span>2 days ago</span>
              </div>
              <p className="text-lg leading-snug">
                DJI: Dow Jones Futures Jump as Emboldened Traders Step into
                Shortened Week
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
