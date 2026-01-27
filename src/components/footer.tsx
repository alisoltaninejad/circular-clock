import  { useState } from "react";
import Avatar from "../assets/AliSN.jpg";
import Socials from "./socials";
export default function footer() {
  const titleCase = (str: string) =>
    str.replace(/\b\w/g, (char) => char.toUpperCase());

  const [isVisible, setIsVisible] = useState(false);
  return (
    <div
      onClick={() => setIsVisible((prevState) => !prevState)}
      className={`group fixed ${
        isVisible ? "bottom-6 hover:translate-y-2" : "-bottom-118 hover:-translate-y-2"
      } w-130 h-130 left-1/2 -translate-x-1/2  z-50 cursor-pointer 
                transition-all duration-1000 ease-in-out 
                animate-neon-pulse hover-pulse-fast  `}>
      <div className="header">
        <div
        
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-10 bg-black rounded-full flex items-center justify-center border-t border-blue-900/50 transition-colors duration-500 group-hover:border-blue-400/50">
          <svg
            className={`relative z-50 transition-transform duration-500
              ${
                isVisible
                  ? " group-hover:translate-y-1 rotate-180"
                  : "group-hover:-translate-y-1"
              }`}
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
        <div className="bg-black px-4 py-4 rounded-t-3xl text-center text-white font-aleo border-t border-blue-900/50 transition-colors duration-500 group-hover:border-blue-400/50">
          <div className="relative z-50 flex items-center justify-center gap-2">
            <span className="opacity-80 transition-opacity group-hover:opacity-100">
              Made with
            </span>
            <span className="inline-block transition-transform duration-300 group-hover:scale-150 animate-pulse">
              🤍
            </span>
            <span className="opacity-80 transition-opacity group-hover:opacity-100">
              by Ali Soltani
            </span>
          </div>
        </div>
      </div>
      <div className="content w-full h-full  bg-black text-center">
        <img
          className="avatar w-60 h-70 rounded-full mx-auto pt-8 pb-1"
          src={Avatar}
          alt="Avatar"
        />

        <p className="pt-6 max-w-68 text-center mx-auto font-aleo text-neon">
          {titleCase(
            "i’m ali soltani nejad — a patient creative front-end developer"
          )}
        </p>
        <Socials/>
      </div>
    </div>
  );
}
