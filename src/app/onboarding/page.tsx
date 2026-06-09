"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { industryTemplates } from "@/data/industries";
import { Zap, ArrowRight, ArrowLeft, Check, Building2, Globe, Layers, Bot, Rocket, Loader2, Sparkles } from "lucide-react";

const steps = [
  { id: 1, title: "Company Info", icon: Building2 },
  { id: 2, title: "Industry", icon: Globe },
  { id: 3, title: "Details", icon: Layers },
  { id: 4, title: "AI Config", icon: Bot },
  { id: 5, title: "Ready!", icon: Rocket },
];

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isConfiguring, setIsConfiguring] = useState(false);
  const [progress, setProgress] = useState(0);
  const [configMsg, setConfigMsg] = useState("");
  const [form, setForm] = useState({ companyName: "", website: "", industry: "", employeeCount: "", departments: [] as string[], services: "" });

  const selectedIndustry = industryTemplates.find((t) => t.id === form.industry);
  const update = (f: string, v: any) => setForm((p) => ({ ...p, [f]: v }));
  const toggleDept = (d: string) => setForm((p) => ({ ...p, departments: p.departments.includes(d) ? p.departments.filter((x) => x !== d) : [...p.departments, d] }));

  const handleNext = () => {
    if (step === 3) {
      setStep(4);
      setIsConfiguring(true);
      setProgress(0);
      const msgs = ["Analyzing company...", "Identifying industry...", "Configuring modules...", "Setting up schema...", "Building workflows...", "Generating dashboards...", "Configuring roles...", "Setting up automations...", "Preparing reports...", "AI optimization complete!"];
      let p = 0;
      const iv = setInterval(() => {
        p += Math.random() * 15 + 5;
        if (p > 100) p = 100;
        setProgress(p);
        setConfigMsg(msgs[Math.min(Math.floor(p / 10), msgs.length - 1)]);
        if (p >= 100) { clearInterval(iv); setTimeout(() => { setIsConfiguring(false); setStep(5); }, 1000); }
      }, 800);
    } else if (step < 5) setStep(step + 1);
    else router.push("/dashboard");
  };

  const canProceed = () => step === 1 ? form.companyName.length > 0 : step === 2 ? form.industry.length > 0 : step === 3 ? form.employeeCount.length > 0 : true;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/50 via-white to-white">
      <div className="flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600"><Zap className="h-5 w-5 text-white" /></div>
          <span className="text-xl font-bold text-gray-900">OmniCRM <span className="text-blue-600">AI</span></span>
        </Link>
        <Link href="/login" className="text-sm font-medium text-gray-600">Sign in</Link>
      </div>
      <div className="mx-auto max-w-3xl px-4 pt-8">
        <div className="flex items-center justify-between">
          {steps.map((s, i) => (
            <React.Fragment key={s.id}>
              <div className="flex flex-col items-center">
                <div className={cn("flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all", step > s.id ? "border-blue-600 bg-blue-600 text-white" : step === s.id ? "border-blue-600 bg-blue-50 text-blue-600" : "border-gray-200 bg-white text-gray-400")}>
                  {step > s.id ? <Check className="h-5 w-5" /> : <s.icon className="h-5 w-5" />}
                </div>
                <span className={cn("mt-2 text-xs font-medium", step >= s.id ? "text-blue-600" : "text-gray-400")}>{s.title}</span>
              </div>
              {i < steps.length - 1 && <div className={cn("mb-6 h-0.5 flex-1 mx-2 transition-colors", step > s.id ? "bg-blue-600" : "bg-gray-200")} />}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-2xl px-4 py-12">
        {step === 1 && (
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Tell Us About Your Company</h2>
            <p className="mt-2 text-gray-600">We'll configure your perfect CRM.</p>
            <div className="mt-8 space-y-5 rounded-2xl border border-gray-200 bg-white p-8 text-left shadow-sm">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Company Name *</label>
                <input type="text" value={form.companyName} onChange={(e) => update("companyName", e.target.value)} placeholder="Enter company name" className="flex h-11 w-full rounded-xl border border-gray-200 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Website</label>
                <input type="url" value={form.website} onChange={(e) => update("website", e.target.value)} placeholder="https://www.example.com" className="flex h-11 w-full rounded-xl border border-gray-200 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Employees</label>
                <div className="grid grid-cols-3 gap-3">
                  {["1-10", "11-50", "51-200", "201-500", "501-1000", "1000+"].map((s) => (
                    <button key={s} onClick={() => update("employeeCount", s)} className={cn("rounded-xl border-2 px-4 py-3 text-sm font-medium", form.employeeCount === s ? "border-blue-500 bg-blue-50 text-blue-700" : "border-gray-200 text-gray-600 hover:border-gray-300")}>{s}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">What's Your Industry?</h2>
            <p className="mt-2 text-gray-600">Select your industry for a pre-configured template.</p>
            <div className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-4 max-h-[400px] overflow-y-auto p-1 text-left">
              {industryTemplates.map((ind) => (
                <button key={ind.id} onClick={() => update("industry", ind.id)} className={cn("group flex flex-col items-center gap-2 rounded-2xl border-2 p-3 text-center transition-all", form.industry === ind.id ? "border-blue-500 bg-blue-50 shadow-md" : "border-gray-200 hover:border-gray-300")}>
                  <span className="text-2xl">{ind.icon}</span>
                  <span className={cn("text-xs font-medium", form.industry === ind.id ? "text-blue-700" : "text-gray-700")}>{ind.name}</span>
                  {form.industry === ind.id && <div className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-500"><Check className="h-2.5 w-2.5 text-white" /></div>}
                </button>
              ))}
            </div>
            {selectedIndustry && (
              <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-4 text-left">
                <h3 className="font-semibold text-blue-900">{selectedIndustry.icon} {selectedIndustry.name}</h3>
                <p className="mt-1 text-sm text-blue-700">{selectedIndustry.description}</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {selectedIndustry.modules.slice(0, 6).map((m) => <span key={m} className="rounded-lg bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700">{m}</span>)}
                  {selectedIndustry.modules.length > 6 && <span className="rounded-lg bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700">+{selectedIndustry.modules.length - 6} more</span>}
                </div>
              </div>
            )}
          </div>
        )}
        {step === 3 && (
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Almost There!</h2>
            <p className="mt-2 text-gray-600">Help us fine-tune your configuration.</p>
            <div className="mt-8 space-y-5 rounded-2xl border border-gray-200 bg-white p-8 text-left">
              {selectedIndustry && (
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Select Departments</label>
                  <div className="flex flex-wrap gap-2">
                    {selectedIndustry.departments.map((d) => (
                      <button key={d} onClick={() => toggleDept(d)} className={cn("rounded-xl border-2 px-3 py-1.5 text-sm font-medium", form.departments.includes(d) ? "border-blue-500 bg-blue-50 text-blue-700" : "border-gray-200 text-gray-600")}>
                        {form.departments.includes(d) && <Check className="mr-1 inline h-3 w-3" />}{d}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Services / Products</label>
                <textarea value={form.services} onChange={(e) => update("services", e.target.value)} placeholder="Describe your main services..." rows={3} className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20" />
              </div>
            </div>
          </div>
        )}
        {step === 4 && (
          <div className="text-center mb-8">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-500 shadow-xl"><Bot className="h-10 w-10 text-white" /></div>
            <h2 className="text-3xl font-bold text-gray-900">AI is Building Your CRM</h2>
            <p className="mt-2 text-gray-600">Configuring everything for {form.companyName}...</p>
            <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-8 text-left">
              <div className="flex items-center justify-between mb-2"><span className="text-sm font-medium text-gray-700">Progress</span><span className="text-sm font-semibold text-blue-600">{Math.round(progress)}%</span></div>
              <div className="h-3 rounded-full bg-gray-100"><div className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 transition-all duration-500" style={{ width: `${progress}%` }} /></div>
              <div className="mt-4 flex items-center gap-3">{isConfiguring ? <Loader2 className="h-5 w-5 animate-spin text-blue-500" /> : <Check className="h-5 w-5 text-emerald-500" />}<span className="text-sm text-gray-700">{configMsg}</span></div>
            </div>
          </div>
        )}
        {step === 5 && (
          <div className="text-center mb-8">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 shadow-xl"><Rocket className="h-10 w-10 text-white" /></div>
            <h2 className="text-3xl font-bold text-gray-900">Your CRM is Ready! 🎉</h2>
            <p className="mt-2 text-gray-600">{form.companyName} is fully configured.</p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-blue-50 p-4"><p className="text-2xl font-bold text-blue-700">{selectedIndustry?.modules.length || 10}</p><p className="text-sm text-blue-600">Modules</p></div>
              <div className="rounded-xl bg-emerald-50 p-4"><p className="text-2xl font-bold text-emerald-700">{selectedIndustry?.workflows.length || 5}</p><p className="text-sm text-emerald-600">Workflows</p></div>
              <div className="rounded-xl bg-purple-50 p-4"><p className="text-2xl font-bold text-purple-700">{selectedIndustry?.dashboards.length || 4}</p><p className="text-sm text-purple-600">Dashboards</p></div>
              <div className="rounded-xl bg-amber-50 p-4"><p className="text-2xl font-bold text-amber-700">{selectedIndustry?.userRoles.length || 5}</p><p className="text-sm text-amber-600">User Roles</p></div>
            </div>
          </div>
        )}
        <div className="mt-8 flex items-center justify-between">
          {step > 1 && step < 4 && <button onClick={() => setStep(step - 1)} className="flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100"><ArrowLeft className="h-4 w-4" />Back</button>}
          <div className="flex-1" />
          {step < 4 && <button onClick={handleNext} disabled={!canProceed()} className={cn("flex items-center gap-2 rounded-xl px-8 py-3 text-sm font-semibold text-white", canProceed() ? "bg-gradient-to-r from-blue-600 to-blue-700 shadow-md" : "bg-gray-300 cursor-not-allowed")}>{step === 3 ? "Configure CRM" : "Continue"}<ArrowRight className="h-4 w-4" /></button>}
          {step === 5 && <button onClick={() => router.push("/dashboard")} className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 px-8 py-3 text-sm font-semibold text-white shadow-md">Launch Dashboard<Rocket className="h-4 w-4" /></button>}
        </div>
      </div>
    </div>
  );
}
