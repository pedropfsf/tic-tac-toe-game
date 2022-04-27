import colors from "../styles/colors";
import { Game, GameContextProps } from "../types/GameContextTypes";

export function changeColorTextTurn(state: Game) {
  return (
    state.currentVictory.status === 'winner'
      ?
      colors.success
      :
      colors.secundary
  )
}

function selectTypePlayerText(state: Game) {
  switch (state.turn) {
    case 'o':
      return 'Jogador O';

    case 'x':
      return 'Jogador X';

    default:
      return 'Jogador O';
  }
}


export function changeContentTextTurn(state: Game, selectPlayerTurn: GameContextProps['selectPlayerTurn']) {
  const { namePlayer, status } = state.currentVictory;

  if (status === 'got-old') {
    return `Empatados!!!`;
  } else if (status === 'winner') {
    return `${namePlayer} Ganhouu!!!`;
  } else {
    return `É a vez do ${selectPlayerTurn().name}, ${selectTypePlayerText(state)}`;
  }
}