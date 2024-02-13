import React from "react";

type CellProps = {
  cell: Cell;
};

export const Cell = ({ cell }: CellProps) => {
  return <div className="cell">{cell.value ?? ""}</div>;
};
