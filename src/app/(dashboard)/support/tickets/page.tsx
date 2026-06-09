"use client";
import React from "react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { mockTickets } from "@/data/mock-data";
import { Plus, Search, Filter, AlertCircle, Clock, CheckCircle2, ArrowUpCircle, MessageSquare } from "lucide-react";

const pc: Record<string, string> = { Critical: "danger", High: "warning", Medium: "info", Low: "secondary" };
const si: Record<string, React.ElementType> = { Open: AlertCircle, "In Progress": Clock, Escalated: ArrowUpCircle };

export default function TicketsPage() {
  return (
    <DashboardLayout title="Support Tickets" subtitle="Manage customer support requests">
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-4">
        {[{ l: "Open", v: "24", icon: AlertCircle, g: "from-blue-500 to-blue-600" }, { l: "In Progress", v: "12", icon: Clock, g: "from-amber-500 to-amber-600" }, { l: "Escalated", v: "3", icon: ArrowUpCircle, g: "from-red-500 to-red-600" }, { l: "Resolved Today", v: "8", icon: CheckCircle2, g: "from-emerald-500 to-emerald-600" }].map((s) => (
          <div key={s.l} className="rounded-2xl border border-gray-200/60 bg-white p-5 shadow-sm"><div className="flex items-center justify-between"><div><p className="text-sm text-gray-500">{s.l}</p><p className="mt-1 text-2xl font-bold text-gray-900">{s.v}</p></div><div className={cn("flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br", s.g)}><s.icon className="h-5 w-5 text-white" /></div></div></div>
        ))}
      </div>
      <div className="mb-6 flex items-center justify-between"><div className="relative"><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" /><input type="text" placeholder="Search tickets..." className="w-64 rounded-xl border border-gray-200 bg-white py-2 pl-9 pr-4 text-sm" /></div><Button size="sm"><Plus className="mr-2 h-4 w-4" /> New Ticket</Button></div>
      <div className="rounded-2xl border border-gray-200/60 bg-white shadow-sm overflow-x-auto">
        <table className="w-full"><thead><tr className="border-b border-gray-100">{["Ticket", "Subject", "Customer", "Priority", "Status", "Assignee", "Actions"].map((h) => <th key={h} className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">{h}</th>)}</tr></thead>
        <tbody>{mockTickets.map((t) => { const Icon = si[t.status] || AlertCircle; return (
          <tr key={t.id} className="border-b border-gray-50 hover:bg-gray-50/50">
            <td className="px-4 py-3 text-sm font-mono font-medium text-blue-600">{t.id}</td>
            <td className="px-4 py-3"><p className="text-sm font-medium text-gray-900">{t.subject}</p><p className="text-xs text-gray-500">{t.category}</p></td>
            <td className="px-4 py-3 text-sm text-gray-700">{t.customer}</td>
            <td className="px-4 py-3"><Badge variant={pc[t.priority] as any}>{t.priority}</Badge></td>
            <td className="px-4 py-3"><div className="flex items-center gap-2"><Icon className={cn("h-4 w-4", t.status === "Escalated" ? "text-red-500" : "text-blue-500")} /><span className="text-sm text-gray-700">{t.status}</span></div></td>
            <td className="px-4 py-3 text-sm text-gray-700">{t.assignee}</td>
            <td className="px-4 py-3"><Button variant="ghost" size="icon-sm"><MessageSquare className="h-4 w-4" /></Button></td>
          </tr>); })}</tbody></table>
      </div>
    </DashboardLayout>
  );
}
