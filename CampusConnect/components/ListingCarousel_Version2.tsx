"use client";
import { useState } from "react";
import GlassCard from "./GlassCard";

const featured = [
  {
    title: "Physics Textbook",
    price: "₹350",
    img: "/demo-book.jpg",
    seller: "Ava R.",
  },
  {
    title: "Mountain Bike",
    price: "₹5,000",
    img: "/demo-cycle.jpg",
    seller: "Sam P.",
  },
  {
    title: "Lab Coat (M)",
    price: "₹250",
    img: "/demo-labcoat.jpg",
    seller: "Lee N.",
  },
];

export default function ListingCarousel() {
  const [index, setIndex] = useState(0);
  function prev() {
    setIndex((i) => (i === 0 ? featured.length - 1 : i - 1));
  }
  function next() {
    setIndex((i) => (i === featured.length - 1 ? 0 : i + 1));
  }

  const item = featured[index];

  return (
    <div className="relative flex items-center justify-center w-full">
      <button
        aria-label="Previous"
        className="absolute left-0 md:-left-10 bg-glassDark dark:bg-glass rounded-full p-2 text-white shadow-lg hover:scale-110 transition-all"
        onClick={prev}
      >
        {"‹"}
      </button>
      <GlassCard className="mx-8 w-full max-w-md flex flex-col items-center">
        <img
          src={item.img}
          alt={item.title}
          className="w-32 h-32 rounded-xl object-cover mb-3 shadow-lg"
        />
        <div className="text-lg font-bold text-white">{item.title}</div>
        <div className="text-primary font-bold">{item.price}</div>
        <div className="text-sm text-white/70 mb-2">Seller: {item.seller}</div>
        <button className="mt-2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-lg shadow hover:scale-105 transition font-semibold">
          View
        </button>
      </GlassCard>
      <button
        aria-label="Next"
        className="absolute right-0 md:-right-10 bg-glassDark dark:bg-glass rounded-full p-2 text-white shadow-lg hover:scale-110 transition-all"
        onClick={next}
      >
        {"›"}
      </button>
    </div>
  );
}