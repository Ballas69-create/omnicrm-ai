"use client";
import React from "react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn, formatCurrency } from "@/lib/utils";
import { Plus, Search, Package, AlertTriangle, TrendingDown, Box } from "lucide-react";

const items = [
  { id: "SKU-001", name: "Widget Pro", cat: "Electronics", stock: 1250, reorder: 200, price: 29.99, status: "In Stock" },
  { id: "SKU-002", name: "Gadget X", cat: "Electronics", stock: 45, reorder: 100, price: 149.99, status: "Low Stock" },
  { id: "SKU-003", name: "Tool Kit Deluxe", cat: "Tools", stock: 0, reorder: 50, price: 89.99, status: "Out of Stock" },
  { id: "SKU-004", name: "Safety Helmet", cat: "Safety", stock: 890, reorder: 150, price: 34.99, status: "In Stock" },
  { id: "SKU-005", name: "Power Drill", cat: "Tools", stock: 180, reorder: 100, price: 199.99, status: "In Stock" },
];
const sc: Record<string, string> = { "In Stock": "success", "Low Stock": "warning", "Out of Stock": "danger" };

export default function InventoryPage() {
  return (
    <DashboardLayout title="Inventory" subtitle="Manage stock and inventory levels">
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-4">
        {[{ l: "Total Items", v: "2,440", icon: Package, g: "from-blue-500 to-blue-600" }, { l: "In Stock", v: "2,320", icon: Box, g: "from-emerald-500 to-emerald-600" }, { l: "Low Stock", v: "120", icon: AlertTriangle, g: "from-amber-500 to-amber-600" }, { l: "Out of Stock", v: "0", icon: TrendingDown, g: "from-red-500 to-red-600" }].map((s) => (
          <div key={s.l} className="rounded-2xl border border-gray-200/60 bg-white p-5 shadow-sm"><div className="flex items-center justify-between"><div><p className="text-sm text-gray-500">{s.l}</p><p className="mt-1 text-2xl font-bold text-gray-900">{s.v}</p></div><div className={cn("flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br", s.g)}><s.icon className="h-5 w-5 text-white" /></div></div></div>
        ))}
      </div>
      <div className="mb-6 flex items-center justify-between"><div className="relative"><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" /><input type="text" placeholder="Search inventory..." className="w-64 rounded-xl border border-gray-200 bg-white py-2 pl-9 pr-4 text-sm" /></div><Button size="sm"><Plus className="mr-2 h-4 w-4" /> Add Item</Button></div>
      <div className="rounded-2xl border border-gray-200/60 bg-white shadow-sm overflow-x-auto">
        <table className="w-full"><thead><tr className="border-b border-gray-100">{["SKU", "Name", "Category", "Stock", "Level", "Price", "Status"].map((h) => <th key={h} className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">{h}</th>)}</tr></thead>
        <tbody>{items.map((i) => (
          <tr key={i.id} className="border-b border-gray-50 hover:bg-gray-50/50">
            <td className="px-4 py-3 text-sm font-mono text-gray-500">{i.id}</td>
            <td className="px-4 py-3 text-sm font-medium text-gray-900">{i.name}</td>
            <td className="px-4 py-3 text-sm text-gray-600">{i.cat}</td>
            <td className="px-4 py-3 text-sm font-semibold text-gray-900">{i.stock.toLocaleString()}</td>
            <td className="px-4 py-3 w-32"><Progress value={(i.stock / (i.reorder * 3)) * 100} className="h-2" /></td>
            <td className="px-4 py-3 text-sm text-gray-900">{formatCurrency(i.price)}</td>
            <td className="px-4 py-3"><Badge variant={sc[i.status] as any}>{i.status}</Badge></td>
          </tr>
        ))}</tbody></table>
      </div>
    </DashboardLayout>
  );
}
