"use client";
import React, { useEffect, useState } from "react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { StatCard } from "@/components/dashboard/stat-card";
import { ActivityFeed } from "@/components/dashboard/activity-feed";
import { TopDeals } from "@/components/dashboard/top-deals";
import { PerformanceMetrics } from "@/components/dashboard/performance-metrics";
import { QuickActions } from "@/components/dashboard/quick-actions";
import { DollarSign, Users, Target, TrendingUp, ShoppingCart, Headphones, FolderKanban, UserCheck } from "lucide-react";

function ChartSection() {
  const [RevenueChart, setRevenueChart] = useState<React.ComponentType | null>(null);
  const [PipelineChart, setPipelineChart] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    import("@/components/dashboard/revenue-chart").then((mod) => setRevenueChart(() => mod.RevenueChart));
    import("@/components/dashboard/pipeline-chart").then((mod) => setPipelineChart(() => mod.PipelineChart));
  }, []);

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-6">
      {RevenueChart ? <RevenueChart /> : <div className="h-[400px] rounded-2xl border border-gray-200/60 bg-white animate-pulse" />}
      {PipelineChart ? <PipelineChart /> : <div className="h-[400px] rounded-2xl border border-gray-200/60 bg-white animate-pulse" />}
    </div>
  );
}

export default function DashboardPage() {
  return (
    <DashboardLayout title="Dashboard" subtitle="Welcome back, John! Here's what's happening today.">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
        <StatCard title="Total Revenue" value="$1,234,567" change="+12.5%" changeType="positive" icon={DollarSign} gradient="bg-gradient-to-br from-blue-500 to-blue-600" subtitle="This month" />
        <StatCard title="Total Leads" value="2,847" change="+8.2%" changeType="positive" icon={Users} gradient="bg-gradient-to-br from-emerald-500 to-emerald-600" subtitle="142 new this week" />
        <StatCard title="Active Deals" value="184" change="+23.1%" changeType="positive" icon={Target} gradient="bg-gradient-to-br from-purple-500 to-purple-600" subtitle="$4.2M pipeline" />
        <StatCard title="Conversion Rate" value="24.8%" change="+3.2%" changeType="positive" icon={TrendingUp} gradient="bg-gradient-to-br from-amber-500 to-amber-600" subtitle="Above target" />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
        <StatCard title="Open Tickets" value="24" change="-12%" changeType="positive" icon={Headphones} gradient="bg-gradient-to-br from-rose-500 to-rose-600" subtitle="6 critical" />
        <StatCard title="Active Projects" value="18" change="+2" changeType="neutral" icon={FolderKanban} gradient="bg-gradient-to-br from-cyan-500 to-cyan-600" subtitle="3 at risk" />
        <StatCard title="New Orders" value="89" change="+15.3%" changeType="positive" icon={ShoppingCart} gradient="bg-gradient-to-br from-violet-500 to-violet-600" subtitle="$234K value" />
        <StatCard title="Active Customers" value="1,234" change="+5.7%" changeType="positive" icon={UserCheck} gradient="bg-gradient-to-br from-teal-500 to-teal-600" subtitle="92% retention" />
      </div>
      <ChartSection />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <ActivityFeed />
        <TopDeals />
        <div className="space-y-6"><PerformanceMetrics /><QuickActions /></div>
      </div>
    </DashboardLayout>
  );
}
