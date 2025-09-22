import React from 'react';

export default function GlassCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="glass p-6 rounded-2xl shadow-glass backdrop-blur-md">
      {children}
    </div>
  );
}