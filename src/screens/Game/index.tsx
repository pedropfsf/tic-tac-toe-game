import { 
  AreaScreen, 
  PanelStatusPlayers 
} from './styles';

import { Text } from '../../components';
import colors from '../../styles/colors';

function Game() {
  return (
    <AreaScreen>
      <PanelStatusPlayers>
        <Text
          fontSize="16"
          color={colors.playerX}
          margin="0 0 16px 0"
        >
          Matheus ( Jogador X ) - 2 Vitórias 
        </Text>
        <Text
          fontSize="16"
          color={colors.playerO}
          margin="0 0 16px 0"
        >
          Pedro ( Jogador O ) - 0 Vitórias
        </Text>
      </PanelStatusPlayers>
      <Text
        color={colors.success}
        margin="16px 0 0 0"
      >
        Matheus Ganhouu!!!
      </Text>
    </AreaScreen>
  )
}

export default Game;