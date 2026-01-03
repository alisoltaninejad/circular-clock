import React, { useState } from "react";
export default function footer() {
  const [visibility, setVisibility] = useState(false);
  return (
    <div className="w-96 h-fit absolute z-50 top-[94%]  inset-0  inline-block m-auto px-4 py-2 rounded-t-2xl align-text-top font-aleo border-y-amber-300 shadow-neon shadow-blue-800 text-center">
     
      Made with 🤍 by Ali Soltani
    </div>
  );
}
