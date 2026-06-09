"use client";
import React from "react";
import { cn, formatCurrency } from "@/lib/utils";
import { mockDeals } from "@/data/mock-data";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const stageColors: Record<string, "success" | "warning" | "info" | "purple" | "default" | "danger"> = {
  "Closed Won": "success", "Negotiation": "warning", "Proposal": "info", "Discovery": "purple", "Qualification": "default", "Closed Lost": "danger",
};

export function TopDeals() {
  const topDeals = mockDeals.filter((d) => d.stage !== "Closed Lost").sort((a, b) => b.value - a.value).slice(0, 5);
  return (
    <div className="rounded-2xl border border-gray-200/60 bg-white p-6 shadow-sm dark:border-gray-700/60 dark:bg-gray-800/80">
      <div className="flex items-center justify-between mb-6">
        <div><h3 className="text-lg font-semibold text-gray-900 dark:text-white">Top Deals</h3><p className="text-sm text-gray-500">Highest value opportunities</p></div>
        <button className="flex items-center gap-1 text-sm font-medium text-blue-600">View all<ArrowRight className="h-4 w-4" /></button>
      </div>
      <div className="space-y-4">
        {topDeals.map((deal) => (
          <div key={deal.id} className="flex items-center justify-between rounded-xl border border-gray-100 p-3 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700/50">
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{deal.name}</p>
              <p className="text-xs text-gray-500">{deal.company}</p>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant={stageColors[deal.stage] || "default"}>{deal.stage}</Badge>
              <p className="text-sm font-semibold text-gray-900 dark:text-white whitespace-nowrap">{formatCurrency(deal.value)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
