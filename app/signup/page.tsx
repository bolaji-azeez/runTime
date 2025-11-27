"use client";

import React, { useState } from "react";
import SignupBanner from "../component/web/SignupBanner";
// In a real Next.js app, import Link from 'next/link';

// Simple SVG icons to avoid external dependency issues in preview
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#05c6bd]"><polyline points="20 6 9 17 4 12"></polyline></svg>
);

const AlertIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
);

export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    countryCode: "+1",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    usdtAddress: "",
    btcAddress: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Basic Validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    // Mock API Call
    console.log("Signup attempt:", formData);
    
    // Simulate success
    setSuccess(true);
    setTimeout(() => {
        // In a real app, router.push('/dashboard');
        alert("Account created successfully! Redirecting to dashboard...");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <SignupBanner />
      
      <div className="max-w-6xl mx-auto px-8 py-12 md:py-20">
        <div className="grid grid-cols-12 gap-8 items-start">
          {/* Main Form Section - Spanning 12 cols on mobile, 8 on desktop */}
          <div className="col-span-12 lg:col-span-8">
            <div className="mb-8">
              <h1 className="text-4xl font-extrabold text-[#004767] mb-2">Create Account</h1>
              <p className="text-[#0f4e57]/80">Enter your details below to get started with your crypto portfolio.</p>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm rounded flex items-center gap-2">
                <AlertIcon />
                <div>
                  <p className="font-bold">Error</p>
                  <p>{error}</p>
                </div>
              </div>
            )}

            {success && (
              <div className="mb-6 p-4 bg-green-50 border-l-4 border-[#05c6bd] text-[#0f4e57] text-sm rounded flex items-center gap-2">
                <CheckIcon />
                <p>Registration successful! Please check your email.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 items-end">
                
                {/* 1. Full Name */}
                <div className="group">
                  <label htmlFor="fullName" className="block text-sm font-semibold text-[#0f4e57] mb-2 uppercase tracking-wide opacity-80 group-focus-within:opacity-100 group-focus-within:text-[#00bdb3] transition-colors">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-transparent border-0 border-b-2 border-[#bfeeea] focus:border-[#00bdb3] outline-none py-3 text-lg transition-colors placeholder:text-slate-300"
                    required
                  />
                </div>

                {/* 2. Username */}
                <div className="group">
                  <label htmlFor="username" className="block text-sm font-semibold text-[#0f4e57] mb-2 uppercase tracking-wide opacity-80 group-focus-within:opacity-100 group-focus-within:text-[#00bdb3] transition-colors">
                    Username
                  </label>
                  <input
                    id="username"
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="cryptoking123"
                    className="w-full bg-transparent border-0 border-b-2 border-[#bfeeea] focus:border-[#00bdb3] outline-none py-3 text-lg transition-colors placeholder:text-slate-300"
                    required
                  />
                </div>

                {/* 3. Email */}
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-semibold text-[#0f4e57] mb-2 uppercase tracking-wide opacity-80 group-focus-within:opacity-100 group-focus-within:text-[#00bdb3] transition-colors">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full bg-transparent border-0 border-b-2 border-[#bfeeea] focus:border-[#00bdb3] outline-none py-3 text-lg transition-colors placeholder:text-slate-300"
                    required
                  />
                </div>

                {/* 4. Global Phone Number */}
                <div className="group">
                  <label htmlFor="phoneNumber" className="block text-sm font-semibold text-[#0f4e57] mb-2 uppercase tracking-wide opacity-80 group-focus-within:opacity-100 group-focus-within:text-[#00bdb3] transition-colors">
                    Phone Number
                  </label>
                  <div className="flex gap-4">
                    <div className="w-[120px]">
                      <select
                        aria-label="Country Code"
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                        className="w-full bg-transparent border-0 border-b-2 border-[#bfeeea] focus:border-[#00bdb3] outline-none py-3 text-lg transition-colors text-slate-700 cursor-pointer rounded-none appearance-none"
                        style={{ backgroundImage: 'none' }} 
                      >
                        <option value="+1">🇺🇸 +1</option>
                        <option value="+44">🇬🇧 +44</option>
                        <option value="+1">🇨🇦 +1</option>
                        <option value="+61">🇦🇺 +61</option>
                        <option value="+49">🇩🇪 +49</option>
                        <option value="+33">🇫🇷 +33</option>
                        <option value="+91">🇮🇳 +91</option>
                        <option value="+86">🇨🇳 +86</option>
                        <option value="+81">🇯🇵 +81</option>
                        <option value="+971">🇦🇪 +971</option>
                        <option value="+234">🇳🇬 +234</option>
                        <option value="+27">🇿🇦 +27</option>
                        <option value="+55">🇧🇷 +55</option>
                        <option value="+52">🇲🇽 +52</option>
                        <option value="+82">🇰🇷 +82</option>
                        <option value="+65">🇸🇬 +65</option>
                      </select>
                    </div>
                    <div className="flex-1">
                      <input
                        id="phoneNumber"
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="555-0123"
                        className="w-full bg-transparent border-0 border-b-2 border-[#bfeeea] focus:border-[#00bdb3] outline-none py-3 text-lg transition-colors placeholder:text-slate-300"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* 5. Password */}
                <div className="group">
                  <label htmlFor="password" className="block text-sm font-semibold text-[#0f4e57] mb-2 uppercase tracking-wide opacity-80 group-focus-within:opacity-100 group-focus-within:text-[#00bdb3] transition-colors">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full bg-transparent border-0 border-b-2 border-[#bfeeea] focus:border-[#00bdb3] outline-none py-3 text-lg transition-colors placeholder:text-slate-300"
                    required
                  />
                </div>

                {/* 6. Confirm Password */}
                <div className="group">
                  <label htmlFor="confirmPassword" className="block text-sm font-semibold text-[#0f4e57] mb-2 uppercase tracking-wide opacity-80 group-focus-within:opacity-100 group-focus-within:text-[#00bdb3] transition-colors">
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full bg-transparent border-0 border-b-2 border-[#bfeeea] focus:border-[#00bdb3] outline-none py-3 text-lg transition-colors placeholder:text-slate-300"
                    required
                  />
                </div>

                {/* Section Break for Crypto Info */}
                <div className="col-span-1 md:col-span-2 mt-4 mb-2">
                  <h3 className="text-xl font-bold text-[#004767] border-b border-gray-100 pb-2">
                    Wallet Details
                  </h3>
                </div>

                {/* 7. USDT TRC20 Account */}
                <div className="group col-span-1 md:col-span-2">
                  <label htmlFor="usdtAddress" className="block text-sm font-semibold text-[#0f4e57] mb-2 uppercase tracking-wide opacity-80 group-focus-within:opacity-100 group-focus-within:text-[#00bdb3] transition-colors">
                    Your USDT (TRC20) Account
                  </label>
                  <input
                    id="usdtAddress"
                    type="text"
                    name="usdtAddress"
                    value={formData.usdtAddress}
                    onChange={handleChange}
                    placeholder="T..."
                    className="w-full bg-transparent border-0 border-b-2 border-[#bfeeea] focus:border-[#00bdb3] outline-none py-3 text-lg font-mono text-slate-700 transition-colors placeholder:text-slate-300"
                  />
                  <p className="text-xs text-slate-400 mt-1">Please ensure this is a valid TRON network address.</p>
                </div>

                {/* 8. Bitcoin Account */}
                <div className="group col-span-1 md:col-span-2">
                  <label htmlFor="btcAddress" className="block text-sm font-semibold text-[#0f4e57] mb-2 uppercase tracking-wide opacity-80 group-focus-within:opacity-100 group-focus-within:text-[#00bdb3] transition-colors">
                    Your Bitcoin Account
                  </label>
                  <input
                    id="btcAddress"
                    type="text"
                    name="btcAddress"
                    value={formData.btcAddress}
                    onChange={handleChange}
                    placeholder="bc1..."
                    className="w-full bg-transparent border-0 border-b-2 border-[#bfeeea] focus:border-[#00bdb3] outline-none py-3 text-lg font-mono text-slate-700 transition-colors placeholder:text-slate-300"
                  />
                </div>

              </div>

              {/* Links */}
              <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
                {/* Use <Link href="/login"> in Next.js */}
                <a
                  href="/login"
                  className="text-sm text-[#0f4e57] hover:text-[#007a75] transition-colors">
                  Already have an account? <strong>Log In</strong>
                </a>
              </div>

              {/* Submit Button */}
              <div className="mt-10">
                <button
                  type="submit"
                  className="inline-block w-full md:w-auto bg-[#05c6bd] hover:bg-[#00b2a7] hover:-translate-y-0.5 transition-all text-white font-bold text-lg px-10 py-4 rounded-md shadow-lg shadow-[#05c6bd]/30">
                  Create Account
                </button>
              </div>
            </form>
          </div>

          {/* Investment Sidebar */}
          <div className="hidden lg:block col-span-4 pl-12 border-l border-slate-100 h-full">
            <div className="sticky top-12">
                <h3 className="text-xl font-bold text-[#004767] mb-4">Why Invest With Us?</h3>
                <ul className="space-y-6">
                    <li className="flex items-start gap-3">
                        <div className="mt-1 w-2 h-2 rounded-full bg-[#00bdb3]"></div>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            <strong className="block text-[#0f4e57]">High ROI Potential</strong>
                            Capitalize on emerging digital assets and maximize your investment returns in a volatile market.
                        </p>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="mt-1 w-2 h-2 rounded-full bg-[#00bdb3]"></div>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            <strong className="block text-[#0f4e57]">Global Diversification</strong>
                            Hedge against local market fluctuations by diversifying your portfolio with decentralized currencies.
                        </p>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="mt-1 w-2 h-2 rounded-full bg-[#00bdb3]"></div>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            <strong className="block text-[#0f4e57]">Staking Rewards</strong>
                            Earn passive income on your holdings through our secure, high-yield staking and liquidity pools.
                        </p>
                    </li>
                </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
