import React, { useState } from "react";
import Board from "./components/Board";

export default function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true); 

  const { winner, line } = calculateWinner(board);
  const isDraw = !winner && board.every((cell) => cell !== null);

  function handleClick(index) {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  }

  function resetGame() {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { winner: squares[a], line: lines[i] };
      }
    }
    return { winner: null, line: null };
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">Tic Tac Toe</h1>
      <p className="text-lg font-medium text-gray-600 mb-6">
        {winner ? `Winner: ${winner}`: isDraw ? "It's a Draw!" : `Next Player: ${isXNext ? "X" : "O"}`}
      </p>

      <Board board={board} onClick={handleClick} winningLine={line} />

      <button
        onClick={resetGame}
        className="mt-6 px-6 py-2 bg-blue-600 text-white border-2 rounded-lg font-semibold hover:text-black cursor-pointer shadow hover:bg-white transition"
      >
        Reset Game
      </button>
    </div>
  );
}