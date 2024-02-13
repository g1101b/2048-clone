import React from "react";

type Action =
  | { type: "CREATE_CELL"; position: number[][]; cell: Cell }
  | { type: "UPDATE_CELL"; position: number[][]; cell: Cell }
  | { type: "MERGE_CELL"; source: TileData; destination: TileData };

const gameReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "CREATE_CELL":
      return {
        ...state,
        cells: {
          ...state.cells,
          [action.cell.id]: action.cell,
        },
        hasChanged: false,
      };

    case "UPDATE_CELL":
      return {
        ...state,
        cells: {
          ...state.cells,
          [action.cell.id]: action.cell.id,
        },
      };

    case "MERGE_CELL": {
      return {
        ...state,
        cells: {
          ...state.cells,
          [action.destination.id]: {
            id: action.destination.id,
            value: action.source.value + action.destination.value,
            position: action.destination.position,
          },
        },
      };
    }
    default:
      return state;
  }
};

export const useGame = () => {
  const [board, setBoard] = React.useState<Board>(
    Array(4).fill(Array(4).fill(null))
  );

  const initState: State = {
    cells: board,
    inMotion: false,
  };

  const [state, dispatch] = React.useReducer(gameReducer, initState);

  return [state, dispatch, setBoard];
};
