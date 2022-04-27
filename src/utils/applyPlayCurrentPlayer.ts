import { Game, GameContextProps } from "../types/GameContextTypes";

type ApplyPlayCurrentPlayer = {
  id: string;
  state: Game;
  playCurrentPlayer: GameContextProps['playCurrentPlayer'];
}

function applyPlayCurrentPlayer({
  id,
  state,
  playCurrentPlayer
}: ApplyPlayCurrentPlayer) {
  return () => {
    if (state.currentVictory.status === 'progress') {
      playCurrentPlayer(id);
    }
  };
}

export default applyPlayCurrentPlayer;