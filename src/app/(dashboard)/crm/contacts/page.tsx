"use client";
import React from "react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn, getInitials } from "@/lib/utils";
import { Plus, Search, Filter, Mail, Phone, MoreHorizontal } from "lucide-react";

const contacts = [
  { id: "1", name: "John Smith", email: "john@acme.com", phone: "+1 555-0101", company: "Acme Corp", role: "CEO", type: "Customer" },
  { id: "2", name: "Emily Davis", email: "emily@techstart.com", phone: "+1 555-0102", company: "TechStart", role: "CTO", type: "Lead" },
  { id: "3", name: "Robert Chen", email: "robert@globaltrade.com", phone: "+1 555-0103", company: "GlobalTrade", role: "Director", type: "Customer" },
  { id: "4", name: "Maria Garcia", email: "maria@innovateco.com", phone: "+1 555-0104", company: "InnovateCo", role: "VP Sales", type: "Partner" },
  { id: "5", name: "James Wilson", email: "james@futuretech.com", phone: "+1 555-0105", company: "FutureTech", role: "Manager", type: "Customer" },
  { id: "6", name: "Lisa Anderson", email: "lisa@smartsolutions.com", phone: "+1 555-0106", company: "SmartSolutions", role: "Owner", type: "Lead" },
];

export default function ContactsPage() {
return (
<DashboardLayout title="Contacts" subtitle="Manage your contact database">
<div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
<div className="flex items-center gap-3">
<div className="relative"><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" /><input type="text" placeholder="Search contacts..." className="w-64 rounded-xl border border-gray-200 bg-white py-2 pl-9 pr-4 text-sm focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20" /></div>
<Button variant="outline" size="sm"><Filter className="mr-2 h-4 w-4" /> Filter</Button>
</div>
<Button size="sm"><Plus className="mr-2 h-4 w-4" /> Add Contact</Button>
</div>
<div className="rounded-2xl border border-gray-200/60 bg-white shadow-sm dark:border-gray-700/60 dark:bg-gray-800/80 overflow-x-auto">
<table className="w-full">
<thead><tr className="border-b border-gray-100 dark:border-gray-700">{["Contact", "Company", "Role", "Type", "Phone", "Actions"].map((h) => <th key={h} className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">{h}</th>)}</tr></thead>
<tbody>
{contacts.map((c) => (
<tr key={c.id} className="border-b border-gray-50 hover:bg-gray-50/50 dark:border-gray-700/50">
<td className="px-4 py-3"><div className="flex items-center gap-3"><div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-500 text-xs font-semibold text-white">{getInitials(c.name)}</div><div><p className="text-sm font-medium text-gray-900 dark:text-white">{c.name}</p><p className="text-xs text-gray-500">{c.email}</p></div></div></td>
<td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">{c.company}</td>
<td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">{c.role}</td>
<td className="px-4 py-3"><Badge variant={c.type === "Customer" ? "success" : c.type === "Lead" ? "default" : "purple"}>{c.type}</Badge></td>
<td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">{c.phone}</td>
<td className="px-4 py-3"><div className="flex items-center gap-1"><Button variant="ghost" size="icon-sm"><Mail className="h-4 w-4" /></Button><Button variant="ghost" size="icon-sm"><Phone className="h-4 w-4" /></Button><Button variant="ghost" size="icon-sm"><MoreHorizontal className="h-4 w-4" /></Button></div></td>
</tr>
))}
</tbody>
</table>
</div>
</DashboardLayout>
);
}
