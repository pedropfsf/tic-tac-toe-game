export type Player = {
  name: string;
  type: 'x' | 'o';
  victories: number;
}

export type GameContextProps = {
  playerX: Player;
  playerO: Player;
  turn: Player['name'];
};

export type GameProviderProps = {
  children: JSX.Element | JSX.Element[];
}