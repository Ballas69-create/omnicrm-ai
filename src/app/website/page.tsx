"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Zap, ArrowRight, Check, Star, Shield, Globe, Bot, BarChart3, Users, Workflow,
  Sparkles, ChevronDown, Play, Building2, Truck, Factory, ShoppingBag,
  ShoppingCart, Home, Heart, Hotel, GraduationCap, Scale, Calculator, ShieldCheck,
  Car, UserSearch, Megaphone, Monitor, Landmark, Wifi, Pickaxe, Wheat, Plane, Lock,
  Building, Stethoscope, UtensilsCrossed, Store, Phone, Briefcase, Download,
  CheckCircle2, Menu, FileText, Target,
  DollarSign, Headphones, FolderKanban, UserCog, Package, GitBranch, Settings,
  Receipt, TrendingUp, MessageSquare, Clock, Layers, Cpu, Database, Cloud,
  Smartphone, Palette, Code2, Terminal, Rocket, Gauge, Eye, MousePointer,
  PieChart, Activity, Bell, Mail, Calendar, Inbox, AlertTriangle, Repeat,
  Send, Archive, Hash, Aperture, Crosshair, Bookmark, Clipboard, X,
} from "lucide-react";

const features = [
  { icon: Bot, title: "Your AI Sidekick That Actually Gets Stuff Done", description: "Stop drowning in busywork. Our AI reads your leads, writes your emails, builds your quotes, and tells you which deals are about to close before you even ask.", gradient: "from-violet-500 to-purple-600", stats: "Saves 20+ hrs/week" },
  { icon: Sparkles, title: "Tell It What You Do. It Builds Itself.", description: "Pick your industry. OmniCRM wires up every module, form, workflow, and dashboard you need automatically. No consultants. No code. No kidding.", gradient: "from-blue-500 to-cyan-600", stats: "Ready in 5 minutes" },
  { icon: BarChart3, title: "Numbers That Actually Mean Something", description: "Real-time dashboards that dont require a PhD to read. Revenue trends, pipeline health, team performance all at a glance with AI predictions baked in.", gradient: "from-emerald-500 to-teal-600", stats: "50+ chart types" },
  { icon: Workflow, title: "If This, Then That On Steroids", description: "Drag-and-drop automation that handles the boring stuff. New lead? Auto-assign, send welcome email, create follow-up task. All before your coffee gets cold.", gradient: "from-amber-500 to-orange-600", stats: "Unlimited workflows" },
  { icon: Users, title: "Every Touch, Every Deal, Every Moment", description: "360-degree customer profiles that tell the full story. Emails, calls, deals, support tickets, invoices all in one place so your team never drops the ball.", gradient: "from-pink-500 to-rose-600", stats: "Complete history" },
  { icon: Shield, title: "Fort Knox-Level Security", description: "SOC 2 compliant. Role-based permissions. SSO. Multi-tenant data isolation. Your data is yours period. We dont peek, we dont sell, we dont play games.", gradient: "from-slate-600 to-gray-800", stats: "99.99% uptime" },
];

const modules = [
  { icon: Users, name: "CRM and Leads", desc: "Capture, score, and convert leads with AI-powered insights", color: "from-blue-500 to-blue-600" },
  { icon: Target, name: "Sales Pipeline", desc: "Visual kanban boards with drag-and-drop deal management", color: "from-purple-500 to-purple-600" },
  { icon: Megaphone, name: "Marketing", desc: "Email, SMS, and WhatsApp campaigns with smart segmentation", color: "from-pink-500 to-pink-600" },
  { icon: Headphones, name: "Support and Tickets", desc: "SLA tracking, live chat, and AI-powered ticket routing", color: "from-rose-500 to-rose-600" },
  { icon: FolderKanban, name: "Project Management", desc: "Tasks, milestones, Gantt charts, and resource planning", color: "from-amber-500 to-amber-600" },
  { icon: DollarSign, name: "Finance and Invoicing", desc: "Quotes, invoices, expenses, purchase orders all connected", color: "from-emerald-500 to-emerald-600" },
  { icon: UserCog, name: "HR and Teams", desc: "Employees, leave, payroll, performance reviews, org charts", color: "from-teal-500 to-teal-600" },
  { icon: Package, name: "Inventory", desc: "Stock levels, suppliers, warehouses, reorder alerts", color: "from-orange-500 to-orange-600" },
  { icon: Bot, name: "AI Assistant", desc: "Chat with your data. Create records. Generate reports. Just ask.", color: "from-violet-500 to-violet-600" },
  { icon: GitBranch, name: "Workflows", desc: "Visual automation builder with triggers, conditions, actions", color: "from-cyan-500 to-cyan-600" },
  { icon: FileText, name: "Documents", desc: "Contracts, templates, e-signatures, and document automation", color: "from-slate-500 to-slate-600" },
  { icon: PieChart, name: "Analytics and BI", desc: "Custom dashboards, KPIs, forecasting, and AI insights", color: "from-indigo-500 to-indigo-600" },
];

