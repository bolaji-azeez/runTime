"use client";
import { useState } from "react";
import React from "react";
import logo from "../../public/logo.png";
import Image from "next/image";

const Header = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileSupportOpen, setMobileSupportOpen] = useState(false);

  return (
    <header className="bg-[#004767] shadow-md relative">
      {/* Top Logo Section */}
      <div className="text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">
              <Image src={logo} alt="Logo" className="h-8" />
            </div>

            {/* Mobile Hamburger Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white p-2 hover:bg-[#003955] rounded-md transition duration-300">
                <svg
                  className="w-6 h-6 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      mobileMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <nav className="container mx-auto px-4 py-3">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-start justify-end">
          <div className="flex items-center space-x-8">
            <a
              href="#"
              className="text-white hover:text-blue-300 font-medium transition duration-200">
              HOME
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-300 font-medium transition duration-200">
              WHOWEARE
            </a>

            {/* SERVICES Dropdown */}
            <div className="relative">
              <button
                className="text-white hover:text-blue-300 font-medium transition duration-200 flex items-center"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}>
                SERVICES
                <svg
                  className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`absolute top-full right-0 left-auto mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-200 transition-all duration-300 transform ${
                  servicesOpen
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }`}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-200">
                  Investment Planning
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-200">
                  Portfolio Management
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-200">
                  Financial Advisory
                </a>
              </div>
            </div>

            {/* SUPPORT Dropdown */}
            <div className="relative">
              <button
                className="text-white hover:text-blue-300 font-medium transition duration-200 flex items-center"
                onMouseEnter={() => setSupportOpen(true)}
                onMouseLeave={() => setSupportOpen(false)}>
                SUPPORT
                <svg
                  className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                    supportOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`absolute top-full right-0 left-auto mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-200 transition-all duration-300 transform ${
                  supportOpen
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }`}
                onMouseEnter={() => setSupportOpen(true)}
                onMouseLeave={() => setSupportOpen(false)}>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-200">
                  Help Center
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-200">
                  Contact Us
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-200">
                  FAQ
                </a>
              </div>
            </div>

            <a
              href="#"
              className="text-white hover:text-blue-300 font-medium transition duration-200">
              PLANS
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-300 font-medium transition duration-200">
              LOGIN
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-300 font-medium transition duration-200">
              SIGNUP
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown with Wrap Transition */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 overflow-hidden ${
          mobileMenuOpen ? "animate-dropdown-open" : "animate-dropdown-close"
        }`}>
        <div className="container mx-auto">
          {/* Main Navigation Items */}
          <div className="space-y-0">
            <a
              href="#"
              className="flex items-center px-4 h-14 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition duration-200 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}>
              HOME
            </a>
            <a
              href="#"
              className="flex items-center px-4 h-14 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition duration-200 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}>
              WHO WE ARE
            </a>

            {/* Mobile SERVICES Dropdown */}
            <div className="border-b border-gray-100">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex justify-between items-center w-full px-4 h-14 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition duration-200">
                <span>SERVICES</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  mobileServicesOpen
                    ? "max-h-36 opacity-100"
                    : "max-h-0 opacity-0"
                }`}>
                <a
                  href="#"
                  className="flex items-center px-6 h-12 text-sm text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition duration-200 border-b border-gray-50"
                  onClick={() => setMobileMenuOpen(false)}>
                  Investment Planning
                </a>
                <a
                  href="#"
                  className="flex items-center px-6 h-12 text-sm text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition duration-200 border-b border-gray-50"
                  onClick={() => setMobileMenuOpen(false)}>
                  Portfolio Management
                </a>
                <a
                  href="#"
                  className="flex items-center px-6 h-12 text-sm text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition duration-200"
                  onClick={() => setMobileMenuOpen(false)}>
                  Financial Advisory
                </a>
              </div>
            </div>

            {/* Mobile SUPPORT Dropdown */}
            <div className="border-b border-gray-100">
              <button
                onClick={() => setMobileSupportOpen(!mobileSupportOpen)}
                className="flex justify-between items-center w-full px-4 h-14 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition duration-200">
                <span>SUPPORT</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    mobileSupportOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  mobileSupportOpen
                    ? "max-h-36 opacity-100"
                    : "max-h-0 opacity-0"
                }`}>
                <a
                  href="#"
                  className="flex items-center px-6 h-12 text-sm text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition duration-200 border-b border-gray-50"
                  onClick={() => setMobileMenuOpen(false)}>
                  Help Center
                </a>
                <a
                  href="#"
                  className="flex items-center px-6 h-12 text-sm text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition duration-200 border-b border-gray-50"
                  onClick={() => setMobileMenuOpen(false)}>
                  Contact Us
                </a>
                <a
                  href="#"
                  className="flex items-center px-6 h-12 text-sm text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition duration-200"
                  onClick={() => setMobileMenuOpen(false)}>
                  FAQ
                </a>
              </div>
            </div>

            <a
              href="#"
              className="flex items-center px-4 h-14 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition duration-200 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}>
              PLANS
            </a>
          </div>

          {/* Auth Options */}
          <div className="border-t border-gray-200">
            <a
              href="#"
              className="flex items-center px-4 h-14 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition duration-200 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}>
              LOGIN
            </a>
            <a
              href="#"
              className="flex items-center px-4 h-14 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition duration-200"
              onClick={() => setMobileMenuOpen(false)}>
              SIGNUP
            </a>
          </div>
        </div>
      </div>

      {/* Add custom animations to your global CSS */}
      <style jsx>{`
        @keyframes dropdownOpen {
          0% {
            max-height: 0;
            opacity: 0;
            transform: scaleY(0.8) translateY(-10px);
          }
          50% {
            opacity: 0.7;
            transform: scaleY(0.95) translateY(-5px);
          }
          100% {
            max-height: 60vh;
            opacity: 1;
            transform: scaleY(1) translateY(0);
          }
        }

        @keyframes dropdownClose {
          0% {
            max-height: 60vh;
            opacity: 1;
            transform: scaleY(1) translateY(0);
          }
          50% {
            opacity: 0.7;
            transform: scaleY(0.95) translateY(-5px);
          }
          100% {
            max-height: 0;
            opacity: 0;
            transform: scaleY(0.8) translateY(-10px);
          }
        }

        .animate-dropdown-open {
          animation: dropdownOpen 0.4s ease-out forwards;
        }

        .animate-dropdown-close {
          animation: dropdownClose 0.3s ease-in forwards;
        }
      `}</style>
    </header>
  );
};

export default Header;
