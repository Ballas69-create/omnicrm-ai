"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { mockActivities } from "@/data/mock-data";
import { Phone, Mail, Calendar, CheckSquare, FileText, TrendingUp, ArrowRight } from "lucide-react";

const icons: Record<string, React.ElementType> = { call: Phone, email: Mail, meeting: Calendar, task: CheckSquare, note: FileText, deal: TrendingUp };
const colors: Record<string, string> = {
  call: "bg-emerald-100 text-emerald-600", email: "bg-blue-100 text-blue-600", meeting: "bg-purple-100 text-purple-600",
  task: "bg-amber-100 text-amber-600", note: "bg-gray-100 text-gray-600", deal: "bg-cyan-100 text-cyan-600",
};

function formatTime(ts: string) {
  try {
    return new Date(ts).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
  } catch {
    return "";
  }
}

export function ActivityFeed() {
  return (
    <div className="rounded-2xl border border-gray-200/60 bg-white p-6 shadow-sm dark:border-gray-700/60 dark:bg-gray-800/80">
      <div className="flex items-center justify-between mb-6">
        <div><h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Activity</h3><p className="text-sm text-gray-500">Latest updates</p></div>
        <button className="flex items-center gap-1 text-sm font-medium text-blue-600">View all<ArrowRight className="h-4 w-4" /></button>
      </div>
      <div className="space-y-4">
        {mockActivities.map((a) => {
          const Icon = icons[a.type] || FileText;
          return (
            <div key={a.id} className="flex gap-4">
              <div className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-xl", colors[a.type] || colors.note)}><Icon className="h-5 w-5" /></div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-white">{a.title}</p>
                <p className="text-xs text-gray-500 truncate">{a.description}</p>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-xs text-gray-400">{a.user}</span>
                  <span className="text-xs text-gray-300">•</span>
                  <span className="text-xs text-gray-400">{formatTime(a.timestamp)}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
