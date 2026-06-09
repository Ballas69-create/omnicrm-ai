"use client";
import React from "react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Plus, Mail, Bell, FileText, UserPlus, Zap, ArrowRight, Edit, Copy, Play, Clock } from "lucide-react";

const workflows = [
  { id: "1", name: "New Lead Welcome", desc: "Send welcome email when new lead created", status: "Active", trigger: "New Lead", actions: ["Send Email", "Create Task"], runs: 247, last: "2h ago", icon: Mail, g: "from-blue-500 to-blue-600" },
  { id: "2", name: "Deal Stage Alert", desc: "Notify team on deal stage change", status: "Active", trigger: "Stage Changed", actions: ["Send Notification", "Log Activity"], runs: 189, last: "45m ago", icon: Bell, g: "from-purple-500 to-purple-600" },
  { id: "3", name: "Quote Follow-up", desc: "Auto follow-up 3 days after quote sent", status: "Active", trigger: "Quote +3 Days", actions: ["Send Email", "Create Reminder"], runs: 92, last: "1d ago", icon: FileText, g: "from-emerald-500 to-emerald-600" },
  { id: "4", name: "Customer Onboarding", desc: "Automated onboarding sequence", status: "Active", trigger: "Customer Created", actions: ["Welcome Email", "Create Tasks", "Assign CSM"], runs: 156, last: "3h ago", icon: UserPlus, g: "from-amber-500 to-amber-600" },
  { id: "5", name: "SLA Breach Alert", desc: "Alert on SLA breach", status: "Paused", trigger: "SLA Expired", actions: ["Escalate", "Notify Manager"], runs: 34, last: "5d ago", icon: Zap, g: "from-red-500 to-red-600" },
  { id: "6", name: "Invoice Reminder", desc: "Payment reminders for overdue", status: "Active", trigger: "Invoice Overdue", actions: ["Send Email", "Notify Finance"], runs: 67, last: "6h ago", icon: Mail, g: "from-cyan-500 to-cyan-600" },
];

export default function WorkflowsPage() {
  return (
    <DashboardLayout title="Workflows" subtitle="Automate your business processes">
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-4">
        {[{ l: "Active", v: "5" }, { l: "Total Runs", v: "785" }, { l: "Success Rate", v: "98.2%" }, { l: "Time Saved", v: "120h" }].map((s) => (
          <div key={s.l} className="rounded-2xl border border-gray-200/60 bg-white p-5 shadow-sm"><p className="text-sm text-gray-500">{s.l}</p><p className="mt-1 text-2xl font-bold text-gray-900">{s.v}</p></div>
        ))}
      </div>
      <div className="mb-6 flex items-center justify-between"><div className="flex rounded-xl border border-gray-200 bg-white p-1"><button className="rounded-lg bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700">All</button><button className="rounded-lg px-3 py-1.5 text-sm font-medium text-gray-500">Active</button><button className="rounded-lg px-3 py-1.5 text-sm font-medium text-gray-500">Paused</button></div><Button size="sm"><Plus className="mr-2 h-4 w-4" /> Create Workflow</Button></div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {workflows.map((w) => (
          <div key={w.id} className="group rounded-2xl border border-gray-200/60 bg-white p-5 shadow-sm transition-all hover:shadow-lg dark:border-gray-700/60 dark:bg-gray-800/80">
            <div className="flex items-start justify-between"><div className={cn("flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br", w.g)}><w.icon className="h-5 w-5 text-white" /></div><Badge variant={w.status === "Active" ? "success" : "secondary"}>{w.status}</Badge></div>
            <h3 className="mt-4 text-base font-semibold text-gray-900">{w.name}</h3><p className="mt-1 text-sm text-gray-500">{w.desc}</p>
            <div className="mt-4 rounded-xl bg-gray-50 p-3"><div className="flex items-center gap-2 text-xs"><span className="rounded-lg bg-blue-100 px-2 py-1 font-medium text-blue-700">{w.trigger}</span><ArrowRight className="h-3 w-3 text-gray-400" />{w.actions.slice(0, 2).map((a) => <span key={a} className="rounded-lg bg-purple-100 px-2 py-1 font-medium text-purple-700">{a}</span>)}</div></div>
            <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4"><div className="flex items-center gap-4 text-xs text-gray-500"><span className="flex items-center gap-1"><Play className="h-3.5 w-3.5" /> {w.runs}</span><span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {w.last}</span></div><div className="flex gap-1"><button className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100"><Edit className="h-3.5 w-3.5" /></button><button className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100"><Copy className="h-3.5 w-3.5" /></button></div></div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
