"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { UserPlus, FileText, Target, MessageSquare, Calendar, Receipt } from "lucide-react";

const actions = [
  { label: "Add Lead", icon: UserPlus, gradient: "from-blue-500 to-blue-600" },
  { label: "Create Quote", icon: FileText, gradient: "from-emerald-500 to-emerald-600" },
  { label: "New Deal", icon: Target, gradient: "from-purple-500 to-purple-600" },
  { label: "Send Email", icon: MessageSquare, gradient: "from-amber-500 to-amber-600" },
  { label: "Schedule", icon: Calendar, gradient: "from-cyan-500 to-cyan-600" },
  { label: "New Invoice", icon: Receipt, gradient: "from-rose-500 to-rose-600" },
];

export function QuickActions() {
  return (
    <div className="rounded-2xl border border-gray-200/60 bg-white p-6 shadow-sm dark:border-gray-700/60 dark:bg-gray-800/80">
      <div className="mb-6"><h3 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Actions</h3><p className="text-sm text-gray-500">Common tasks</p></div>
      <div className="grid grid-cols-3 gap-3">
        {actions.map((a) => (
          <button key={a.label} className="group flex flex-col items-center gap-2 rounded-xl p-3 transition-all hover:bg-gray-50 dark:hover:bg-gray-700/50">
            <div className={cn("flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br shadow-sm transition-transform group-hover:scale-105", a.gradient)}>
              <a.icon className="h-5 w-5 text-white" />
            </div>
            <span className="text-xs font-medium text-gray-600 dark:text-gray-400">{a.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
