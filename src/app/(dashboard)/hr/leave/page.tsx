"use client";
import React from "react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn, getInitials } from "@/lib/utils";
import { Plus, CheckCircle2, Clock, XCircle } from "lucide-react";

const requests = [
  { id: "1", name: "Sarah Wilson", avatar: "SW", type: "Annual Leave", from: "2024-02-01", to: "2024-02-05", days: 5, status: "Approved" },
  { id: "2", name: "Mike Johnson", avatar: "MJ", type: "Sick Leave", from: "2024-01-15", to: "2024-01-16", days: 2, status: "Approved" },
  { id: "3", name: "David Brown", avatar: "DB", type: "Personal", from: "2024-02-10", to: "2024-02-12", days: 3, status: "Pending" },
  { id: "4", name: "Emily Davis", avatar: "ED", type: "Annual Leave", from: "2024-03-01", to: "2024-03-15", days: 15, status: "Pending" },
  { id: "5", name: "Lisa Anderson", avatar: "LA", type: "Sick Leave", from: "2024-01-10", to: "2024-01-10", days: 1, status: "Rejected" },
];
const si: Record<string, React.ElementType> = { Approved: CheckCircle2, Pending: Clock, Rejected: XCircle };

export default function LeavePage() {
  return (
    <DashboardLayout title="Leave Management" subtitle="Manage employee leave requests">
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-4">
        {[{ l: "Pending", v: "2" }, { l: "On Leave Today", v: "1" }, { l: "Approved", v: "5" }, { l: "Avg Days/Employee", v: "18" }].map((s) => (
          <div key={s.l} className="rounded-2xl border border-gray-200/60 bg-white p-5 shadow-sm"><p className="text-sm text-gray-500">{s.l}</p><p className="mt-1 text-2xl font-bold text-gray-900">{s.v}</p></div>
        ))}
      </div>
      <div className="mb-6 flex justify-end"><Button size="sm"><Plus className="mr-2 h-4 w-4" /> Request Leave</Button></div>
      <div className="rounded-2xl border border-gray-200/60 bg-white shadow-sm overflow-x-auto">
        <table className="w-full"><thead><tr className="border-b border-gray-100">{["Employee", "Type", "From", "To", "Days", "Status", "Actions"].map((h) => <th key={h} className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">{h}</th>)}</tr></thead>
        <tbody>{requests.map((r) => { const Icon = si[r.status]; return (
          <tr key={r.id} className="border-b border-gray-50 hover:bg-gray-50/50">
            <td className="px-4 py-3"><div className="flex items-center gap-3"><div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-500 text-xs font-semibold text-white">{r.avatar}</div><span className="text-sm font-medium text-gray-900">{r.name}</span></div></td>
            <td className="px-4 py-3 text-sm text-gray-600">{r.type}</td>
            <td className="px-4 py-3 text-sm text-gray-500">{r.from}</td>
            <td className="px-4 py-3 text-sm text-gray-500">{r.to}</td>
            <td className="px-4 py-3 text-sm font-medium text-gray-900">{r.days} days</td>
            <td className="px-4 py-3"><div className="flex items-center gap-2"><Icon className={cn("h-4 w-4", r.status === "Approved" ? "text-emerald-500" : r.status === "Pending" ? "text-amber-500" : "text-red-500")} /><Badge variant={r.status === "Approved" ? "success" : r.status === "Pending" ? "warning" : "danger"}>{r.status}</Badge></div></td>
            <td className="px-4 py-3">{r.status === "Pending" && <div className="flex gap-2"><Button variant="success" size="sm">Approve</Button><Button variant="outline" size="sm">Reject</Button></div>}</td>
          </tr>); })}</tbody></table>
      </div>
    </DashboardLayout>
  );
}
