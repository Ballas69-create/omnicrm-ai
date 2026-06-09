"use client";
import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { mockPipelineData } from "@/data/mock-data";

const COLORS = ["#8B5CF6", "#6366F1", "#3B82F6", "#10B981", "#059669"];

export function PipelineChart() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="h-[300px] rounded-xl bg-gray-50 animate-pulse" />;

  return (
    <div className="rounded-2xl border border-gray-200/60 bg-white p-6 shadow-sm dark:border-gray-700/60 dark:bg-gray-800/80">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Sales Pipeline</h3>
        <p className="text-sm text-gray-500">Deals by stage</p>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={mockPipelineData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" horizontal={false} />
            <XAxis type="number" tick={{ fill: "#6B7280", fontSize: 12 }} tickFormatter={(v: any) => `$${(v / 1000).toFixed(0)}k`} />
            <YAxis type="category" dataKey="stage" tick={{ fill: "#6B7280", fontSize: 12 }} width={100} />
            <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #E5E7EB" }} formatter={(v: any) => [`$${Number(v).toLocaleString()}`, "Value"]} />
            <Bar dataKey="value" radius={[0, 8, 8, 0]} barSize={24}>
              {mockPipelineData.map((_: any, i: number) => <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
