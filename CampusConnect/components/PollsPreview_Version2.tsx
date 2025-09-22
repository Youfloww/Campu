"use client";
import GlassCard from "./GlassCard";
import { useState } from "react";
import { ThumbsUp, ThumbsDown, MessageCircle } from "lucide-react";

const polls = [
  {
    text: "Should the canteen add more vegan options?",
    upvotes: 42,
    downvotes: 3,
    comments: 8,
  },
  {
    text: "Confession: I accidentally wore mismatched shoes to class 😳",
    upvotes: 31,
    downvotes: 0,
    comments: 5,
  },
];

export default function PollsPreview() {
  const [votes, setVotes] = useState(
    polls.map((p) => ({ up: p.upvotes, down: p.downvotes }))
  );

  function handleVote(idx: number, type: "up" | "down") {
    setVotes((prev) =>
      prev.map((v, i) =>
        i === idx
          ? {
              up: type === "up" ? v.up + 1 : v.up,
              down: type === "down" ? v.down + 1 : v.down,
            }
          : v
      )
    );
  }

  return (
    <div className="flex flex-col md:flex-row gap-4">
      {polls.map((p, i) => (
        <GlassCard key={i} className="flex-1 px-4 py-5 flex flex-col gap-2">
          <div className="text-white font-semibold">{p.text}</div>
          <div className="flex items-center gap-4 mt-2">
            <button
              aria-label="Upvote"
              onClick={() => handleVote(i, "up")}
              className="flex items-center gap-1 hover:text-green-400 transition"
            >
              <ThumbsUp className="w-5 h-5" />
              <span>{votes[i].up}</span>
            </button>
            <button
              aria-label="Downvote"
              onClick={() => handleVote(i, "down")}
              className="flex items-center gap-1 hover:text-red-400 transition"
            >
              <ThumbsDown className="w-5 h-5" />
              <span>{votes[i].down}</span>
            </button>
            <span className="flex items-center gap-1 ml-4 text-blue-300">
              <MessageCircle className="w-5 h-5" />
              {p.comments}
            </span>
          </div>
        </GlassCard>
      ))}
    </div>
  );
}