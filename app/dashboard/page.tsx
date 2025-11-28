"use client";

import React, { useEffect, useState } from "react";

interface User {
  fullName: string;
  email: string;
  username: string;
}

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Get user data from localStorage
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[#004767] mb-2">
          Welcome, {user?.fullName || "User"}! 👋
        </h1>
        <p className="text-gray-600">
          Here's an overview of your investment portfolio and account status.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Total Balance */}
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#05c6bd]">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-gray-600 text-sm mb-1">Total Balance</p>
              <p className="text-3xl font-bold text-[#004767]">$0.00</p>
            </div>
            <div className="bg-[#05c6bd]/10 p-3 rounded-lg">
              <svg
                className="w-6 h-6 text-[#05c6bd]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
          <p className="text-xs text-gray-500">Including all investments</p>
        </div>

        {/* Active Investments */}
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-gray-600 text-sm mb-1">Active Investments</p>
              <p className="text-3xl font-bold text-[#004767]">0</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <svg
                className="w-6 h-6 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7H6v10m0 0H5a2 2 0 01-2-2V9m0 0h18a2 2 0 012 2v8a2 2 0 01-2 2h-1m0 0V9a2 2 0 00-2-2m2 2v10a2 2 0 01-2 2m0 0H9"
                />
              </svg>
            </div>
          </div>
          <p className="text-xs text-gray-500">Currently active</p>
        </div>

        {/* Monthly Returns */}
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-gray-600 text-sm mb-1">Monthly Returns</p>
              <p className="text-3xl font-bold text-[#004767]">+0%</p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <svg
                className="w-6 h-6 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
          </div>
          <p className="text-xs text-gray-500">This month</p>
        </div>

        {/* Account Status */}
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-gray-600 text-sm mb-1">Account Status</p>
              <p className="text-3xl font-bold text-green-600">Active</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <svg
                className="w-6 h-6 text-purple-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
          <p className="text-xs text-gray-500">All systems operational</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-[#004767] mb-4">
            Recent Activity
          </h2>
          <div className="space-y-4">
            <div className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-[#05c6bd]/10 rounded-full flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-[#05c6bd]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-800">Account Created</p>
                <p className="text-sm text-gray-500">
                  Welcome to our platform!
                </p>
              </div>
              <p className="text-xs text-gray-400">Just now</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-[#004767] mb-4">
            Quick Actions
          </h2>
          <div className="space-y-3">
            <button className="w-full bg-[#05c6bd] hover:bg-[#00b2a7] text-white font-medium py-3 px-4 rounded-lg transition duration-200">
              Start Investing
            </button>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition duration-200">
              View Portfolio
            </button>
            <button className="w-full bg-gray-500 hover:bg-gray-600 text-white font-medium py-3 px-4 rounded-lg transition duration-200">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
