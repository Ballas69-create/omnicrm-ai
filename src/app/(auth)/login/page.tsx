"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Zap, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { router.push("/dashboard"); }, 800);
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex flex-1 flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-sm">
          <Link href="/" className="flex items-center gap-3 mb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600"><Zap className="h-6 w-6 text-white" /></div>
            <span className="text-2xl font-bold text-gray-900">OmniCRM <span className="text-blue-600">AI</span></span>
          </Link>
          <h2 className="text-2xl font-bold text-gray-900">Welcome back</h2>
          <p className="mt-2 text-sm text-gray-600">Sign in to your account</p>
          <form onSubmit={handleLogin} className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="flex h-11 w-full rounded-xl border border-gray-200 pl-10 pr-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20" />
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input type={showPw ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" className="flex h-11 w-full rounded-xl border border-gray-200 pl-10 pr-10 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20" />
                <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">{showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}</button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-gray-600"><input type="checkbox" className="h-4 w-4 rounded border-gray-300" />Remember me</label>
              <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-700">Forgot password?</a>
            </div>
            <button type="submit" disabled={loading} className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3 text-sm font-semibold text-white shadow-md hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 transition-all">
              {loading ? <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg> : <><span>Sign in</span><ArrowRight className="h-4 w-4" /></>}
            </button>
          </form>
          <p className="mt-8 text-center text-sm text-gray-600">Don't have an account? <Link href="/signup" className="font-semibold text-blue-600 hover:text-blue-700">Start free trial</Link></p>
        </div>
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center bg-gradient-to-br from-blue-600 to-violet-700">
        <div className="max-w-md px-8 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm"><Zap className="h-10 w-10 text-white" /></div>
          <h3 className="text-3xl font-bold text-white">One Platform for Everything</h3>
          <p className="mt-4 text-lg text-blue-100">CRM, ERP, HR, Projects, Support, and Analytics — all powered by AI.</p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[{ l: "Businesses", v: "10,000+" }, { l: "Industries", v: "50+" }, { l: "Uptime", v: "99.9%" }, { l: "Rating", v: "4.9/5" }].map((s) => (
              <div key={s.l} className="rounded-xl bg-white/10 p-4"><p className="text-2xl font-bold text-white">{s.v}</p><p className="text-sm text-blue-200">{s.l}</p></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
