import React from "react";

export default function GradientButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      className="bg-gradient-to-r from-primary to-secondary text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-200 glass"
      onClick={onClick}
    >
      {children}
    </button>
  );
}