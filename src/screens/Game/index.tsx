import { 
  AreaScreen,
  ColumnGame,
  PanelGame,
  PanelStatusPlayers,
} from './styles';

import { Text, BoxGame } from '../../components';
import colors from '../../styles/colors';

function GameScreen() {
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
      <PanelGame>
        <ColumnGame>
          <BoxGame
            borderBottom={2}
            borderRight={2}
          />
          <BoxGame
            borderBottom={2}
            borderTop={2}
            borderRight={2}
          />
          <BoxGame
            borderTop={2}
            borderRight={2}
          />
        </ColumnGame>
        <ColumnGame>
          <BoxGame
            borderBottom={2}
            borderLeft={2}
            borderRight={2}
          />
          <BoxGame
            borderBottom={2}
            borderTop={2}
            borderLeft={2}
            borderRight={2}
          />
          <BoxGame
            borderTop={2}
            borderLeft={2}
            borderRight={2}
          />

        </ColumnGame>
        <ColumnGame>
          <BoxGame
            borderBottom={2}
            borderLeft={2}
          />
          <BoxGame
            borderBottom={2}
            borderTop={2}
            borderLeft={2}
          />
          <BoxGame
            borderTop={2}
            borderLeft={2}
          />
        
        </ColumnGame>
      </PanelGame>
    </AreaScreen>
  )
}

export default GameScreen;