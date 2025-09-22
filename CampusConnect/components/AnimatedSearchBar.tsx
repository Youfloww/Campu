"use client";
import { useState, useEffect } from "react";
import { Search } from "lucide-react";
const placeholders = [
  "Search books, cycles, lab coats…",
  "Find lost items, digital goods…",
  "What do you need on campus?",
  "Looking for a study buddy?",
];

export default function AnimatedSearchBar() {
  const [text, setText] = useState("");
  const [placeholder, setPlaceholder] = useState(placeholders[0]);
  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholder(
        placeholders[Math.floor(Math.random() * placeholders.length)]
      );
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  return (
    <form className="w-full max-w-xl">
      <div className="flex items-center glass px-4 py-3 rounded-2xl shadow-glass">
        <Search className="w-5 h-5 text-primary mr-2" />
        <input
          type="text"
          className="w-full bg-transparent outline-none text-white text-lg font-medium placeholder:text-white/60"
          placeholder={placeholder}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </form>
  );
}