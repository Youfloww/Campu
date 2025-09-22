"use client";
import { Book, Monitor, HelpCircle, Repeat, Handshake, Briefcase, MessageCircle } from "lucide-react";
import GlassCard from "./GlassCard";

const categories = [
  { name: "Used Goods", icon: <Book className="w-7 h-7 text-purple-400" /> },
  { name: "Digital Goods", icon: <Monitor className="w-7 h-7 text-cyan-400" /> },
  { name: "Lost & Found", icon: <HelpCircle className="w-7 h-7 text-pink-400" /> },
  { name: "Swap/Exchange", icon: <Repeat className="w-7 h-7 text-green-400" /> },
  { name: "Services", icon: <Handshake className="w-7 h-7 text-orange-400" /> },
  { name: "Freelance Jobs", icon: <Briefcase className="w-7 h-7 text-yellow-400" /> },
  { name: "Polls & Confessions", icon: <MessageCircle className="w-7 h-7 text-blue-400" /> },
];

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
      {categories.map((cat) => (
        <GlassCard
          key={cat.name}
          className="flex flex-col items-center justify-center p-4 cursor-pointer transition-transform hover:scale-105 hover:shadow-xl"
        >
          <div className="animate-bounce">{cat.icon}</div>
          <span className="mt-2 text-white font-semibold">{cat.name}</span>
        </GlassCard>
      ))}
    </div>
  );
}