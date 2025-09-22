"use client";
import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="bg-glassDark dark:bg-glass p-2 rounded-full shadow-glass transition-all hover:scale-110 flex items-center justify-center"
    >
      {theme === "dark" ? (
        <Sun className="w-6 h-6 text-yellow-300" />
      ) : (
        <Moon className="w-6 h-6 text-blue-700" />
      )}
    </button>
  );
}