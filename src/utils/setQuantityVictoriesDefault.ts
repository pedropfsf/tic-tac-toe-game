import { Game, GameContextProps } from '../types/GameContextTypes';

function setQuantityVictoriesDefault(
    state: Game, 
    changeQuantityVictories: GameContextProps['changeQuantityVictories']
) {
  if (state.quantityVictories === ''){
    changeQuantityVictories('5');
  }
}

export default setQuantityVictoriesDefault;

