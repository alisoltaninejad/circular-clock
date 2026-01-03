import React, { useState } from "react";
export default function footer() {
  return (
    <div
      className="group fixed -bottom-6 left-1/2 -translate-x-1/2 w-96 z-50 cursor-pointer 
                transition-all duration-500 ease-in-out
                filter drop-shadow-[0_0_15px_rgba(30,64,175,0.6)] 
                hover:drop-shadow-[0_0_25px_rgba(59,130,246,0.9)] 
                hover:-translate-y-2">
      {/* بخش دایره بالایی */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-10 bg-black rounded-full flex items-center justify-center border-t border-x border-blue-900/50 transition-colors duration-500 group-hover:border-blue-400/50">
        <svg
          className="relative z-50 transition-transform duration-500 group-hover:-translate-y-1"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          width={24}
          height={24}
          strokeWidth="2.5"
          stroke="white">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 15.75 7.5-7.5 7.5 7.5"
          />
        </svg>
      </div>

      {/* باکس اصلی متن */}
      <div className="bg-black px-4 py-6 rounded-t-3xl text-center text-white font-aleo border-t border-blue-900/50 transition-colors duration-500 group-hover:border-blue-400/50">
        <div className="relative z-50 flex items-center justify-center gap-2">
          <span>Made with</span>
          <span className="inline-block transition-transform duration-300 group-hover:scale-125 group-hover:animate-pulse">
            🤍
          </span>
          <span>by Ali Soltani</span>
        </div>
      </div>
    </div>
  );
}
