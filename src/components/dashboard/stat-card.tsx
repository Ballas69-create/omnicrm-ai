"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface StatCardProps {
  title: string; value: string; change?: string; changeType?: "positive" | "negative" | "neutral";
  icon: React.ElementType; gradient: string; subtitle?: string;
}

export function StatCard({ title, value, change, changeType = "neutral", icon: Icon, gradient, subtitle }: StatCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-200/60 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-gray-300/60 dark:border-gray-700/60 dark:bg-gray-800/80">
      <div className={cn("absolute -right-4 -top-4 h-24 w-24 rounded-full opacity-10 blur-2xl transition-opacity group-hover:opacity-20", gradient)} />
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{value}</p>
          {subtitle && <p className="mt-1 text-xs text-gray-400">{subtitle}</p>}
          {change && (
            <div className="mt-3 flex items-center gap-1.5">
              {changeType === "positive" ? <TrendingUp className="h-4 w-4 text-emerald-500" /> : changeType === "negative" ? <TrendingDown className="h-4 w-4 text-red-500" /> : <Minus className="h-4 w-4 text-gray-400" />}
              <span className={cn("text-sm font-semibold", changeType === "positive" && "text-emerald-600", changeType === "negative" && "text-red-600", changeType === "neutral" && "text-gray-500")}>{change}</span>
              <span className="text-xs text-gray-400">vs last month</span>
            </div>
          )}
        </div>
        <div className={cn("flex h-12 w-12 items-center justify-center rounded-xl shadow-sm", gradient)}>
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>
    </div>
  );
}