const industries = [
  { name: "Construction", icon: "🏗️" }, { name: "Logistics", icon: "🚛" }, { name: "Manufacturing", icon: "🏭" }, { name: "Retail", icon: "🛍️" }, { name: "E-Commerce", icon: "🛒" }, { name: "Real Estate", icon: "🏠" }, { name: "Healthcare", icon: "🏥" }, { name: "Hospitality", icon: "🏨" }, { name: "Education", icon: "🎓" }, { name: "Legal", icon: "⚖️" }, { name: "Accounting", icon: "📊" }, { name: "Insurance", icon: "🛡️" }, { name: "Automotive", icon: "🚗" }, { name: "Recruitment", icon: "👥" }, { name: "Marketing", icon: "📢" }, { name: "IT Services", icon: "💻" }, { name: "Government", icon: "🏛️" }, { name: "NGO", icon: "🌍" }, { name: "Telecom", icon: "📡" }, { name: "Energy", icon: "⚡" }, { name: "Mining", icon: "⛏️" }, { name: "Agriculture", icon: "🌾" }, { name: "Aviation", icon: "✈️" }, { name: "Security", icon: "🔐" }, { name: "Property", icon: "🏢" }, { name: "Medical", icon: "🩺" }, { name: "Restaurants", icon: "🍽️" }, { name: "Franchises", icon: "🏪" }, { name: "Call Centers", icon: "📞" }, { name: "Services", icon: "💼" },
];

const aiFeatures = [
  { icon: TrendingUp, title: "Predictive Sales", desc: "AI predicts which deals will close, when, and for how much" },
  { icon: Crosshair, title: "Lead Scoring", desc: "Automatically ranks leads by conversion probability" },
  { icon: AlertTriangle, title: "Churn Prediction", desc: "Spots at-risk customers before they leave" },
  { icon: MessageSquare, title: "Sentiment Analysis", desc: "Reads the mood in emails, chats, and reviews" },
  { icon: Repeat, title: "Next Best Action", desc: "AI recommends what to do next for every deal" },
  { icon: Send, title: "Smart Compose", desc: "Writes emails, quotes, and follow-ups in your voice" },
];

const testimonials = [
  { name: "Sarah Chen", role: "CEO, TechStart", avatar: "SC", content: "We replaced 4 different tools with OmniCRM. The AI assistant alone saves our team 20 hours a week. It is not even close.", rating: 5, metric: "3x faster sales cycle" },
  { name: "Marcus Rivera", role: "Ops Director, FastTrack Logistics", avatar: "MR", content: "We deployed the logistics module on a Monday. By Tuesday, our fleet tracking, route planning, and driver management were all live. Unreal.", rating: 5, metric: "40% fewer delays" },
  { name: "Dr. Priya Patel", role: "Practice Manager, HealthFirst", avatar: "PP", content: "Patient scheduling, medical records, billing everything just works. Our staff stopped complaining about the software for the first time ever.", rating: 5, metric: "98% satisfaction" },
  { name: "James O'Brien", role: "Founder, BuildRight Construction", avatar: "JO", content: "BOQs, progress claims, site management it handles our entire construction workflow. I do not know how we ran projects before this.", rating: 5, metric: "25% under budget" },
];

