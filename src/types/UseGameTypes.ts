export enum GameActions {
  ADD_PLAYER_O = 'ADD_PLAYER_O',
  ADD_PLAYER_X = 'ADD_PLAYER_X',
  ADD_VICTORIES = 'ADD_VICTORIES',
  PLAY = 'PLAY'
}

export type GameReducerAction<Payload> = {
  type: GameActions,
  payload: Payload;
}