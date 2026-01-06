import React from "react";

export default function socials() {
  const socials = [
    {
      name: "Instagram",
      color: "hover:shadow-pink-500/50 text-pink-400",
    },
    { name: "Telegram", color: "hover:shadow-sky-500/50 text-sky-400" },
    {
      name: "LinkedIn",
      color: "hover:shadow-blue-500/50 text-blue-400",
    },
    {
      name: "GitHub",
      color: "hover:shadow-purple-500/50 text-purple-400",
    },
  ];
  return (
    <div className="socials mt-8 flex justify-center gap-5">
      {socials.map((item) => (
        <div
          key={item.name}
          className={`
        w-24 h-14
        flex items-center justify-center
        rounded-full
        backdrop-blur-md
        bg-white/10
        border border-white/20
        text-sm font-medium tracking-wide
        transition-all duration-300
        hover:scale-110
        hover:-translate-y-1
        hover:shadow-lg
        ${item.color}
      `}>
          {item.name}
        </div>
      ))}
    </div>
  );
}
