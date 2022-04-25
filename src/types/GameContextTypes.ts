export type Player = {
  name: string;
  type: 'x' | 'o';
  victories: number;
}

type GameLogic = {
  id: string;
  value: 'x' | 'o' | '';
}

type CurrentVictory = {
  current: boolean,
  namePlayer: string
}

export type Game = {
  playerX: Player;
  playerO: Player;
  turn: 'x' | 'o' | '';
  currentVictory: CurrentVictory;
  quantityVictories: string;
  gameLogic: GameLogic[][];
}

export type GameContextProps = {
  changePlayerO: (name: string) => void;
  changePlayerX: (name: string) => void;
  changeQuantityVictories: (value: string) => void;
  playCurrentPlayer: (id: string) => void;
  selectPlayerTurn: () => Player;
  state: Game;
};

export type GameProviderProps = {
  children: JSX.Element | JSX.Element[];
}