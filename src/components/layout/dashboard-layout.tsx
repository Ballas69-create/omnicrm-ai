"use client";
import React, { useState } from "react";
import { Sidebar } from "./sidebar";
import { Header } from "./header";

interface DashboardLayoutProps { children: React.ReactNode; title?: string; subtitle?: string; }

export function DashboardLayout({ children, title, subtitle }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50/50 dark:bg-gray-900/50">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="lg:pl-[280px]">
        <Header onMenuClick={() => setSidebarOpen(true)} title={title} subtitle={subtitle} />
        <main className="p-4 lg:p-6">{children}</main>
      </div>
    </div>
  );
}
