"use client";
import React from "react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn, formatCurrency } from "@/lib/utils";
import { ShoppingCart, Package, Truck, CheckCircle2, MoreHorizontal } from "lucide-react";

const orders = [
  { id: "ORD-2024-001", customer: "Acme Corp", items: 5, total: 12500, status: "Delivered", date: "2024-01-15", payment: "Paid" },
  { id: "ORD-2024-002", customer: "Global Manufacturing", items: 12, total: 45000, status: "Shipped", date: "2024-01-14", payment: "Paid" },
  { id: "ORD-2024-003", customer: "FastTrack Logistics", items: 3, total: 8500, status: "Processing", date: "2024-01-13", payment: "Pending" },
  { id: "ORD-2024-004", customer: "Urban Properties", items: 8, total: 22000, status: "Confirmed", date: "2024-01-12", payment: "Paid" },
  { id: "ORD-2024-005", customer: "SecureNet Systems", items: 6, total: 35000, status: "Delivered", date: "2024-01-11", payment: "Paid" },
];
const sc: Record<string, string> = { Delivered: "success", Shipped: "info", Processing: "warning", Confirmed: "default" };

export default function OrdersPage() {
  return (
    <DashboardLayout title="Orders" subtitle="Track and manage customer orders">
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-4">
        {[{ l: "Total Orders", v: "89", icon: ShoppingCart, g: "from-blue-500 to-blue-600" }, { l: "Processing", v: "12", icon: Package, g: "from-amber-500 to-amber-600" }, { l: "Shipped", v: "8", icon: Truck, g: "from-purple-500 to-purple-600" }, { l: "Delivered", v: "69", icon: CheckCircle2, g: "from-emerald-500 to-emerald-600" }].map((s) => (
          <div key={s.l} className="rounded-2xl border border-gray-200/60 bg-white p-5 shadow-sm"><div className="flex items-center justify-between"><div><p className="text-sm text-gray-500">{s.l}</p><p className="mt-1 text-2xl font-bold text-gray-900">{s.v}</p></div><div className={cn("flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br", s.g)}><s.icon className="h-5 w-5 text-white" /></div></div></div>
        ))}
      </div>
      <div className="rounded-2xl border border-gray-200/60 bg-white shadow-sm overflow-x-auto">
        <table className="w-full"><thead><tr className="border-b border-gray-100">{["Order", "Customer", "Items", "Total", "Status", "Payment", "Date"].map((h) => <th key={h} className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">{h}</th>)}</tr></thead>
        <tbody>{orders.map((o) => (<tr key={o.id} className="border-b border-gray-50 hover:bg-gray-50/50">
          <td className="px-4 py-3 text-sm font-mono font-medium text-blue-600">{o.id}</td>
          <td className="px-4 py-3 text-sm font-medium text-gray-900">{o.customer}</td>
          <td className="px-4 py-3 text-sm text-gray-600">{o.items} items</td>
          <td className="px-4 py-3 text-sm font-semibold text-gray-900">{formatCurrency(o.total)}</td>
          <td className="px-4 py-3"><Badge variant={sc[o.status] as any}>{o.status}</Badge></td>
          <td className="px-4 py-3"><Badge variant={o.payment === "Paid" ? "success" : "warning"}>{o.payment}</Badge></td>
          <td className="px-4 py-3 text-sm text-gray-500">{o.date}</td>
        </tr>))}</tbody></table>
      </div>
    </DashboardLayout>
  );
}
