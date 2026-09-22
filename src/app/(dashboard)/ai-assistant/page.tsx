"use client";
import React, { useState, useEffect, useRef } from "react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { cn } from "@/lib/utils";
import { Bot, Send, User, Copy, ThumbsUp, ThumbsDown, RefreshCw, Paperclip, Mic, Users, FileText, BarChart3, Calendar, DollarSign, Target, Lightbulb } from "lucide-react";

interface Message { id: string; role: "user" | "assistant"; content: string; timestamp: Date; }

const suggestions = [
  { icon: Users, label: "Create a lead", prompt: "Create a lead for John Smith from Acme Corp" },
  { icon: FileText, label: "Generate a quote", prompt: "Generate a quote for ABC Company worth R250,000" },
  { icon: BarChart3, label: "Sales report", prompt: "Generate a sales report for this month" },
  { icon: Calendar, label: "Schedule follow-up", prompt: "Schedule a follow-up call with Emily Davis" },
  { icon: Target, label: "Show pipeline", prompt: "Show me the current sales pipeline status" },
  { icon: DollarSign, label: "Create invoice", prompt: "Create an invoice for Acme Corp for R150,000" },
];

export default function AIAssistantPage() {
const [messages, setMessages] = useState<Message[]>([{ id: "1", role: "assistant", content: "Hello! I am your AI Assistant. I can help you create leads, generate quotes, write emails, analyze data, and automate tasks. Just ask me anything!", timestamp: new Date() }]);
const [input, setInput] = useState("");
const [isTyping, setIsTyping] = useState(false);
const messagesEndRef = useRef<HTMLDivElement>(null);
useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

const sendMessage = (text?: string) => {
  const msg = text || input; if (!msg.trim()) return;
  setMessages((p) => [...p, { id: Date.now().toString(), role: "user", content: msg, timestamp: new Date() }]);
  setInput(""); setIsTyping(true);
  fetch("/api/omni-ai", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ message: msg, history: messages.map(({ role, content }) => ({ role, content })) }) })
    .then(async (res) => { const data = await res.json(); if (!res.ok) throw new Error(data.error || "AI request failed"); return data; })
    .then((data) => setMessages((p) => [...p, { id: (Date.now() + 1).toString(), role: "assistant", content: data.content, timestamp: new Date() }]))
    .catch((error) => setMessages((p) => [...p, { id: (Date.now() + 1).toString(), role: "assistant", content: `OMNI AI error: ${error.message}`, timestamp: new Date() }]))
    .finally(() => setIsTyping(false));
};

return (
<DashboardLayout title="AI Assistant" subtitle="Your intelligent CRM copilot">
<div className="flex h-[calc(100vh-200px)] flex-col rounded-2xl border border-gray-200/60 bg-white shadow-sm dark:border-gray-700/60 dark:bg-gray-800/80">
<div className="flex items-center justify-between border-b border-gray-100 px-6 py-4 dark:border-gray-700">
<div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-600"><Bot className="h-5 w-5 text-white" /></div><div><h3 className="font-semibold text-gray-900 dark:text-white">OmniCRM AI</h3><p className="text-xs text-emerald-500">Online</p></div></div>
<button className="rounded-lg p-2 text-gray-400 hover:bg-gray-100"><RefreshCw className="h-4 w-4" /></button>
</div>
<div className="flex-1 overflow-y-auto p-6"><div className="mx-auto max-w-3xl space-y-6">
{messages.map((m) => (
<div key={m.id} className={cn("flex gap-3", m.role === "user" ? "justify-end" : "justify-start")}>
  {m.role === "assistant" && <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-purple-600"><Bot className="h-4 w-4 text-white" /></div>}
  <div className={cn("max-w-[80%] rounded-2xl px-4 py-3", m.role === "user" ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white" : "bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-gray-100")}>
    <p className="text-sm whitespace-pre-wrap">{m.content}</p>
    {m.role === "assistant" && <div className="mt-3 flex items-center gap-2 border-t border-gray-200 pt-2 dark:border-gray-600"><button className="rounded-lg p-1 text-gray-400 hover:bg-gray-200"><Copy className="h-3.5 w-3.5" /></button><button className="rounded-lg p-1 text-gray-400 hover:bg-gray-200"><ThumbsUp className="h-3.5 w-3.5" /></button><button className="rounded-lg p-1 text-gray-400 hover:bg-gray-200"><ThumbsDown className="h-3.5 w-3.5" /></button></div>}
  </div>
  {m.role === "user" && <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600"><User className="h-4 w-4 text-white" /></div>}
</div>
))}
{isTyping && <div className="flex gap-3"><div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-purple-600"><Bot className="h-4 w-4 text-white" /></div><div className="rounded-2xl bg-gray-100 px-4 py-3 dark:bg-gray-700"><div className="flex gap-1"><div className="h-2 w-2 animate-bounce rounded-full bg-gray-400" /><div className="h-2 w-2 animate-bounce rounded-full bg-gray-400" style={{ animationDelay: "150ms" }} /><div className="h-2 w-2 animate-bounce rounded-full bg-gray-400" style={{ animationDelay: "300ms" }} /></div></div></div>}
<div ref={messagesEndRef} />
</div></div>
{messages.length <= 1 && (
<div className="border-t border-gray-100 px-6 py-4 dark:border-gray-700">
<p className="mb-3 text-sm font-medium text-gray-500">Quick actions:</p>
<div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
{suggestions.map((s) => (<button key={s.label} onClick={() => sendMessage(s.prompt)} className="flex items-center gap-2 rounded-xl border border-gray-200 p-3 text-left transition-all hover:border-blue-300 hover:bg-blue-50 dark:border-gray-700 dark:hover:border-blue-600 dark:hover:bg-blue-900/20"><s.icon className="h-4 w-4 text-blue-500" /><span className="text-xs font-medium text-gray-700 dark:text-gray-300">{s.label}</span></button>))}
</div></div>
)}
<div className="border-t border-gray-100 p-4 dark:border-gray-700"><div className="mx-auto max-w-3xl flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-3 dark:border-gray-700 dark:bg-gray-800">
<button className="rounded-lg p-2 text-gray-400 hover:bg-gray-100"><Paperclip className="h-5 w-5" /></button>
<textarea value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); } }} placeholder="Ask me anything..." rows={1} className="flex-1 resize-none bg-transparent text-sm placeholder:text-gray-400 focus:outline-none dark:text-gray-100" />
<button className="rounded-lg p-2 text-gray-400 hover:bg-gray-100"><Mic className="h-5 w-5" /></button>
<button onClick={() => sendMessage()} disabled={!input.trim()} className={cn("rounded-xl p-2.5 transition-all", input.trim() ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md" : "bg-gray-100 text-gray-400 dark:bg-gray-700")}>
<Send className="h-5 w-5" /></button>
</div></div>
</div>
</DashboardLayout>
);
}
