export type Player = {
  name: string;
  type: 'x' | 'o';
  victories: number;
}

export type Game = {
  playerX: Player;
  playerO: Player;
  turn: Player['name'];
}

export type GameContextProps = {
  changePlayerO: (name: string) => void;
  changePlayerX: (name: string) => void;
  state: Game;
};

export type GameProviderProps = {
  children: JSX.Element | JSX.Element[];
}