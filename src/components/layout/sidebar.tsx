"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard, Users, Target, Megaphone, HeadphonesIcon, FolderKanban,
  DollarSign, UserCog, Package, BarChart3, Bot, GitBranch, Settings, Shield,
  ChevronDown, ChevronRight, Search, Bell, Zap, Building2, X,
} from "lucide-react";

interface SidebarProps { isOpen: boolean; onClose: () => void; }

const menuItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { label: "CRM", icon: Users, children: [
    { label: "Leads", href: "/crm/leads", badge: "24" },
    { label: "Customers", href: "/crm/customers" },
    { label: "Contacts", href: "/crm/contacts" },
  ]},
  { label: "Sales", icon: Target, children: [
    { label: "Pipeline", href: "/sales/pipeline" },
    { label: "Quotes", href: "/sales/quotes" },
    { label: "Orders", href: "/sales/orders" },
  ]},
  { label: "Marketing", icon: Megaphone, children: [
    { label: "Campaigns", href: "/marketing/campaigns" },
    { label: "Email", href: "/marketing/email" },
  ]},
  { label: "Support", icon: HeadphonesIcon, children: [
    { label: "Tickets", href: "/support/tickets", badge: "6" },
    { label: "Live Chat", href: "/support/chat" },
  ]},
  { label: "Projects", icon: FolderKanban, href: "/projects" },
  { label: "Finance", icon: DollarSign, children: [
    { label: "Invoices", href: "/finance/invoices" },
    { label: "Expenses", href: "/finance/expenses" },
  ]},
  { label: "HR", icon: UserCog, children: [
    { label: "Employees", href: "/hr/employees" },
    { label: "Leave", href: "/hr/leave" },
  ]},
  { label: "Inventory", icon: Package, href: "/inventory" },
  { label: "Analytics", icon: BarChart3, href: "/analytics" },
  { label: "AI Assistant", icon: Bot, href: "/ai-assistant", badge: "AI" },
  { label: "Workflows", icon: GitBranch, href: "/workflows" },
];

const bottomMenuItems = [
  { label: "Settings", icon: Settings, href: "/settings" },
  { label: "Admin", icon: Shield, href: "/admin" },
];

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<string[]>(["CRM", "Sales"]);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    const sections = menuItems.filter((item) => item.children?.some((c) => pathname.startsWith(c.href))).map((item) => item.label);
    if (sections.length > 0) setExpandedItems((prev) => [...new Set([...prev, ...sections])]);
  }, [pathname]);

  const toggleExpanded = (label: string) => {
    setExpandedItems((prev) => prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]);
  };

  const isActive = (href: string) => mounted && pathname === href;
  const isParentActive = (children: { href: string }[]) => mounted && children.some((child) => pathname.startsWith(child.href));

  const renderMenuItem = (item: any) => {
    if (item.children) {
      const isExpanded = expandedItems.includes(item.label);
      const active = isParentActive(item.children);
      return (
        <div key={item.label}>
          <button
            onClick={() => toggleExpanded(item.label)}
            className={cn("group flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200",
              active ? "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800"
            )}
          >
            <div className="flex items-center gap-3">
              <item.icon className={cn("h-5 w-5", active ? "text-blue-600" : "text-gray-400 group-hover:text-gray-600")} />
              <span>{item.label}</span>
            </div>
            {isExpanded ? <ChevronDown className="h-4 w-4 text-gray-400" /> : <ChevronRight className="h-4 w-4 text-gray-400" />}
          </button>
          {isExpanded && (
            <div className="ml-4 mt-1 space-y-0.5 border-l-2 border-gray-100 pl-3 dark:border-gray-700">
              {item.children.map((child: any) => (
                <Link key={child.href} href={child.href} onClick={onClose}
                  className={cn("flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-all",
                    isActive(child.href) ? "bg-blue-50 font-medium text-blue-700" : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  )}
                >
                  <span>{child.label}</span>
                  {child.badge && <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-700">{child.badge}</span>}
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    }
    return (
      <Link key={item.label} href={item.href || "#"} onClick={onClose}
        className={cn("group flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition-all",
          isActive(item.href || "") ? "bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 shadow-sm" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
        )}
      >
        <div className="flex items-center gap-3">
          <item.icon className={cn("h-5 w-5", isActive(item.href || "") ? "text-blue-600" : "text-gray-400 group-hover:text-gray-600")} />
          <span>{item.label}</span>
        </div>
        {item.badge && (
          <span className={cn("rounded-full px-2 py-0.5 text-xs font-semibold",
            item.badge === "AI" ? "bg-gradient-to-r from-violet-500 to-purple-500 text-white" : "bg-blue-100 text-blue-700"
          )}>{item.badge}</span>
        )}
      </Link>
    );
  };

  return (
    <>
      {isOpen && <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden" onClick={onClose} />}
      <aside className={cn("fixed left-0 top-0 z-50 flex h-full w-[280px] flex-col border-r border-gray-200/80 bg-white/95 backdrop-blur-xl transition-transform duration-300 dark:border-gray-700/80 dark:bg-gray-900/95 lg:translate-x-0 lg:z-30",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex h-16 items-center justify-between border-b border-gray-100 px-5 dark:border-gray-800">
          <Link href="/dashboard" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 shadow-lg shadow-blue-500/25">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">OmniCRM</h1>
              <p className="text-[10px] font-medium uppercase tracking-wider text-blue-600">AI Platform</p>
            </div>
          </Link>
          <button onClick={onClose} className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 lg:hidden"><X className="h-5 w-5" /></button>
        </div>
        <div className="mx-4 mt-4 rounded-xl bg-gradient-to-r from-blue-50 to-violet-50 p-3 dark:from-blue-900/20 dark:to-violet-900/20">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm dark:bg-gray-800"><Building2 className="h-5 w-5 text-blue-600" /></div>
            <div>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">Demo Company</p>
              <p className="text-xs text-gray-500">Construction</p>
            </div>
          </div>
        </div>
        <div className="px-4 py-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Search..." className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-2 pl-9 pr-4 text-sm placeholder:text-gray-400 focus:border-blue-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20" />
          </div>
        </div>
        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-2">{menuItems.map(renderMenuItem)}</nav>
        <div className="border-t border-gray-100 px-3 py-3 dark:border-gray-800">{bottomMenuItems.map(renderMenuItem)}</div>
        <div className="border-t border-gray-100 p-4 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-500 text-sm font-semibold text-white">JD</div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-white truncate">John Doe</p>
              <p className="text-xs text-gray-500 truncate">Super Admin</p>
            </div>
            <button className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100"><Bell className="h-4 w-4" /></button>
          </div>
        </div>
      </aside>
    </>
  );
}
