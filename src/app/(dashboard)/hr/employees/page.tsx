"use client";
import React from "react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn, getInitials } from "@/lib/utils";
import { mockEmployees } from "@/data/mock-data";
import { Plus, Search, Mail, Phone, Users, UserCheck, Calendar } from "lucide-react";

export default function EmployeesPage() {
  return (
    <DashboardLayout title="Employees" subtitle="Manage your team members">
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-4">
        {[{ l: "Total", v: "8", icon: Users, g: "from-blue-500 to-blue-600" }, { l: "Active", v: "7", icon: UserCheck, g: "from-emerald-500 to-emerald-600" }, { l: "On Leave", v: "1", icon: Calendar, g: "from-amber-500 to-amber-600" }, { l: "Departments", v: "5", icon: Users, g: "from-purple-500 to-purple-600" }].map((s) => (
          <div key={s.l} className="rounded-2xl border border-gray-200/60 bg-white p-5 shadow-sm"><div className="flex items-center justify-between"><div><p className="text-sm text-gray-500">{s.l}</p><p className="mt-1 text-2xl font-bold text-gray-900">{s.v}</p></div><div className={cn("flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br", s.g)}><s.icon className="h-5 w-5 text-white" /></div></div></div>
        ))}
      </div>
      <div className="mb-6"><Button size="sm"><Plus className="mr-2 h-4 w-4" /> Add Employee</Button></div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {mockEmployees.map((e) => (
          <div key={e.id} className="group rounded-2xl border border-gray-200/60 bg-white p-5 shadow-sm transition-all hover:shadow-lg dark:border-gray-700/60 dark:bg-gray-800/80">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-500 text-xl font-bold text-white">{e.avatar}</div>
              <h3 className="mt-3 font-semibold text-gray-900 dark:text-white">{e.name}</h3>
              <p className="text-sm text-gray-500">{e.role}</p>
              <Badge variant={e.status === "Active" ? "success" : "warning"} className="mt-2">{e.status}</Badge>
            </div>
            <div className="mt-4 space-y-2"><div className="flex items-center gap-2 text-sm text-gray-600"><Mail className="h-4 w-4" /><span className="truncate">{e.email}</span></div><div className="flex items-center gap-2 text-sm text-gray-600"><Users className="h-4 w-4" /><span>{e.department}</span></div></div>
            <div className="mt-4 flex justify-center"><Button variant="outline" size="sm"><Mail className="mr-1 h-3.5 w-3.5" /> Email</Button></div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
