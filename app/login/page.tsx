// app/login/page.jsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SignupBanner from "../component/web/SignupBanner";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: replace with real auth call
    console.log("login attempt:", { email, password });

    // Example: navigate to dashboard on success
    // (change target route to wherever you want)
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SignupBanner />
      <div className="max-w-6xl mx-auto px-8 py-20">
        <div className="grid grid-cols-12 gap-8 items-start">
          <div className="col-span-12 md:col-span-8">
            <div className="col-span-12 md:col-span-4 mb-8">
              <h1 className="text-4xl font-extrabold text-[#004767]">Login</h1>
            </div>
            <form onSubmit={handleSubmit} className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 items-end">
                {/* Email / Username */}
                <div>
                  <label className="block text-sm text-[#0f4e57] mb-4">
                    Username
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full bg-transparent border-0 border-b-2 border-[#bfeeea] focus:border-[#00bdb3] outline-none py-2 text-base"
                    required
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm text-[#0f4e57] mb-4">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-transparent border-0 border-b-2 border-[#bfeeea] focus:border-[#00bdb3] outline-none py-2 text-base"
                    required
                  />
                </div>
              </div>

              {/* small spacing, forgot link */}
              <div className="mt-6 flex items-center justify-between">
                <a
                  href="/forgot-password"
                  className="text-sm text-[#0f4e57] underline hover:text-[#007a75]">
                  Forgot Password?
                </a>
                <a
                  href="/signup"
                  className="text-sm text-[#0f4e57]  hover:text-[#007a75]">
                  Do not have an account? <strong>Sign up</strong>
                </a>
              </div>

              {/* Login button (placed visually left as in screenshot) */}
              <div className="mt-8">
                <button
                  type="submit"
                  className="inline-block bg-[#05c6bd] hover:bg-[#00b2a7] text-white font-medium px-6 py-3 rounded-md shadow-md">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
