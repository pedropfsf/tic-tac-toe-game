import { Game } from "../types/GameContextTypes";

function verifyPassedVictoriesPlayerX(state: Game) {
  const victoriesTotalGame = Number(state.quantityVictories);
  return victoriesTotalGame === state.playerX.victories
}

function verifyPassedVictoriesPlayerO(state: Game) {
  const victoriesTotalGame = Number(state.quantityVictories);
  return victoriesTotalGame === state.playerO.victories
}

export function verifyPassedLimitVictories(state: Game) {
  const isPassedLimitVictoriesPlayerO = verifyPassedVictoriesPlayerO(state);
  const isPassedLimitVictoriesPlayerX = verifyPassedVictoriesPlayerX(state);

  return isPassedLimitVictoriesPlayerO || isPassedLimitVictoriesPlayerX;
}
