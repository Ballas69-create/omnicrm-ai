"use client";
import React, { useEffect, useState } from "react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { cn, formatCurrency } from "@/lib/utils";
import { mockRevenueData, mockPipelineData } from "@/data/mock-data";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area } from "recharts";
import { TrendingUp, Users, DollarSign, Target, ArrowUpRight, ArrowDownRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const COLORS = ["#3B82F6", "#8B5CF6", "#10B981", "#F59E0B", "#EF4444"];
const customerGrowth = [{ month: "Jul", customers: 980 }, { month: "Aug", customers: 1025 }, { month: "Sep", customers: 1077 }, { month: "Oct", customers: 1125 }, { month: "Nov", customers: 1180 }, { month: "Dec", customers: 1234 }, { month: "Jan", customers: 1289 }];
const leadSources = [{ name: "Website", value: 35 }, { name: "Referral", value: 25 }, { name: "Social", value: 20 }, { name: "Email", value: 12 }, { name: "Other", value: 8 }];

function ChartWrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="h-[300px] rounded-xl bg-gray-50 animate-pulse" />;
  return <>{children}</>;
}

export default function AnalyticsPage() {
  return (
    <DashboardLayout title="Analytics" subtitle="Business intelligence and insights">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex rounded-xl border border-gray-200 bg-white p-1">{["7D", "30D", "90D", "1Y"].map((p) => <button key={p} className={cn("rounded-lg px-3 py-1.5 text-sm font-medium", p === "30D" ? "bg-blue-50 text-blue-700" : "text-gray-500")}>{p}</button>)}</div>
        <Button variant="outline" size="sm"><Download className="mr-2 h-4 w-4" /> Export</Button>
      </div>
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[{ l: "Total Revenue", v: "$1,234,567", c: "+12.5%", p: true, icon: DollarSign, g: "from-blue-500 to-blue-600" }, { l: "New Customers", v: "385", c: "+8.2%", p: true, icon: Users, g: "from-emerald-500 to-emerald-600" }, { l: "Avg Deal Size", v: "$45,200", c: "+5.1%", p: true, icon: Target, g: "from-purple-500 to-purple-600" }, { l: "Win Rate", v: "24.8%", c: "-2.1%", p: false, icon: TrendingUp, g: "from-amber-500 to-amber-600" }].map((s) => (
          <div key={s.l} className="rounded-2xl border border-gray-200/60 bg-white p-5 shadow-sm"><div className="flex items-start justify-between"><div><p className="text-sm text-gray-500">{s.l}</p><p className="mt-1 text-2xl font-bold text-gray-900">{s.v}</p><div className="mt-1 flex items-center gap-1">{s.p ? <ArrowUpRight className="h-3.5 w-3.5 text-emerald-500" /> : <ArrowDownRight className="h-3.5 w-3.5 text-red-500" />}<span className={cn("text-xs font-medium", s.p ? "text-emerald-600" : "text-red-600")}>{s.c}</span></div></div><div className={cn("flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br", s.g)}><s.icon className="h-5 w-5 text-white" /></div></div></div>
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-2 mb-6">
        <div className="rounded-2xl border border-gray-200/60 bg-white p-6 shadow-sm"><h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Trend</h3><div className="h-[300px]"><ChartWrapper><ResponsiveContainer width="100%" height="100%"><AreaChart data={mockRevenueData}><defs><linearGradient id="g1" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} /><stop offset="95%" stopColor="#3B82F6" stopOpacity={0} /></linearGradient></defs><CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" /><XAxis dataKey="month" tick={{ fill: "#6B7280", fontSize: 12 }} /><YAxis tick={{ fill: "#6B7280", fontSize: 12 }} tickFormatter={(v: any) => "$" + (v / 1000) + "k"} /><Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #E5E7EB" }} /><Area type="monotone" dataKey="revenue" stroke="#3B82F6" strokeWidth={2.5} fill="url(#g1)" /><Area type="monotone" dataKey="target" stroke="#D1D5DB" strokeWidth={2} strokeDasharray="5 5" fill="none" /></AreaChart></ResponsiveContainer></ChartWrapper></div></div>
        <div className="rounded-2xl border border-gray-200/60 bg-white p-6 shadow-sm"><h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Growth</h3><div className="h-[300px]"><ChartWrapper><ResponsiveContainer width="100%" height="100%"><BarChart data={customerGrowth}><CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" /><XAxis dataKey="month" tick={{ fill: "#6B7280", fontSize: 12 }} /><YAxis tick={{ fill: "#6B7280", fontSize: 12 }} /><Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #E5E7EB" }} /><Bar dataKey="customers" fill="#8B5CF6" radius={[6, 6, 0, 0]} /></BarChart></ResponsiveContainer></ChartWrapper></div></div>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-gray-200/60 bg-white p-6 shadow-sm"><h3 className="text-lg font-semibold text-gray-900 mb-4">Lead Sources</h3><div className="h-[250px]"><ChartWrapper><ResponsiveContainer width="100%" height="100%"><PieChart><Pie data={leadSources} cx="50%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={4} dataKey="value">{leadSources.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}</Pie><Tooltip /></PieChart></ResponsiveContainer></ChartWrapper></div><div className="mt-2 space-y-2">{leadSources.map((s, i) => <div key={s.name} className="flex items-center justify-between"><div className="flex items-center gap-2"><div className="h-3 w-3 rounded-full" style={{ backgroundColor: COLORS[i] }} /><span className="text-sm text-gray-600">{s.name}</span></div><span className="text-sm font-medium text-gray-900">{s.value}%</span></div>)}</div></div>
        <div className="rounded-2xl border border-gray-200/60 bg-white p-6 shadow-sm"><h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performers</h3><div className="space-y-4">{[{ n: "Sarah Wilson", r: 85000, d: 12, a: "SW" }, { n: "Mike Johnson", r: 62000, d: 8, a: "MJ" }, { n: "David Brown", r: 51000, d: 6, a: "DB" }, { n: "Emily Davis", r: 45000, d: 5, a: "ED" }].map((p, i) => <div key={p.n} className="flex items-center gap-3"><span className="text-sm font-bold text-gray-400 w-5">#{i + 1}</span><div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-500 text-xs font-semibold text-white">{p.a}</div><div className="flex-1"><p className="text-sm font-medium text-gray-900">{p.n}</p><p className="text-xs text-gray-500">{p.d} deals</p></div><p className="text-sm font-semibold text-gray-900">{formatCurrency(p.r)}</p></div>)}</div></div>
        <div className="rounded-2xl border border-gray-200/60 bg-gradient-to-br from-violet-50 to-purple-50 p-6 shadow-sm"><div className="flex items-center gap-2 mb-4"><div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-purple-600"><TrendingUp className="h-4 w-4 text-white" /></div><h3 className="text-lg font-semibold text-gray-900">AI Insights</h3></div><div className="space-y-4">{[{ t: "Revenue Forecast", d: "Projected 15% growth next quarter" }, { t: "Churn Risk", d: "3 customers showing decreased engagement" }, { t: "Best Lead Source", d: "Referrals have 3x higher conversion rate" }, { t: "Team Performance", d: "Sarah Wilson has highest deal velocity" }].map((ins) => <div key={ins.t} className="rounded-xl bg-white/60 p-3"><p className="text-sm font-medium text-gray-900">{ins.t}</p><p className="text-xs text-gray-600 mt-0.5">{ins.d}</p></div>)}</div></div>
      </div>
    </DashboardLayout>
  );
}
