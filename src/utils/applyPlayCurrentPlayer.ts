import { Game, GameContextProps } from "../types/GameContextTypes";

type ApplyPlayCurrentPlayer = {
  id: string;
  status: Game['currentVictory']['status'];
  playCurrentPlayer: GameContextProps['playCurrentPlayer'];
}

function applyPlayCurrentPlayer({
  id,
  status,
  playCurrentPlayer
}: ApplyPlayCurrentPlayer) {
  return () => {
    if (status === 'progress') {
      playCurrentPlayer(id);
    }
  };
}

export default applyPlayCurrentPlayer;