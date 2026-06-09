"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Zap, Mail, Lock, User, Building2, ArrowRight, Check } from "lucide-react";

export default function SignupPage() {
  const router = useRouter();
  const handleSignup = (e: React.FormEvent) => { e.preventDefault(); router.push("/onboarding"); };
  return (
    <div className="flex min-h-screen">
      <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center bg-gradient-to-br from-blue-600 to-violet-700">
        <div className="max-w-md px-8">
          <h3 className="text-3xl font-bold text-white">Start Your Free Trial</h3>
          <p className="mt-4 text-lg text-blue-100">No credit card required.</p>
          <div className="mt-8 space-y-3">
            {["AI-powered configuration", "Industry templates", "Unlimited users", "Full feature access"].map((f) => (
              <div key={f} className="flex items-center gap-3"><div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400"><Check className="h-3.5 w-3.5 text-emerald-900" /></div><span className="text-white">{f}</span></div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-sm">
          <Link href="/" className="flex items-center gap-3 mb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600"><Zap className="h-6 w-6 text-white" /></div>
            <span className="text-2xl font-bold text-gray-900">OmniCRM <span className="text-blue-600">AI</span></span>
          </Link>
          <h2 className="text-2xl font-bold text-gray-900">Create your account</h2>
          <form onSubmit={handleSignup} className="mt-8 space-y-5">
            <div><label className="mb-2 block text-sm font-medium text-gray-700">Full Name</label><div className="relative"><User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" /><input type="text" placeholder="John Doe" className="flex h-11 w-full rounded-xl border border-gray-200 pl-10 pr-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20" /></div></div>
            <div><label className="mb-2 block text-sm font-medium text-gray-700">Email</label><div className="relative"><Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" /><input type="email" placeholder="you@company.com" className="flex h-11 w-full rounded-xl border border-gray-200 pl-10 pr-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20" /></div></div>
            <div><label className="mb-2 block text-sm font-medium text-gray-700">Company</label><div className="relative"><Building2 className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" /><input type="text" placeholder="Your Company" className="flex h-11 w-full rounded-xl border border-gray-200 pl-10 pr-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20" /></div></div>
            <div><label className="mb-2 block text-sm font-medium text-gray-700">Password</label><div className="relative"><Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" /><input type="password" placeholder="Create password" className="flex h-11 w-full rounded-xl border border-gray-200 pl-10 pr-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20" /></div></div>
            <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3 text-sm font-semibold text-white shadow-md">Create Account<ArrowRight className="h-4 w-4" /></button>
          </form>
          <p className="mt-8 text-center text-sm text-gray-600">Already have an account? <Link href="/login" className="font-semibold text-blue-600">Sign in</Link></p>
        </div>
      </div>
    </div>
  );
}
