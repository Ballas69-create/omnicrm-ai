"use client";
import React from "react";
import Link from "next/link";
import {
  Zap, ArrowRight, Check, Star, Shield, Globe, Bot, BarChart3, Users, Workflow,
  Sparkles, ChevronRight, Play, Building2, Truck, Factory, ShoppingBag, ShoppingCart,
  Home, Heart, Hotel, GraduationCap, Scale, Calculator, ShieldCheck, Car, UserSearch,
  Megaphone, Monitor, Landmark, Wifi, Pickaxe, Wheat, Plane, Lock, Building,
  Stethoscope, UtensilsCrossed, Store, Phone, Briefcase,
} from "lucide-react";

const features = [
  { icon: Bot, title: "AI-Powered Automation", description: "Let AI handle routine tasks, generate insights, and automate workflows.", gradient: "from-violet-500 to-purple-600" },
  { icon: Sparkles, title: "Self-Configuring Platform", description: "Tell us about your business and watch the CRM build itself.", gradient: "from-blue-500 to-cyan-600" },
  { icon: BarChart3, title: "Advanced Analytics", description: "Real-time dashboards, predictive analytics, and AI-driven insights.", gradient: "from-emerald-500 to-teal-600" },
  { icon: Workflow, title: "Visual Workflow Builder", description: "Drag-and-drop automation with triggers, conditions, and actions.", gradient: "from-amber-500 to-orange-600" },
  { icon: Users, title: "360° Customer View", description: "Complete profiles with interactions, deals, and history.", gradient: "from-pink-500 to-rose-600" },
  { icon: Shield, title: "Enterprise Security", description: "SOC 2 compliant, role-based access, SSO, multi-tenant architecture.", gradient: "from-slate-600 to-gray-800" },
];

const industries = [
  { name: "Construction", icon: Building2, color: "bg-orange-100 text-orange-600" },
  { name: "Logistics", icon: Truck, color: "bg-blue-100 text-blue-600" },
  { name: "Manufacturing", icon: Factory, color: "bg-gray-100 text-gray-600" },
  { name: "Retail", icon: ShoppingBag, color: "bg-pink-100 text-pink-600" },
  { name: "E-Commerce", icon: ShoppingCart, color: "bg-violet-100 text-violet-600" },
  { name: "Real Estate", icon: Home, color: "bg-emerald-100 text-emerald-600" },
  { name: "Healthcare", icon: Heart, color: "bg-red-100 text-red-600" },
  { name: "Hospitality", icon: Hotel, color: "bg-amber-100 text-amber-600" },
  { name: "Education", icon: GraduationCap, color: "bg-indigo-100 text-indigo-600" },
  { name: "Legal", icon: Scale, color: "bg-slate-100 text-slate-600" },
  { name: "Accounting", icon: Calculator, color: "bg-green-100 text-green-600" },
  { name: "Insurance", icon: ShieldCheck, color: "bg-teal-100 text-teal-600" },
  { name: "Automotive", icon: Car, color: "bg-red-100 text-red-600" },
  { name: "Recruitment", icon: UserSearch, color: "bg-cyan-100 text-cyan-600" },
  { name: "Marketing", icon: Megaphone, color: "bg-fuchsia-100 text-fuchsia-600" },
  { name: "IT Services", icon: Monitor, color: "bg-blue-100 text-blue-600" },
  { name: "Government", icon: Landmark, color: "bg-slate-100 text-slate-600" },
  { name: "Telecom", icon: Wifi, color: "bg-sky-100 text-sky-600" },
  { name: "Energy", icon: Zap, color: "bg-yellow-100 text-yellow-600" },
  { name: "Mining", icon: Pickaxe, color: "bg-stone-100 text-stone-600" },
  { name: "Agriculture", icon: Wheat, color: "bg-lime-100 text-lime-600" },
  { name: "Aviation", icon: Plane, color: "bg-sky-100 text-sky-600" },
  { name: "Security", icon: Lock, color: "bg-blue-100 text-blue-600" },
  { name: "Property", icon: Building, color: "bg-indigo-100 text-indigo-600" },
  { name: "Medical", icon: Stethoscope, color: "bg-blue-100 text-blue-600" },
  { name: "Restaurants", icon: UtensilsCrossed, color: "bg-orange-100 text-orange-600" },
  { name: "Franchises", icon: Store, color: "bg-purple-100 text-purple-600" },
  { name: "Call Centers", icon: Phone, color: "bg-blue-100 text-blue-600" },
  { name: "Services", icon: Briefcase, color: "bg-slate-100 text-slate-600" },
];