const pricingPlans = [
  { name: "Starter", price: "R0", period: "forever", desc: "For solo operators getting started", features: ["Up to 3 users", "5,000 contacts", "Basic CRM", "Email support", "1 GB storage"], cta: "Start Free", popular: false },
  { name: "Professional", price: "R199", period: "/user/mo", desc: "For growing teams that mean business", features: ["Unlimited users", "500,000 contacts", "All modules", "AI Assistant", "Workflows", "Priority support", "200 GB storage", "Custom branding"], cta: "Start Free Trial", popular: true },
  { name: "Enterprise", price: "R499", period: "/user/mo", desc: "For organizations that need it all", features: ["Everything in Pro", "Unlimited contacts", "White label", "Custom domain", "SSO/SAML", "Dedicated support", "Unlimited storage", "API access", "SLA guarantee"], cta: "Contact Sales", popular: false },
];

const faqs = [
  { q: "How fast can I get up and running?", a: "Most teams are live within 5 minutes. Tell us your industry, and we auto-configure everything modules, workflows, dashboards, the works. No coding, no consultants, no 6-month implementations." },
  { q: "Can I switch from Salesforce, HubSpot, or Zoho?", a: "Absolutely. We have one-click import tools for all major CRMs. Your contacts, deals, history, and custom fields come over cleanly. Most migrations take under an hour." },
  { q: "Is my data actually secure?", a: "SOC 2 Type II certified. Your data is encrypted at rest and in transit. Multi-tenant isolation means other companies can never see your stuff. We do regular penetration testing and have a 99.99% uptime track record." },
  { q: "What if my industry is not listed?", a: "Pick Custom Industry during onboarding. Our AI analyzes your business and generates a tailored configuration from scratch. It learns your terminology, your processes, your KPIs." },
  { q: "Can I use it offline?", a: "The desktop apps (Mac, Windows, Linux) have full offline mode. Work without internet, and everything syncs automatically when you are back online." },
  { q: "Is there an API?", a: "Full REST and GraphQL API on Professional and Enterprise plans. Webhooks, real-time events, and SDKs for JavaScript, Python, Ruby, and PHP." },
];

function PricingCard({ plan }: { plan: typeof pricingPlans[0] }) {
  return (
    <div className={`relative rounded-3xl border-2 p-8 transition-all hover:shadow-2xl \${plan.popular ? "border-blue-500 bg-white shadow-xl shadow-blue-500/10 lg:scale-105" : "border-gray-200 bg-white hover:border-gray-300"}`}>
      {plan.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-1.5 text-sm font-bold text-white shadow-lg">Most Popular</div>}
      <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
      <p className="mt-1 text-sm text-gray-500">{plan.desc}</p>
      <div className="mt-6 flex items-baseline gap-1">
        <span className="text-5xl font-extrabold text-gray-900">{plan.price}</span>
        {plan.period !== "forever" && <span className="text-lg text-gray-500">{plan.period}</span>}
      </div>
      <ul className="mt-8 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-center gap-3 text-sm text-gray-700">
            <Check className="h-5 w-5 flex-shrink-0 text-emerald-500" />
            {f}
          </li>
        ))}
      </ul>
      <button className={`mt-8 w-full rounded-xl py-3.5 text-sm font-bold transition-all \${plan.popular ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/25 hover:from-blue-700 hover:to-blue-800" : "border-2 border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50"}`}>
        {plan.cta}
      </button>
    </div>
  );
}

