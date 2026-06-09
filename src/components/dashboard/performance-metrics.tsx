"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

const metrics = [
  { label: "Revenue Target", value: 82, color: "from-blue-500 to-blue-600" },
  { label: "Lead Conversion", value: 68, color: "from-emerald-500 to-emerald-600" },
  { label: "Customer Retention", value: 91, color: "from-purple-500 to-purple-600" },
  { label: "Support Resolution", value: 75, color: "from-amber-500 to-amber-600" },
  { label: "Project Delivery", value: 88, color: "from-cyan-500 to-cyan-600" },
];

export function PerformanceMetrics() {
  return (
    <div className="rounded-2xl border border-gray-200/60 bg-white p-6 shadow-sm dark:border-gray-700/60 dark:bg-gray-800/80">
      <div className="mb-6"><h3 className="text-lg font-semibold text-gray-900 dark:text-white">Performance Metrics</h3><p className="text-sm text-gray-500">Key indicators</p></div>
      <div className="space-y-5">
        {metrics.map((m) => (
          <div key={m.label}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">{m.label}</span>
              <span className="text-sm font-semibold text-gray-900">{m.value}%</span>
            </div>
            <Progress value={m.value} className="h-2.5" indicatorClassName={cn("bg-gradient-to-r", m.color)} />
          </div>
        ))}
      </div>
    </div>
  );
}
