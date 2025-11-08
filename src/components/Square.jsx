import React from "react";

export default function Square({ value, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-24 h-24 text-4xl font-bold flex items-center justify-center bg-white border-2 border-gray-400 hover:bg-gray-300 cursor-pointer transition"
    >
      {value}
    </button>
  );  
}