function FAQItem({ faq }: { faq: typeof faqs[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between py-5 text-left">
        <span className="text-lg font-semibold text-gray-900">{faq.q}</span>
        <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform \${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="pb-5 text-gray-600 leading-relaxed">{faq.a}</p>}
    </div>
  );
}

export default function WebsitePage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className={`fixed top-0 z-50 w-full transition-all duration-300 \${scrolled ? "border-b border-gray-100 bg-white/90 backdrop-blur-xl shadow-sm" : "bg-transparent"}`}>
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 shadow-lg shadow-blue-500/25"><Zap className="h-5 w-5 text-white" /></div>
            <span className="text-xl font-bold text-gray-900">OmniCRM <span className="text-blue-600">AI</span></span>
          </Link>
          <div className="hidden items-center gap-8 lg:flex">
            {["Features", "Industries", "Pricing", "Download"].map((item) => (
              <a key={item} href={`#\${item.toLowerCase()}`} className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900">{item}</a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login" className="hidden rounded-xl px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 sm:block">Sign In</Link>
            <Link href="/signup" className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-500/25 transition-all hover:from-blue-700 hover:to-blue-800 hover:shadow-lg">Get Started</Link>
            <button onClick={() => setMobileMenu(!mobileMenu)} className="rounded-lg p-2 text-gray-500 lg:hidden"><Menu className="h-5 w-5" /></button>
          </div>
        </div>
        {mobileMenu && (
          <div className="border-t border-gray-100 bg-white px-4 py-4 lg:hidden">
            {["Features", "Industries", "Pricing", "Download"].map((item) => (
              <a key={item} href={`#\${item.toLowerCase()}`} onClick={() => setMobileMenu(false)} className="block py-2 text-sm font-medium text-gray-600">{item}</a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-20 sm:pt-32 sm:pb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 via-white to-white" />
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[1600px] rounded-full bg-gradient-to-b from-blue-100/60 via-violet-50/30 to-transparent blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-4 py-2 text-sm font-semibold text-blue-700 backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            <span>New: AI Workflow Builder just launched</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </div>
          <h1 className="mx-auto max-w-5xl text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl xl:text-8xl">
            The CRM That{" "}
            <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">Thinks For You</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-xl text-gray-600 leading-relaxed">
            Stop wrestling with software. OmniCRM AI reads your business, builds your workflows, and runs your operations so you can focus on closing deals, not configuring fields.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/signup" className="group flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 px-10 py-5 text-lg font-bold text-white shadow-2xl shadow-blue-500/30 transition-all hover:from-blue-700 hover:to-blue-800 hover:shadow-3xl">
              Start Free No Card Needed
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <a href="#features" className="group flex items-center gap-2 rounded-2xl border-2 border-gray-200 bg-white px-10 py-5 text-lg font-bold text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50">
              <Play className="h-5 w-5 text-blue-600" />
              See What It Does
            </a>
          </div>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400">
            {["10,000+ businesses", "50+ industries", "99.99% uptime", "SOC 2 certified", "GDPR compliant"].map((t) => (
              <span key={t} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" />{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="relative -mt-4 pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl border border-gray-200 bg-white p-2 shadow-2xl shadow-gray-200/50">
            <div className="flex items-center gap-2 border-b border-gray-100 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-red-400" /><div className="h-3 w-3 rounded-full bg-yellow-400" /><div className="h-3 w-3 rounded-full bg-green-400" />
              <div className="ml-4 flex-1 rounded-lg bg-gray-100 px-4 py-1 text-center text-xs text-gray-500">app.omnicrm.ai/dashboard</div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-4 gap-4 mb-4">
                {[{ l: "Revenue", v: "$1.2M", c: "+12.5%" }, { l: "Leads", v: "2,847", c: "+8.2%" }, { l: "Deals", v: "184", c: "+23.1%" }, { l: "Customers", v: "1,234", c: "+5.7%" }].map((s) => (
                  <div key={s.l} className="rounded-xl border border-gray-100 p-4">
                    <p className="text-xs text-gray-500">{s.l}</p><p className="mt-1 text-2xl font-bold text-gray-900">{s.v}</p><p className="mt-1 text-xs font-semibold text-emerald-600">{s.c}</p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 rounded-xl border border-gray-100 p-4">
                  <p className="mb-3 text-sm font-semibold text-gray-900">Revenue Trend</p>
                  <div className="flex items-end gap-2 h-28">
                    {[55, 62, 58, 72, 78, 85, 80, 92, 88, 95, 90, 98].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-blue-500 to-blue-400 opacity-80" style={{ height: `\${h}%` }} />
                    ))}
                  </div>
                </div>
                <div className="rounded-xl border border-gray-100 p-4">
                  <p className="mb-3 text-sm font-semibold text-gray-900">Pipeline</p>
                  <div className="space-y-3">
                    {["Discovery", "Proposal", "Won"].map((s, i) => (
                      <div key={s}>
                        <div className="flex justify-between text-xs mb-1"><span className="text-gray-600">{s}</span><span className="font-medium text-gray-900">{[12, 6, 3][i]}</span></div>
                        <div className="h-2 rounded-full bg-gray-100"><div className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" style={{ width: `\${[60, 30, 15][i]}%` }} /></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700 mb-4">Features</span>
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Built Different. Works Better.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-600">Six reasons your team will actually enjoy using this CRM.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <div key={i} className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:border-gray-300 hover:shadow-2xl hover:-translate-y-1">
                <div className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br \${f.gradient} opacity-0 blur-3xl transition-opacity group-hover:opacity-10`} />
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br \${f.gradient} shadow-lg transition-transform group-hover:scale-110`}>
                  <f.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">{f.title}</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">{f.description}</p>
                <span className="mt-4 inline-block rounded-lg bg-gray-100 px-3 py-1 text-xs font-bold text-gray-600">{f.stats}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block rounded-full bg-purple-100 px-4 py-1.5 text-sm font-semibold text-purple-700 mb-4">Modules</span>
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">12 Modules. One Platform.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-600">Everything from CRM to HR to Inventory fully integrated, fully AI-powered.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {modules.map((m, i) => (
              <div key={i} className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-gray-300 hover:shadow-xl hover:-translate-y-1">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br \${m.color} shadow-sm`}><m.icon className="h-6 w-6 text-white" /></div>
                <h3 className="mt-4 font-bold text-gray-900">{m.name}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-950 to-violet-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-blue-500 blur-[100px]" />
          <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-violet-500 blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-blue-300 mb-4 backdrop-blur-sm">AI Engine</span>
            <h2 className="text-4xl font-extrabold sm:text-5xl">Intelligence That Moves the Needle</h2>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-blue-200/80">Not gimmicks. Not buzzwords. Real AI that makes your team faster, smarter, and more profitable.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {aiFeatures.map((f, i) => (
              <div key={i} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-500"><f.icon className="h-6 w-6 text-white" /></div>
                <h3 className="mt-4 font-bold text-white">{f.title}</h3>
                <p className="mt-2 text-sm text-blue-200/70 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700 mb-4">Industries</span>
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Your Industry. Your CRM.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-600">30+ pre-built templates. Pick yours, and we handle the rest.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((ind) => (
              <div key={ind.name} className="flex items-center gap-2.5 rounded-xl border border-gray-200 bg-white px-5 py-3 shadow-sm transition-all hover:shadow-md hover:border-gray-300 hover:-translate-y-0.5 cursor-pointer">
                <span className="text-2xl">{ind.icon}</span><span className="text-sm font-semibold text-gray-700">{ind.name}</span>
              </div>
            ))}
            <div className="flex items-center gap-2 rounded-xl border-2 border-dashed border-gray-300 px-5 py-3">
              <Sparkles className="h-5 w-5 text-gray-400" /><span className="text-sm font-semibold text-gray-500">+ Custom Industry AI</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-700 mb-4">Testimonials</span>
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Teams Ship Faster With OmniCRM</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="flex gap-0.5 mb-4">{Array.from({ length: t.rating }).map((_, j) => <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />)}</div>
                <p className="text-gray-700 text-sm leading-relaxed">{t.content}</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-500 text-sm font-bold text-white">{t.avatar}</div>
                  <div><p className="text-sm font-bold text-gray-900">{t.name}</p><p className="text-xs text-gray-500">{t.role}</p></div>
                </div>
                <div className="mt-4 rounded-lg bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700 inline-block">{t.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download */}
      <section id="download" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700 mb-4">Download</span>
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Take It Everywhere</h2>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-600">Native desktop apps with offline mode. Plus web and mobile you are covered on every screen.</p>
          </div>
          <div className="mx-auto max-w-4xl grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { os: "macOS", icon: "🍎", version: "v3.2.1", size: "89 MB", chip: "Apple Silicon and Intel" },
              { os: "Windows", icon: "🪟", version: "v3.2.1", size: "94 MB", chip: "Windows 10/11" },
              { os: "Linux", icon: "🐧", version: "v3.2.1", size: "82 MB", chip: "Ubuntu/Debian/Fedora" },
              { os: "Web App", icon: "🌐", version: "Always latest", size: "No install", chip: "Any modern browser" },
            ].map((d) => (
              <div key={d.os} className="group rounded-2xl border border-gray-200 bg-white p-6 text-center transition-all hover:shadow-xl hover:-translate-y-1 hover:border-blue-200">
                <span className="text-4xl">{d.icon}</span>
                <h3 className="mt-3 text-lg font-bold text-gray-900">{d.os}</h3>
                <p className="text-xs text-gray-500 mt-1">{d.chip}</p>
                <p className="text-xs text-gray-400">{d.version} - {d.size}</p>
                <button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:from-blue-700 hover:to-blue-800">
                  <Download className="h-4 w-4" />Download
                </button>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <h3 className="font-bold text-gray-900 mb-3">System Requirements</h3>
            <div className="grid gap-4 sm:grid-cols-3 text-sm text-gray-600">
              <div><p className="font-semibold text-gray-800">Processor</p><p>Intel i3 / Apple M1 or better</p></div>
              <div><p className="font-semibold text-gray-800">Memory</p><p>4 GB RAM minimum, 8 GB recommended</p></div>
              <div><p className="font-semibold text-gray-800">Storage</p><p>500 MB available space</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block rounded-full bg-violet-100 px-4 py-1.5 text-sm font-semibold text-violet-700 mb-4">Pricing</span>
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Simple. Transparent. Fair.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-600">Start free. Upgrade when you are ready. No surprises, no gotchas.</p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-3 items-start">
            {pricingPlans.map((plan) => <PricingCard key={plan.name} plan={plan} />)}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block rounded-full bg-gray-200 px-4 py-1.5 text-sm font-semibold text-gray-700 mb-4">FAQ</span>
            <h2 className="text-4xl font-extrabold text-gray-900">Questions? Answered.</h2>
          </div>
          <div>{faqs.map((faq, i) => <FAQItem key={i} faq={faq} />)}</div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-violet-600 to-purple-700 p-12 text-center sm:p-20">
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
            <div className="relative">
              <h2 className="text-4xl font-extrabold text-white sm:text-5xl">Your Competitors Are Already Using This.</h2>
              <p className="mx-auto mt-6 max-w-xl text-xl text-blue-100">10,000+ businesses. 50+ industries. One decision to make.</p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/signup" className="group flex items-center gap-2 rounded-2xl bg-white px-10 py-5 text-lg font-bold text-blue-600 shadow-2xl transition-all hover:bg-blue-50">
                  Start Free Now<ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <a href="#download" className="flex items-center gap-2 rounded-2xl border-2 border-white/30 px-10 py-5 text-lg font-bold text-white transition-all hover:bg-white/10">
                  <Download className="h-5 w-5" />Download App
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600"><Zap className="h-6 w-6 text-white" /></div>
                <span className="text-2xl font-bold text-gray-900">OmniCRM AI</span>
              </div>
              <p className="mt-4 text-gray-600 max-w-xs leading-relaxed">The AI-powered CRM that adapts to any business, any industry, any size.</p>
            </div>
            {[{ title: "Product", links: ["Features", "Pricing", "Integrations", "API", "Changelog"] }, { title: "Company", links: ["About", "Blog", "Careers", "Press", "Partners"] }, { title: "Support", links: ["Help Center", "Documentation", "Status", "Security", "Contact"] }].map((col) => (
              <div key={col.title}>
                <h4 className="font-bold text-gray-900">{col.title}</h4>
                <ul className="mt-4 space-y-3">{col.links.map((link) => <li key={link}><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">{link}</a></li>)}</ul>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 sm:flex-row">
            <p className="text-sm text-gray-500">2024 OmniCRM AI. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-gray-500"><a href="#" className="hover:text-gray-700">Privacy</a><a href="#" className="hover:text-gray-700">Terms</a><a href="#" className="hover:text-gray-700">Cookies</a></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