const stats = [
  { value: "10,000+", label: "Businesses" },
  { value: "50+", label: "Industries" },
  { value: "99.9%", label: "Uptime" },
  { value: "4.9/5", label: "Rating" },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 shadow-lg shadow-blue-500/25"><Zap className="h-5 w-5 text-white" /></div>
            <span className="text-xl font-bold text-gray-900">OmniCRM <span className="text-blue-600">AI</span></span>
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm font-medium text-gray-600 hover:text-gray-900">Features</a>
            <a href="#industries" className="text-sm font-medium text-gray-600 hover:text-gray-900">Industries</a>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login" className="rounded-xl px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">Sign In</Link>
            <Link href="/signup" className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-500/25 hover:from-blue-700 hover:to-blue-800">Get Started Free</Link>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-white" />
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[1200px] rounded-full bg-gradient-to-b from-blue-100/40 to-transparent blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
            <Sparkles className="h-4 w-4" /> AI-Powered CRM for Every Industry
          </div>
          <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            One CRM Platform That <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">Adapts to Your Business</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl">
            Tell us about your business. Our AI builds the perfect CRM — with the right modules, workflows, dashboards, and automations for your industry.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/onboarding" className="group flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-blue-500/25 hover:from-blue-700 hover:to-blue-800">
              Start Free Trial <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <button className="group flex items-center gap-2 rounded-2xl border-2 border-gray-200 bg-white px-8 py-4 text-lg font-semibold text-gray-700 hover:border-gray-300 hover:bg-gray-50">
              <Play className="h-5 w-5 text-blue-600" /> Watch Demo
            </button>
          </div>
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-2 gap-8 sm:max-w-xl sm:grid-cols-4">
            {stats.map((s) => <div key={s.label} className="text-center"><p className="text-3xl font-bold text-gray-900">{s.value}</p><p className="mt-1 text-sm text-gray-500">{s.label}</p></div>)}
          </div>
        </div>
      </section>

      <section id="features" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Everything You Need, Built by AI</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">Our AI analyzes your business and automatically creates the perfect CRM configuration.</p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="group rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:border-gray-300 hover:shadow-xl">
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${f.gradient} shadow-lg group-hover:scale-105`}><f.icon className="h-7 w-7 text-white" /></div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">{f.title}</h3>
                <p className="mt-3 text-gray-600">{f.description}</p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-blue-600">Learn more<ChevronRight className="h-4 w-4" /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="industries" className="bg-gray-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Built for 30+ Industries</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">Pre-configured templates with the right modules, workflows, and dashboards.</p>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {industries.map((ind) => (
              <div key={ind.name} className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 shadow-sm hover:shadow-md">
                <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${ind.color}`}><ind.icon className="h-4 w-4" /></div>
                <span className="text-sm font-medium text-gray-700">{ind.name}</span>
              </div>
            ))}
            <div className="flex items-center gap-2 rounded-xl border-2 border-dashed border-gray-300 bg-white px-4 py-2.5">
              <span className="text-sm font-medium text-gray-500">+ Custom Industry</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Up and Running in Minutes</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">Three simple steps to your fully configured AI-powered CRM.</p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {[
              { step: "01", title: "Tell Us About Your Business", desc: "Enter your company details, industry, services, and team structure." },
              { step: "02", title: "AI Configures Everything", desc: "Our AI analyzes your business and generates the perfect CRM setup." },
              { step: "03", title: "Start Using Your CRM", desc: "Your custom CRM is ready with all modules, workflows, and dashboards." },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 text-2xl font-bold text-white shadow-lg">{s.step}</div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">{s.title}</h3>
                <p className="mt-3 text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center"><h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Loved by Businesses Worldwide</h2></div>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              { name: "Sarah Chen", role: "CEO, TechStart", content: "OmniCRM AI transformed our sales process. AI automation saved us 20 hours per week.", rating: 5 },
              { name: "Michael Rodriguez", role: "Operations Director", content: "We deployed the logistics module in minutes. Fleet management ready to go.", rating: 5 },
              { name: "Dr. Emily Watson", role: "Practice Manager", content: "The healthcare module understood our needs perfectly. Patient management made easy.", rating: 5 },
            ].map((t) => (
              <div key={t.name} className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <div className="flex gap-1">{Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />)}</div>
                <p className="mt-4 text-gray-600">“{t.content}”</p>
                <div className="mt-6"><p className="font-semibold text-gray-900">{t.name}</p><p className="text-sm text-gray-500">{t.role}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-violet-600 p-12 text-center sm:p-16">
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -left-20 -bottom-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to Transform Your Business?</h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-blue-100">Join thousands of businesses using OmniCRM AI.</p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/onboarding" className="group flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-blue-600 shadow-xl hover:bg-blue-50">
                  Start Free Trial <ArrowRight className="h-5 w-5 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-200 bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600"><Zap className="h-5 w-5 text-white" /></div>
                <span className="text-xl font-bold text-gray-900">OmniCRM AI</span>
              </div>
              <p className="mt-4 text-sm text-gray-600">The AI-powered CRM platform that adapts to any business.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Product</h4>
              <ul className="mt-4 space-y-2 text-sm text-gray-600"><li>Features</li><li>Pricing</li><li>Integrations</li><li>API</li></ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Company</h4>
              <ul className="mt-4 space-y-2 text-sm text-gray-600"><li>About</li><li>Blog</li><li>Careers</li><li>Contact</li></ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Legal</h4>
              <ul className="mt-4 space-y-2 text-sm text-gray-600"><li>Privacy</li><li>Terms</li><li>Security</li></ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8 text-center text-sm text-gray-500">© 2024 OmniCRM AI. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
