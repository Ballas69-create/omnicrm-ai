"use client";
import React, { useState } from "react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn, formatCurrency, getInitials } from "@/lib/utils";
import { mockCustomers } from "@/data/mock-data";
import { Plus, Search, Filter, Mail, Phone, ExternalLink, Building2 } from "lucide-react";

export default function CustomersPage() {
const [search, setSearch] = useState("");
const filtered = mockCustomers.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()) || c.industry.toLowerCase().includes(search.toLowerCase()));
return (
<DashboardLayout title="Customers" subtitle="Manage your customer relationships">
<div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
<div className="flex items-center gap-3">
<div className="relative"><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" /><input type="text" placeholder="Search customers..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-64 rounded-xl border border-gray-200 bg-white py-2 pl-9 pr-4 text-sm focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20" /></div>
<Button variant="outline" size="sm"><Filter className="mr-2 h-4 w-4" /> Filter</Button>
</div>
<Button size="sm"><Plus className="mr-2 h-4 w-4" /> Add Customer</Button>
</div>
<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
{filtered.map((c) => (
<div key={c.id} className="group rounded-2xl border border-gray-200/60 bg-white p-5 shadow-sm transition-all hover:shadow-lg hover:border-gray-300/60 dark:border-gray-700/60 dark:bg-gray-800/80">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 text-sm font-bold text-white">{getInitials(c.name)}</div>
<div><h3 className="font-semibold text-gray-900 dark:text-white">{c.name}</h3><p className="text-sm text-gray-500">{c.industry}</p></div>
</div>
<Badge variant={c.status === "Active" ? "success" : "secondary"}>{c.status}</Badge>
</div>
<div className="mt-4 space-y-2">
<div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"><Building2 className="h-4 w-4" /><span>{c.contact}</span></div>
<div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"><Mail className="h-4 w-4" /><span>{c.email}</span></div>
<div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"><Phone className="h-4 w-4" /><span>{c.phone}</span></div>
</div>
<div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4 dark:border-gray-700">
<div><p className="text-xs text-gray-500">Annual Revenue</p><p className="text-lg font-bold text-gray-900 dark:text-white">{formatCurrency(c.revenue)}</p></div>
<div className="flex items-center gap-2"><Button variant="ghost" size="icon-sm"><Mail className="h-4 w-4" /></Button><Button variant="ghost" size="icon-sm"><Phone className="h-4 w-4" /></Button><Button variant="ghost" size="icon-sm"><ExternalLink className="h-4 w-4" /></Button></div>
</div>
</div>
))}
</div>
</DashboardLayout>
);
}
