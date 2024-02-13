export const addRandomCell = (board: Board) => {
  const emptyCells: Array<{ row: number; col: number }> = [];

  board.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      if (cell === null) {
        emptyCells.push({ row: rowIndex, col: colIndex });
      }
    });
  });

  console.dir(board);
  if (emptyCells.length > 0) {
    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    const { row, col } = emptyCells[randomIndex];
    board[col][row].value = Math.random() < 0.9 ? 2 : 4;
  }
};
