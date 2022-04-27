import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect } from 'react';

import {
  AreaScreen,
  ContainerButtons,
  ColumnGame,
  PanelGame,
  PanelStatusPlayers
} from './styles';

import { BoxGame, Button, Text } from '../../components';
import { useContextGame } from '../../contexts/GameContext';
import colors from '../../styles/colors';
import RootNativeStackParamsList from '../../types/RootNativeStackParamsList';
import applyPlayCurrentPlayer from '../../utils/applyPlayCurrentPlayer';
import { changeColorTextTurn,changeContentTextTurn } from '../../utils/changeTextTurn';
import { verifyPassedLimitVictories } from '../../utils/verifyPassedVictoriesPlayers';

type GameScreenNavigationProp = NativeStackNavigationProp<RootNativeStackParamsList, 'Game'>;

const configButtonMain = {
  flexButton: 2,
  marginRightButton: 24,
  sizeText: 14,
  marginTotalText: '0px 8px',
  colorButton: 'transparent',
  BorderButton: `2.5px solid ${colors.secundary}`
};

const configButtonRepeat = {
  flexButton: 2,
  sizeText: 20,
  colorButton: colors.secundary,
  colorText: colors.background
};

function GameScreen() {
  const {
    state,
    playCurrentPlayer,
    selectPlayerTurn,
    restartGame,
    resetToStartNewGame
  } = useContextGame();
  
  let navigation = useNavigation<GameScreenNavigationProp>();
  
  useEffect(() => {
    if (verifyPassedLimitVictories(state)) {
      restartGame();
      resetToStartNewGame();
      goSelectPlayers();
    }

  }, [ 
    state.playerO.victories, 
    state.playerX.victories 
  ]);
  
  function goSelectPlayers() {
    navigation.navigate('SelectPlayers');
  }

  function goScreenHome() {
    navigation.navigate('Home');
  }

  return (
    <AreaScreen>
      <PanelStatusPlayers>
        <Text
          fontSize="16"
          color={colors.playerX}
          margin="0 0 16px 0"
        >
          {state.playerX.name} ( Jogador X ) - {String(state.playerX.victories)} Vitórias
        </Text>

        <Text
          fontSize="16"
          color={colors.playerO}
          margin="0 0 16px 0"
        >
          {state.playerO.name} ( Jogador O ) - {String(state.playerO.victories)} Vitórias
        </Text>
      </PanelStatusPlayers>

      <Text
        color={changeColorTextTurn(state)}
        margin="16px 0 0 0"
        fontSize={18}
      >
        {changeContentTextTurn(state, selectPlayerTurn)}
      </Text>

      <PanelGame>
        <ColumnGame>
          <BoxGame
            value={state.gameLogic[0][0].value}
            borderBottom={2}
            borderRight={2}
            onPress={applyPlayCurrentPlayer({
              id: '1',
              state,
              playCurrentPlayer
            })}
          />

          <BoxGame
            value={state.gameLogic[1][0].value}
            borderBottom={2}
            borderTop={2}
            borderRight={2}
            onPress={applyPlayCurrentPlayer({
              id: '4',
              state,
              playCurrentPlayer
            })}
          />

          <BoxGame
            value={state.gameLogic[2][0].value}
            borderTop={2}
            borderRight={2}
            onPress={applyPlayCurrentPlayer({
              id: '7',
              state,
              playCurrentPlayer
            })}
          />
        </ColumnGame>

        <ColumnGame>
          <BoxGame
            value={state.gameLogic[0][1].value}
            borderBottom={2}
            borderLeft={2}
            borderRight={2}
            onPress={applyPlayCurrentPlayer({
              id: '2',
              state,
              playCurrentPlayer
            })}
          />

          <BoxGame
            value={state.gameLogic[1][1].value}
            borderBottom={2}
            borderTop={2}
            borderLeft={2}
            borderRight={2}
            onPress={applyPlayCurrentPlayer({
              id: '5',
              state,
              playCurrentPlayer
            })}
          />

          <BoxGame
            value={state.gameLogic[2][1].value}
            borderTop={2}
            borderLeft={2}
            borderRight={2}
            onPress={applyPlayCurrentPlayer({
              id: '8',
              state,
              playCurrentPlayer
            })}
          />

        </ColumnGame>
        <ColumnGame>
          <BoxGame
            value={state.gameLogic[0][2].value}
            borderBottom={2}
            borderLeft={2}
            onPress={applyPlayCurrentPlayer({
              id: '3',
              state,
              playCurrentPlayer
            })}
          />

          <BoxGame
            value={state.gameLogic[1][2].value}
            borderBottom={2}
            borderTop={2}
            borderLeft={2}
            onPress={applyPlayCurrentPlayer({
              id: '6',
              state,
              playCurrentPlayer
            })}
          />

          <BoxGame
            value={state.gameLogic[2][2].value}
            borderTop={2}
            borderLeft={2}
            onPress={applyPlayCurrentPlayer({
              id: '9',
              state,
              playCurrentPlayer
            })}
          />

        </ColumnGame>
      </PanelGame>

      <ContainerButtons>
        <Button
          optionsButton={configButtonMain}
          onPress={goScreenHome}
        >
          Voltar para tela principal
        </Button>

        <Button
          optionsButton={configButtonRepeat}
          onPress={restartGame}
        >
          Reiniciar
        </Button>
      </ContainerButtons>
    </AreaScreen>
  )
}

export default GameScreen;