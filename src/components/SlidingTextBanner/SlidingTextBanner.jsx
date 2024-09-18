import React from "react";

const SlidingTextBanner = () => {
  return (
    <div className="overflow-hidden bg-yellow-400 shadow-lg">
      <div className="whitespace-nowrap animate-slide">
        <span className="text-black text-lg px-4">Welcome to Qubexpress - We are hassel free courier service!</span>
      </div>
    </div>
  );
};

export default SlidingTextBanner;
