"use client";
import React from "react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn, formatCurrency } from "@/lib/utils";
import { Plus, Mail, MessageSquare, Megaphone } from "lucide-react";

const campaigns = [
  { id: "1", name: "Summer Sale 2024", type: "Email", status: "Active", sent: 12500, opened: 4200, clicked: 890, budget: 5000 },
  { id: "2", name: "Product Launch", type: "Multi-channel", status: "Active", sent: 25000, opened: 15000, clicked: 3200, budget: 12000 },
  { id: "3", name: "Customer Retention", type: "SMS", status: "Completed", sent: 8000, opened: 6500, clicked: 1200, budget: 2000 },
  { id: "4", name: "Black Friday Prep", type: "Email", status: "Draft", sent: 0, opened: 0, clicked: 0, budget: 8000 },
];
const ti: Record<string, React.ElementType> = { Email: Mail, SMS: MessageSquare, "Multi-channel": Megaphone };

export default function CampaignsPage() {
  return (
    <DashboardLayout title="Campaigns" subtitle="Manage marketing campaigns">
      <div className="mb-6 flex items-center justify-between"><div className="flex rounded-xl border border-gray-200 bg-white p-1">{["All", "Active", "Draft", "Completed"].map((f) => <button key={f} className={cn("rounded-lg px-3 py-1.5 text-sm font-medium", f === "All" ? "bg-blue-50 text-blue-700" : "text-gray-500")}>{f}</button>)}</div><Button size="sm"><Plus className="mr-2 h-4 w-4" /> Create Campaign</Button></div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {campaigns.map((c) => { const Icon = ti[c.type] || Megaphone; return (
          <div key={c.id} className="rounded-2xl border border-gray-200/60 bg-white p-5 shadow-sm transition-all hover:shadow-lg">
            <div className="flex items-start justify-between"><div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-600"><Icon className="h-5 w-5 text-white" /></div><div><h3 className="font-semibold text-gray-900">{c.name}</h3><p className="text-xs text-gray-500">{c.type}</p></div></div><Badge variant={c.status === "Active" ? "success" : c.status === "Draft" ? "secondary" : "default"}>{c.status}</Badge></div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center"><div><p className="text-lg font-bold text-gray-900">{c.sent.toLocaleString()}</p><p className="text-xs text-gray-500">Sent</p></div><div><p className="text-lg font-bold text-gray-900">{c.opened.toLocaleString()}</p><p className="text-xs text-gray-500">Opened</p></div><div><p className="text-lg font-bold text-gray-900">{c.clicked.toLocaleString()}</p><p className="text-xs text-gray-500">Clicked</p></div></div>
            {c.sent > 0 && <div className="mt-3"><div className="flex justify-between text-xs mb-1"><span className="text-gray-500">Open Rate</span><span className="font-medium">{((c.opened / c.sent) * 100).toFixed(1)}%</span></div><Progress value={(c.opened / c.sent) * 100} className="h-1.5" /></div>}
            <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3"><span className="text-sm text-gray-500">Budget: {formatCurrency(c.budget)}</span><Button variant="ghost" size="sm">Details</Button></div>
          </div>
        );})}
      </div>
    </DashboardLayout>
  );
}
