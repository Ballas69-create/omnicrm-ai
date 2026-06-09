"use client";
import React from "react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn, formatCurrency } from "@/lib/utils";
import { Plus, Search, Receipt, DollarSign, TrendingUp, CreditCard } from "lucide-react";

const expenses = [
  { id: "EXP-001", desc: "Office Rent", cat: "Rent", amount: 5000, date: "2024-01-15", status: "Paid" },
  { id: "EXP-002", desc: "AWS Hosting", cat: "Software", amount: 2450, date: "2024-01-14", status: "Paid" },
  { id: "EXP-003", desc: "Team Lunch", cat: "Meals", amount: 320, date: "2024-01-13", status: "Pending" },
  { id: "EXP-004", desc: "Marketing Ads", cat: "Marketing", amount: 3500, date: "2024-01-12", status: "Approved" },
  { id: "EXP-005", desc: "Travel - NYC", cat: "Travel", amount: 1800, date: "2024-01-11", status: "Pending" },
];
const sc: Record<string, string> = { Paid: "success", Approved: "info", Pending: "warning" };

export default function ExpensesPage() {
  return (
    <DashboardLayout title="Expenses" subtitle="Track and manage business expenses">
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-4">
        {[{ l: "This Month", v: "$13,070", icon: Receipt, g: "from-blue-500 to-blue-600" }, { l: "Approved", v: "$5,950", icon: DollarSign, g: "from-emerald-500 to-emerald-600" }, { l: "Pending", v: "$2,120", icon: CreditCard, g: "from-amber-500 to-amber-600" }, { l: "vs Last Month", v: "-8.5%", icon: TrendingUp, g: "from-purple-500 to-purple-600" }].map((s) => (
          <div key={s.l} className="rounded-2xl border border-gray-200/60 bg-white p-5 shadow-sm"><div className="flex items-center justify-between"><div><p className="text-sm text-gray-500">{s.l}</p><p className="mt-1 text-2xl font-bold text-gray-900">{s.v}</p></div><div className={cn("flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br", s.g)}><s.icon className="h-5 w-5 text-white" /></div></div></div>
        ))}
      </div>
      <div className="rounded-2xl border border-gray-200/60 bg-white shadow-sm overflow-x-auto">
        <table className="w-full"><thead><tr className="border-b border-gray-100">{["ID", "Description", "Category", "Amount", "Date", "Status"].map((h) => <th key={h} className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">{h}</th>)}</tr></thead>
        <tbody>{expenses.map((e) => (
          <tr key={e.id} className="border-b border-gray-50 hover:bg-gray-50/50">
            <td className="px-4 py-3 text-sm font-mono text-blue-600">{e.id}</td>
            <td className="px-4 py-3 text-sm font-medium text-gray-900">{e.desc}</td>
            <td className="px-4 py-3 text-sm text-gray-600">{e.cat}</td>
            <td className="px-4 py-3 text-sm font-semibold text-gray-900">{formatCurrency(e.amount)}</td>
            <td className="px-4 py-3 text-sm text-gray-500">{e.date}</td>
            <td className="px-4 py-3"><Badge variant={sc[e.status] as any}>{e.status}</Badge></td>
          </tr>
        ))}</tbody></table>
      </div>
    </DashboardLayout>
  );
}
