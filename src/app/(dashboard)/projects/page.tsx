"use client";
import React from "react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn, formatCurrency, getInitials } from "@/lib/utils";
import { mockProjects } from "@/data/mock-data";
import { Plus, Search, Calendar, DollarSign, FolderKanban, CheckCircle2, AlertTriangle, Clock } from "lucide-react";

const sc: Record<string, { v: string }> = { "On Track": { v: "success" }, "At Risk": { v: "warning" }, Delayed: { v: "danger" } };

export default function ProjectsPage() {
  return (
    <DashboardLayout title="Projects" subtitle="Track and manage all projects">
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-4">
        {[{ l: "Total", v: "18", icon: FolderKanban, g: "from-blue-500 to-blue-600" }, { l: "On Track", v: "12", icon: CheckCircle2, g: "from-emerald-500 to-emerald-600" }, { l: "At Risk", v: "3", icon: AlertTriangle, g: "from-amber-500 to-amber-600" }, { l: "Overdue", v: "1", icon: Clock, g: "from-red-500 to-red-600" }].map((s) => (
          <div key={s.l} className="rounded-2xl border border-gray-200/60 bg-white p-5 shadow-sm"><div className="flex items-center justify-between"><div><p className="text-sm text-gray-500">{s.l}</p><p className="mt-1 text-2xl font-bold text-gray-900">{s.v}</p></div><div className={cn("flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br", s.g)}><s.icon className="h-5 w-5 text-white" /></div></div></div>
        ))}
      </div>
      <div className="mb-6"><Button size="sm"><Plus className="mr-2 h-4 w-4" /> New Project</Button></div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {mockProjects.map((p) => (
          <div key={p.id} className="group rounded-2xl border border-gray-200/60 bg-white p-5 shadow-sm transition-all hover:shadow-lg dark:border-gray-700/60 dark:bg-gray-800/80">
            <div className="flex items-start justify-between"><div><p className="text-xs font-mono text-gray-400">{p.id}</p><h3 className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">{p.name}</h3><p className="text-sm text-gray-500">{p.client}</p></div><Badge variant={sc[p.status]?.v as any || "default"}>{p.status}</Badge></div>
            <div className="mt-4"><div className="flex items-center justify-between mb-2"><span className="text-sm text-gray-500">Progress</span><span className="text-sm font-semibold text-gray-900">{p.progress}%</span></div><Progress value={p.progress} className="h-2" /></div>
            <div className="mt-4 grid grid-cols-2 gap-3"><div className="rounded-lg bg-gray-50 p-2.5 dark:bg-gray-700/50"><div className="flex items-center gap-1.5 text-xs text-gray-500"><Calendar className="h-3.5 w-3.5" /> Deadline</div><p className="mt-1 text-sm font-medium text-gray-900">{new Date(p.deadline).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</p></div><div className="rounded-lg bg-gray-50 p-2.5 dark:bg-gray-700/50"><div className="flex items-center gap-1.5 text-xs text-gray-500"><DollarSign className="h-3.5 w-3.5" /> Budget</div><p className="mt-1 text-sm font-medium text-gray-900">{formatCurrency(p.budget)}</p></div></div>
            <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4 dark:border-gray-700"><div className="flex -space-x-2">{p.team.slice(0, 3).map((m, i) => <div key={i} className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-blue-500 to-violet-500 text-[9px] font-semibold text-white dark:border-gray-800">{getInitials(m)}</div>)}</div><p className="text-xs text-gray-500">{formatCurrency(p.spent)} / {formatCurrency(p.budget)}</p></div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
