"use client";
import React from "react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { cn } from "@/lib/utils";
import { Send, Paperclip, Smile, Phone, Video, MoreHorizontal } from "lucide-react";

const chats = [
  { id: "1", name: "John Smith", company: "Acme Corp", lastMsg: "Thanks for the quick response!", time: "2m ago", unread: 2, online: true },
  { id: "2", name: "Emily Davis", company: "TechStart", lastMsg: "When can we schedule a demo?", time: "15m ago", unread: 0, online: true },
  { id: "3", name: "Robert Chen", company: "GlobalTrade", lastMsg: "Question about pricing", time: "1h ago", unread: 1, online: false },
  { id: "4", name: "Maria Garcia", company: "InnovateCo", lastMsg: "Integration working great!", time: "3h ago", unread: 0, online: false },
];

export default function ChatPage() {
  return (
    <DashboardLayout title="Live Chat" subtitle="Real-time customer conversations">
      <div className="flex h-[calc(100vh-200px)] rounded-2xl border border-gray-200/60 bg-white shadow-sm overflow-hidden">
        <div className="w-80 border-r border-gray-100 dark:border-gray-700 flex flex-col">
          <div className="p-4 border-b border-gray-100"><input type="text" placeholder="Search..." className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2 px-4 text-sm" /></div>
          <div className="flex-1 overflow-y-auto">
            {chats.map((c) => (
              <div key={c.id} className="flex items-center gap-3 p-4 cursor-pointer hover:bg-gray-50 border-b border-gray-50">
                <div className="relative"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-500 text-sm font-semibold text-white">{c.name.split(" ").map(n => n[0]).join("")}</div>{c.online && <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-500 border-2 border-white" />}</div>
                <div className="flex-1 min-w-0"><div className="flex justify-between"><p className="text-sm font-medium text-gray-900">{c.name}</p><span className="text-xs text-gray-400">{c.time}</span></div><p className="text-xs text-gray-500 truncate">{c.lastMsg}</p></div>
                {c.unread > 0 && <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-[10px] font-bold text-white">{c.unread}</span>}
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <div className="flex items-center gap-3"><div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-500 text-sm font-semibold text-white">JS</div><div><p className="text-sm font-semibold text-gray-900">John Smith</p><p className="text-xs text-emerald-500">Online</p></div></div>
            <div className="flex items-center gap-2"><button className="rounded-lg p-2 text-gray-400 hover:bg-gray-100"><Phone className="h-4 w-4" /></button><button className="rounded-lg p-2 text-gray-400 hover:bg-gray-100"><Video className="h-4 w-4" /></button></div>
          </div>
          <div className="flex-1 p-4 overflow-y-auto"><div className="space-y-4">
            {[{ r: "user", m: "Hi, I need help with CRM integration.", t: "10:30 AM" }, { r: "agent", m: "Hello John! Happy to help. Which system are you integrating?", t: "10:32 AM" }, { r: "user", m: "We are using Salesforce and want to sync contacts.", t: "10:33 AM" }, { r: "agent", m: "Great! OmniCRM has native Salesforce integration. Go to Settings > Integrations > Salesforce and click Connect.", t: "10:35 AM" }, { r: "user", m: "Thanks for the quick response!", t: "10:37 AM" }].map((m, i) => (
              <div key={i} className={cn("flex", m.r === "agent" ? "justify-end" : "justify-start")}>
                <div className={cn("max-w-[70%] rounded-2xl px-4 py-2.5", m.r === "agent" ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white" : "bg-gray-100 text-gray-900")}>
                  <p className="text-sm">{m.m}</p><p className={cn("text-xs mt-1", m.r === "agent" ? "text-blue-200" : "text-gray-400")}>{m.t}</p>
                </div>
              </div>
            ))}
          </div></div>
          <div className="p-4 border-t border-gray-100"><div className="flex items-center gap-3">
            <button className="rounded-lg p-2 text-gray-400 hover:bg-gray-100"><Paperclip className="h-5 w-5" /></button>
            <input type="text" placeholder="Type a message..." className="flex-1 rounded-xl border border-gray-200 py-2.5 px-4 text-sm" />
            <button className="rounded-lg p-2 text-gray-400 hover:bg-gray-100"><Smile className="h-5 w-5" /></button>
            <button className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 p-2.5 text-white"><Send className="h-5 w-5" /></button>
          </div></div>
        </div>
      </div>
    </DashboardLayout>
  );
}
