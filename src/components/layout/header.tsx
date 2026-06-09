"use client";
import React, { useState, useEffect } from "react";
import { Menu, Bell, Search, Sun, Moon, ChevronDown } from "lucide-react";

interface HeaderProps { onMenuClick: () => void; title?: string; subtitle?: string; }

export function Header({ onMenuClick, title, subtitle }: HeaderProps) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", next);
    }
  };

  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-gray-200/80 bg-white/80 px-4 backdrop-blur-xl dark:border-gray-700/80 dark:bg-gray-900/80 lg:px-6">
      <div className="flex items-center gap-4">
        <button onClick={onMenuClick} className="rounded-xl p-2 text-gray-500 hover:bg-gray-100 lg:hidden"><Menu className="h-5 w-5" /></button>
        {title && (
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h2>
            {subtitle && <p className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>}
          </div>
        )}
      </div>
      <div className="flex items-center gap-2">
        <div className="hidden md:flex items-center">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Search anything..." className="w-64 rounded-xl border border-gray-200 bg-gray-50/50 py-2 pl-9 pr-4 text-sm placeholder:text-gray-400 focus:border-blue-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20" />
            <kbd className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md border border-gray-200 bg-gray-100 px-1.5 py-0.5 text-[10px] font-medium text-gray-500">⌘K</kbd>
          </div>
        </div>
        {mounted && (
          <button onClick={toggleTheme} className="rounded-xl p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        )}
        <button className="relative rounded-xl p-2 text-gray-500 hover:bg-gray-100">
          <Bell className="h-5 w-5" />
          <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">2</span>
        </button>
        <div className="ml-2 flex items-center gap-2 rounded-xl p-1.5 hover:bg-gray-100 cursor-pointer">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-500 text-sm font-semibold text-white">JD</div>
          <div className="hidden text-left md:block">
            <p className="text-sm font-medium text-gray-900 dark:text-white">John Doe</p>
            <p className="text-xs text-gray-500">Super Admin</p>
          </div>
          <ChevronDown className="hidden h-4 w-4 text-gray-400 md:block" />
        </div>
      </div>
    </header>
  );
}
