"use client";
import React from "react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn, formatCurrency, getInitials } from "@/lib/utils";
import { mockDeals } from "@/data/mock-data";
import { Plus, Search, Filter, MoreHorizontal, DollarSign, TrendingUp, Target, BarChart3 } from "lucide-react";

const stages = [
  { name: "Discovery", color: "border-purple-400 bg-purple-50 dark:bg-purple-900/10" },
  { name: "Qualification", color: "border-blue-400 bg-blue-50 dark:bg-blue-900/10" },
  { name: "Proposal", color: "border-cyan-400 bg-cyan-50 dark:bg-cyan-900/10" },
  { name: "Negotiation", color: "border-amber-400 bg-amber-50 dark:bg-amber-900/10" },
  { name: "Closed Won", color: "border-emerald-400 bg-emerald-50 dark:bg-emerald-900/10" },
  { name: "Closed Lost", color: "border-red-400 bg-red-50 dark:bg-red-900/10" },
];

export default function PipelinePage() {
const totalPipeline = mockDeals.reduce((s, d) => s + d.value, 0);
const weightedPipeline = mockDeals.reduce((s, d) => s + (d.value * d.probability) / 100, 0);
const wonValue = mockDeals.filter((d) => d.stage === "Closed Won").reduce((s, d) => s + d.value, 0);
return (
<DashboardLayout title="Sales Pipeline" subtitle="Track and manage your deals">
<div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-4">
{[
  { label: "Total Pipeline", value: formatCurrency(totalPipeline), icon: DollarSign, gradient: "from-blue-500 to-blue-600" },
  { label: "Weighted Pipeline", value: formatCurrency(weightedPipeline), icon: TrendingUp, gradient: "from-emerald-500 to-emerald-600" },
  { label: "Won Revenue", value: formatCurrency(wonValue), icon: Target, gradient: "from-purple-500 to-purple-600" },
  { label: "Win Rate", value: "33%", icon: BarChart3, gradient: "from-amber-500 to-amber-600" },
].map((s) => (
  <div key={s.label} className="rounded-2xl border border-gray-200/60 bg-white p-5 shadow-sm dark:border-gray-700/60 dark:bg-gray-800/80">
    <div className="flex items-center justify-between"><div><p className="text-sm text-gray-500">{s.label}</p><p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">{s.value}</p></div>
    <div className={cn("flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br", s.gradient)}><s.icon className="h-5 w-5 text-white" /></div></div>
  </div>
))}
</div>
<div className="mb-6 flex items-center justify-between">
<div className="flex items-center gap-3"><div className="relative"><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" /><input type="text" placeholder="Search deals..." className="w-64 rounded-xl border border-gray-200 bg-white py-2 pl-9 pr-4 text-sm focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20" /></div></div>
<Button size="sm"><Plus className="mr-2 h-4 w-4" /> Add Deal</Button>
</div>
<div className="flex gap-4 overflow-x-auto pb-4">
{stages.map((stage) => {
  const deals = mockDeals.filter((d) => d.stage === stage.name);
  const val = deals.reduce((s, d) => s + d.value, 0);
  return (
    <div key={stage.name} className="min-w-[280px] flex-shrink-0">
      <div className={cn("rounded-2xl border-t-4 p-3", stage.color)}>
        <div className="mb-3"><h3 className="text-sm font-semibold text-gray-900 dark:text-white">{stage.name}</h3><p className="text-xs text-gray-500">{deals.length} deals - {formatCurrency(val)}</p></div>
        <div className="space-y-3">
          {deals.map((d) => (
            <div key={d.id} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md cursor-grab dark:border-gray-700 dark:bg-gray-800">
              <div className="flex items-start justify-between"><div className="flex-1 min-w-0"><p className="text-sm font-semibold text-gray-900 dark:text-white truncate">{d.name}</p><p className="text-xs text-gray-500 mt-0.5">{d.company}</p></div><button className="rounded-lg p-1 text-gray-400 hover:bg-gray-100"><MoreHorizontal className="h-4 w-4" /></button></div>
              <div className="mt-3 flex items-center justify-between"><span className="text-lg font-bold text-gray-900 dark:text-white">{formatCurrency(d.value)}</span><div className="flex items-center gap-1.5"><div className="h-2 w-12 rounded-full bg-gray-100"><div className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" style={{ width: d.probability + "%" }} /></div><span className="text-xs font-medium text-gray-500">{d.probability}%</span></div></div>
              <div className="mt-3 flex items-center justify-between"><div className="flex items-center gap-2"><div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-500 text-[9px] font-semibold text-white">{getInitials(d.owner)}</div><span className="text-xs text-gray-500">{d.owner}</span></div><span className="text-xs text-gray-400">{new Date(d.closeDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
})}
</div>
</DashboardLayout>
);
}
