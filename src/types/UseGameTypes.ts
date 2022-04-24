export enum GameActions {
  ADD_PLAYER_O = 'ADD_PLAYER_O',
  ADD_PLAYER_X = 'ADD_PLAYER_X',
}

export type GameReducerAction<Payload> = {
  type: GameActions,
  payload: Payload;
}