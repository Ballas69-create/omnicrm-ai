"use client";
import React, { useState } from "react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn, formatCurrency, getInitials } from "@/lib/utils";
import { mockLeads } from "@/data/mock-data";
import { Plus, Search, Filter, Phone, Mail, MoreHorizontal, ArrowUpDown, Star } from "lucide-react";

const statusColors: Record<string, string> = { New: "default", Contacted: "info", Qualified: "purple", Proposal: "warning", Negotiation: "success" };

export default function LeadsPage() {
  const [search, setSearch] = useState("");
  const [view, setView] = useState<"table" | "kanban">("table");
  const filtered = mockLeads.filter((l) => l.name.toLowerCase().includes(search.toLowerCase()) || l.company.toLowerCase().includes(search.toLowerCase()));

  return (
    <DashboardLayout title="Leads" subtitle="Manage and track your sales leads">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="relative"><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" /><input type="text" placeholder="Search leads..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-64 rounded-xl border border-gray-200 bg-white py-2 pl-9 pr-4 text-sm focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20" /></div>
          <Button variant="outline" size="sm"><Filter className="mr-2 h-4 w-4" />Filter</Button>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex rounded-xl border border-gray-200 bg-white p-1">
            <button onClick={() => setView("table")} className={cn("rounded-lg px-3 py-1.5 text-sm font-medium", view === "table" ? "bg-blue-50 text-blue-700" : "text-gray-500")}>Table</button>
            <button onClick={() => setView("kanban")} className={cn("rounded-lg px-3 py-1.5 text-sm font-medium", view === "kanban" ? "bg-blue-50 text-blue-700" : "text-gray-500")}>Kanban</button>
          </div>
          <Button size="sm"><Plus className="mr-2 h-4 w-4" />Add Lead</Button>
        </div>
      </div>
      <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[{ l: "Total Leads", v: "2,847" }, { l: "New This Week", v: "142" }, { l: "Conversion", v: "24.8%" }, { l: "Avg Score", v: "72" }].map((s) => (
          <div key={s.l} className="rounded-xl border border-gray-200/60 bg-white p-4"><p className="text-sm text-gray-500">{s.l}</p><p className="mt-1 text-2xl font-bold text-gray-900">{s.v}</p></div>
        ))}
      </div>
      {view === "table" && (
        <div className="rounded-2xl border border-gray-200/60 bg-white shadow-sm overflow-x-auto">
          <table className="w-full">
            <thead><tr className="border-b border-gray-100">{["", "Name", "Company", "Status", "Source", "Value", "Score", "Assigned", "Actions"].map((h) => <th key={h} className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">{h}</th>)}</tr></thead>
            <tbody>
              {filtered.map((l) => (
                <tr key={l.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                  <td className="px-4 py-3"><input type="checkbox" className="h-4 w-4 rounded" /></td>
                  <td className="px-4 py-3"><div className="flex items-center gap-3"><div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-500 text-xs font-semibold text-white">{getInitials(l.name)}</div><div><p className="text-sm font-medium text-gray-900">{l.name}</p><p className="text-xs text-gray-500">{l.email}</p></div></div></td>
                  <td className="px-4 py-3 text-sm text-gray-700">{l.company}</td>
                  <td className="px-4 py-3"><Badge variant={statusColors[l.status] as any}>{l.status}</Badge></td>
                  <td className="px-4 py-3"><span className="rounded-lg bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">{l.source}</span></td>
                  <td className="px-4 py-3 text-sm font-semibold text-gray-900">{formatCurrency(l.value)}</td>
                  <td className="px-4 py-3"><div className="flex items-center gap-2"><div className="h-2 w-16 rounded-full bg-gray-100"><div className={cn("h-2 rounded-full", l.score >= 80 ? "bg-emerald-500" : l.score >= 60 ? "bg-amber-500" : "bg-red-500")} style={{ width: `${l.score}%` }} /></div><span className="text-xs font-medium">{l.score}</span></div></td>
                  <td className="px-4 py-3 text-sm text-gray-700">{l.assignedTo}</td>
                  <td className="px-4 py-3"><div className="flex gap-1"><button className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100"><Phone className="h-4 w-4" /></button><button className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100"><Mail className="h-4 w-4" /></button></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {view === "kanban" && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {["New", "Contacted", "Qualified", "Proposal", "Negotiation"].map((status) => {
            const leads = mockLeads.filter((l) => l.status === status);
            return (
              <div key={status} className="rounded-2xl bg-gray-50 p-3">
                <div className="mb-3 flex items-center justify-between"><h3 className="text-sm font-semibold text-gray-900">{status}</h3><span className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-medium">{leads.length}</span></div>
                <div className="space-y-2">
                  {leads.map((l) => (
                    <div key={l.id} className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm hover:shadow-md cursor-grab">
                      <div className="flex items-center gap-2"><div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-500 text-[10px] font-semibold text-white">{getInitials(l.name)}</div><div className="flex-1 min-w-0"><p className="text-sm font-medium text-gray-900 truncate">{l.name}</p><p className="text-xs text-gray-500 truncate">{l.company}</p></div></div>
                      <div className="mt-2 flex items-center justify-between"><span className="text-xs font-semibold text-gray-700">{formatCurrency(l.value)}</span><div className="flex items-center gap-1"><Star className="h-3 w-3 text-amber-400 fill-amber-400" /><span className="text-xs text-gray-500">{l.score}</span></div></div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </DashboardLayout>
  );
}
