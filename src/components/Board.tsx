import React from "react";
import { addRandomCell } from "../utils/addRandomCell";
import { useGame } from "../hooks/useGame";
import "../App.css";

export const Board: React.FC = () => {
  const [board, dispatch, setBoard] = useGame();


  const moveDown = () => {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; i < board.length; j++) {}
    }
    dispatch();
  };

  const moveUp = () => {
    console.log("up");
  };

  const moveRight = () => {
    console.log("right");
  };

  const moveLeft = () => {
    console.log("left");
  };

  const initializeBoard = () => {
    const newBoard = Array.from({ length: 4 }, () => Array(4).fill(null));
    addRandomCell(newBoard);
    addRandomCell(newBoard);
    setBoard(newBoard);
  };

  React.useEffect(() => {
    initializeBoard();
  }, []);

  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      e.preventDefault();

      switch (e.code) {
        case "ArrowLeft":
          moveLeft();
          break;
        case "ArrowRight":
          moveRight();
          break;
        case "ArrowUp":
          moveUp();
          break;
        case "ArrowDown":
          moveDown();
          return;
        default:
          return;
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  });

  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => (
            <div key={colIndex} className="cell">
              {cell.value}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
