import React from 'react';
import Link from 'next/link';

export default function SignupBanner() {
  return (
    <div className="w-full h-48 md:h-64 bg-gradient-to-r from-[#004767] to-[#05c6bd] relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Decorative Circles */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-10 w-32 h-32 bg-[#00bdb3]/30 rounded-full blur-2xl"></div>

      {/* Navigation */}
      <div className="absolute top-0 left-0 w-full z-10 pt-6">
            <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors group bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
                <span className="text-sm font-medium">Home</span>
            </Link>
            
        </div>
      

      <div className="relative max-w-6xl mx-auto px-8 h-full flex flex-col justify-center pt-8">
        <h2 className="text-white text-3xl md:text-5xl font-bold mb-2">Join the Future</h2>
        <p className="text-white/80 text-lg md:text-xl font-light">Secure your crypto journey today.</p>
      </div>
    </div>
  );
}