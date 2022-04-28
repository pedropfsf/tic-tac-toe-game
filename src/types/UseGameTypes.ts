export enum GameActions {
  ADD_PLAYER_O = 'ADD_PLAYER_O',
  ADD_PLAYER_X = 'ADD_PLAYER_X',
  ADD_VICTORIES = 'ADD_VICTORIES',
  PLAY = 'PLAY',
  INCREMENT_NUMBER_MOVES = 'INCREMENT_NUMBER_MOVES',
  RESTART_GAME = 'RESTART_GAME',
  RESET_TO_START_NEW_GAME = 'RESET_TO_START_NEW_GAME',
  RESET_TOTAL = 'RESET_TOTAL'
}

export type GameReducerAction<Payload> = {
  type: GameActions,
  payload?: Payload;
}