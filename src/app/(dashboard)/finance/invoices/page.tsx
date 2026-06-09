"use client";
import React from "react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn, formatCurrency } from "@/lib/utils";
import { mockInvoices } from "@/data/mock-data";
import { Plus, Search, Download, DollarSign, Clock, CheckCircle2, AlertCircle, FileText, Send } from "lucide-react";

const sc: Record<string, { v: string; i: React.ElementType }> = { Paid: { v: "success", i: CheckCircle2 }, Pending: { v: "warning", i: Clock }, Overdue: { v: "danger", i: AlertCircle } };

export default function InvoicesPage() {
  const outstanding = mockInvoices.filter((i) => i.status !== "Paid").reduce((s, i) => s + i.amount, 0);
  const paid = mockInvoices.filter((i) => i.status === "Paid").reduce((s, i) => s + i.amount, 0);
  return (
    <DashboardLayout title="Invoices" subtitle="Manage invoices and payments">
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-4">
        {[{ l: "Total Invoiced", v: formatCurrency(mockInvoices.reduce((s, i) => s + i.amount, 0)), icon: FileText, g: "from-blue-500 to-blue-600" }, { l: "Paid", v: formatCurrency(paid), icon: CheckCircle2, g: "from-emerald-500 to-emerald-600" }, { l: "Outstanding", v: formatCurrency(outstanding), icon: Clock, g: "from-amber-500 to-amber-600" }, { l: "Overdue", v: formatCurrency(mockInvoices.filter((i) => i.status === "Overdue").reduce((s, i) => s + i.amount, 0)), icon: AlertCircle, g: "from-red-500 to-red-600" }].map((s) => (
          <div key={s.l} className="rounded-2xl border border-gray-200/60 bg-white p-5 shadow-sm"><div className="flex items-center justify-between"><div><p className="text-sm text-gray-500">{s.l}</p><p className="mt-1 text-2xl font-bold text-gray-900">{s.v}</p></div><div className={cn("flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br", s.g)}><s.icon className="h-5 w-5 text-white" /></div></div></div>
        ))}
      </div>
      <div className="mb-6 flex items-center justify-between"><div className="relative"><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" /><input type="text" placeholder="Search invoices..." className="w-64 rounded-xl border border-gray-200 bg-white py-2 pl-9 pr-4 text-sm" /></div><Button size="sm"><Plus className="mr-2 h-4 w-4" /> Create Invoice</Button></div>
      <div className="rounded-2xl border border-gray-200/60 bg-white shadow-sm overflow-x-auto">
        <table className="w-full"><thead><tr className="border-b border-gray-100">{["Invoice", "Customer", "Items", "Amount", "Status", "Due Date", "Actions"].map((h) => <th key={h} className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">{h}</th>)}</tr></thead>
        <tbody>{mockInvoices.map((inv) => { const c = sc[inv.status]; const Icon = c?.i || FileText; return (
          <tr key={inv.id} className="border-b border-gray-50 hover:bg-gray-50/50">
            <td className="px-4 py-3 text-sm font-mono font-medium text-blue-600">{inv.id}</td>
            <td className="px-4 py-3 text-sm font-medium text-gray-900">{inv.customer}</td>
            <td className="px-4 py-3 text-sm text-gray-600">{inv.items}</td>
            <td className="px-4 py-3 text-sm font-semibold text-gray-900">{formatCurrency(inv.amount)}</td>
            <td className="px-4 py-3"><div className="flex items-center gap-2"><Icon className={cn("h-4 w-4", inv.status === "Paid" ? "text-emerald-500" : inv.status === "Overdue" ? "text-red-500" : "text-amber-500")} /><Badge variant={c?.v as any}>{inv.status}</Badge></div></td>
            <td className="px-4 py-3 text-sm text-gray-500">{inv.dueDate}</td>
            <td className="px-4 py-3"><div className="flex items-center gap-1"><Button variant="ghost" size="icon-sm"><Download className="h-4 w-4" /></Button>{inv.status !== "Paid" && <Button variant="ghost" size="icon-sm"><Send className="h-4 w-4" /></Button>}</div></td>
          </tr>); })}</tbody></table>
      </div>
    </DashboardLayout>
  );
}
