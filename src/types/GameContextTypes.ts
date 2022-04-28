export type Player = {
  name: string;
  type: 'x' | 'o';
  victories: number;
}

type GameLogic = {
  id: string;
  value: 'x' | 'o' | '';
  clicked: boolean;
}

type CurrentVictory = {
  status: 'got-old' | 'winner' | 'progress',
  namePlayer: string
}

export type TypeLineWinGame = 
  'right-diagonal' | 'left-diagonal' |
  'horizontal-top-line' | 'horizontal-middle-line' |
  'horizontal-bottom-line' | 'left-vertical-line' |
  'middle-vertical-line' | 'right-vertical-line' | 
  '';

export type Game = {
  playerX: Player;
  playerO: Player;
  turn: 'x' | 'o' | '';
  currentVictory: CurrentVictory;
  quantityVictories: string;
  gameLogic: GameLogic[][];
  numberOfMovesGame: number;
  typeLineWinGame: TypeLineWinGame;
}

export type GameContextProps = {
  changePlayerO: (name: string) => void;
  changePlayerX: (name: string) => void;
  changeQuantityVictories: (value: string) => void;
  playCurrentPlayer: (id: string) => void;
  selectPlayerTurn: () => Player;
  restartGame: () => void;
  resetToStartNewGame: () => void;
  resetTotal: () => void;
  state: Game;
};

export type GameProviderProps = {
  children: JSX.Element | JSX.Element[];
}