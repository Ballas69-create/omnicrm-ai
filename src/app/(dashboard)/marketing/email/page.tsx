"use client";
import React from "react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Plus, Mail, Send, Clock, CheckCircle2 } from "lucide-react";

export default function EmailPage() {
  return (
    <DashboardLayout title="Email Marketing" subtitle="Create and manage email campaigns">
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-4">
        {[{ l: "Total Sent", v: "45,500", icon: Send, g: "from-blue-500 to-blue-600" }, { l: "Open Rate", v: "38.2%", icon: Mail, g: "from-emerald-500 to-emerald-600" }, { l: "Click Rate", v: "12.4%", icon: CheckCircle2, g: "from-purple-500 to-purple-600" }, { l: "Scheduled", v: "3", icon: Clock, g: "from-amber-500 to-amber-600" }].map((s) => (
          <div key={s.l} className="rounded-2xl border border-gray-200/60 bg-white p-5 shadow-sm"><div className="flex items-center justify-between"><div><p className="text-sm text-gray-500">{s.l}</p><p className="mt-1 text-2xl font-bold text-gray-900">{s.v}</p></div><div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${s.g}`}><s.icon className="h-5 w-5 text-white" /></div></div></div>
        ))}
      </div>
      <div className="rounded-2xl border border-gray-200/60 bg-white p-12 text-center shadow-sm">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50"><Mail className="h-8 w-8 text-blue-500" /></div>
        <h3 className="text-lg font-semibold text-gray-900">Email Campaign Builder</h3>
        <p className="mt-2 text-sm text-gray-500 max-w-md mx-auto">Create beautiful email campaigns with drag-and-drop editor. Choose from templates or build from scratch.</p>
        <Button className="mt-6"><Plus className="mr-2 h-4 w-4" /> Create Email Campaign</Button>
      </div>
    </DashboardLayout>
  );
}
