type Board = Array<Array<Cell>>;

type State = {
  cells: Board;
  inMotion: boolean;
};

type TileData = {
  id: number;
  position: [number, number];
  value: number;
};

type Cell = {
  id: number;
  value: number;
};
