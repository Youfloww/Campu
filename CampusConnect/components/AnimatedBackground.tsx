"use client";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Animated Gradient Waves */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 w-full h-full"
        style={{
          background:
            "linear-gradient(120deg, #6C47FF 0%, #00E6D8 100%)",
          filter: "blur(0px)",
        }}
      />
      {/* Floating Particles/Shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-16 w-32 h-32 rounded-full opacity-30"
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{
            background: "radial-gradient(circle, #fff 20%, #6C47FF 80%)",
          }}
        />
        <motion.div
          className="absolute bottom-12 right-32 w-40 h-40 rounded-full opacity-20"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          style={{
            background: "radial-gradient(circle, #00E6D8 20%, #232946 80%)",
          }}
        />
      </div>
    </div>
  );
}