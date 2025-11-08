import React from "react";
import Square from "./Square";

export default function Board({ board, onClick, winningLine }) {
  const getLineStyle = () => {
    if (!winningLine) return null;
    const base = "absolute bg-red-500 rounded-full";
    switch (winningLine.toString()) {
      case "0,1,2":
        return `${base} top-[47px] left-0 w-[302px] h-[4px]`;
      case "3,4,5":
        return `${base} top-[152px] left-0 w-[302px] h-[4px]`;
      case "6,7,8":
        return `${base} top-[257px] left-0 w-[302px] h-[4px]`;
      case "0,3,6":
        return `${base} top-0 left-[47px] h-[302px] w-[4px]`;
      case "1,4,7":
        return `${base} top-0 left-[151px] h-[302px] w-[4px]`;
      case "2,5,8":
        return `${base} top-0 left-[255px] h-[302px] w-[4px]`;
      case "0,4,8":
        return `${base} top-[150px] left-0 w-[302px] h-[4px] rotate-45`;
      case "2,4,6":
        return `${base} top-[150px] left-0 w-[302px] h-[4px] -rotate-45`;
      default:
        return null;
    }
  };

  return (
    <div className="relative inline-block">
      <div className="grid grid-cols-3 gap-2 justify-center">
        {board.map((value, index) => (
          <Square key={index} value={value} onClick={() => onClick(index)} />
        ))}
      </div>
      {winningLine && <div className={getLineStyle()}></div>}
    </div>
  );
}