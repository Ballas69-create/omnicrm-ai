"use client";
import React from "react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { Plus, Search, FileText, Send, Download, MoreHorizontal } from "lucide-react";

const quotes = [
  { id: "QT-2024-089", client: "Acme Corp", items: "Enterprise License", amount: 125000, status: "Sent", validUntil: "2024-02-15" },
  { id: "QT-2024-088", client: "Global Manufacturing", items: "ERP Implementation", amount: 280000, status: "Draft", validUntil: "2024-02-28" },
  { id: "QT-2024-087", client: "Urban Properties", items: "CRM Setup", amount: 45000, status: "Accepted", validUntil: "2024-02-10" },
  { id: "QT-2024-086", client: "FastTrack Logistics", items: "Fleet Module", amount: 180000, status: "Sent", validUntil: "2024-02-20" },
  { id: "QT-2024-085", client: "HealthFirst Clinics", items: "Integration", amount: 95000, status: "Expired", validUntil: "2024-01-30" },
];
const sc: Record<string, string> = { Draft: "secondary", Sent: "info", Accepted: "success", Expired: "danger" };

export default function QuotesPage() {
  return (
    <DashboardLayout title="Quotes" subtitle="Manage quotations and proposals">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative"><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" /><input type="text" placeholder="Search quotes..." className="w-64 rounded-xl border border-gray-200 bg-white py-2 pl-9 pr-4 text-sm focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20" /></div>
        <Button size="sm"><Plus className="mr-2 h-4 w-4" /> Create Quote</Button>
      </div>
      <div className="rounded-2xl border border-gray-200/60 bg-white shadow-sm overflow-x-auto">
        <table className="w-full"><thead><tr className="border-b border-gray-100">{["Quote", "Client", "Items", "Amount", "Status", "Valid Until", "Actions"].map((h) => <th key={h} className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">{h}</th>)}</tr></thead>
        <tbody>{quotes.map((q) => (<tr key={q.id} className="border-b border-gray-50 hover:bg-gray-50/50">
          <td className="px-4 py-3 text-sm font-mono font-medium text-blue-600">{q.id}</td>
          <td className="px-4 py-3 text-sm font-medium text-gray-900">{q.client}</td>
          <td className="px-4 py-3 text-sm text-gray-600">{q.items}</td>
          <td className="px-4 py-3 text-sm font-semibold text-gray-900">{formatCurrency(q.amount)}</td>
          <td className="px-4 py-3"><Badge variant={sc[q.status] as any}>{q.status}</Badge></td>
          <td className="px-4 py-3 text-sm text-gray-500">{q.validUntil}</td>
          <td className="px-4 py-3"><div className="flex items-center gap-1"><Button variant="ghost" size="icon-sm"><Send className="h-4 w-4" /></Button><Button variant="ghost" size="icon-sm"><Download className="h-4 w-4" /></Button></div></td>
        </tr>))}</tbody></table>
      </div>
    </DashboardLayout>
  );
}
