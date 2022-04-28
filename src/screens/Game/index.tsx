import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useMemo } from 'react';

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
import { changeColorTextTurn, changeContentTextTurn } from '../../utils/changeTextTurn';
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

  let status = state.currentVictory.status;
  const gameLogic = state.gameLogic;
  let gameLogicValueBox1 = gameLogic[0][0].value;
  let gameLogicValueBox2 = gameLogic[1][0].value;
  let gameLogicValueBox3 = gameLogic[2][0].value;
  let gameLogicValueBox4 = gameLogic[0][1].value;
  let gameLogicValueBox5 = gameLogic[1][1].value;
  let gameLogicValueBox6 = gameLogic[2][1].value;
  let gameLogicValueBox7 = gameLogic[0][2].value;
  let gameLogicValueBox8 = gameLogic[1][2].value;
  let gameLogicValueBox9 = gameLogic[2][2].value;

  const memoizedBox1 = useMemo(() => (
    <BoxGame
      value={gameLogicValueBox1}
      borderBottom={2}
      borderRight={2}
      onPress={applyPlayCurrentPlayer({
        id: '1',
        status,
        playCurrentPlayer
      })}
    />
  ), [gameLogicValueBox1, status]);

  const memoizedBox2 = useMemo(() => (
    <BoxGame
      value={gameLogicValueBox2}
      borderBottom={2}
      borderTop={2}
      borderRight={2}
      onPress={applyPlayCurrentPlayer({
        id: '4',
        status,
        playCurrentPlayer
      })}
    />
  ), [gameLogicValueBox2, status]);

  const memoizedBox3 = useMemo(() => (
    <BoxGame
      value={gameLogicValueBox3}
      borderTop={2}
      borderRight={2}
      onPress={applyPlayCurrentPlayer({
        id: '7',
        status,
        playCurrentPlayer
      })}
    />
  ), [gameLogicValueBox3, status]);

  const memoizedBox4 = useMemo(() => (
    <BoxGame
      value={gameLogicValueBox4}
      borderBottom={2}
      borderLeft={2}
      borderRight={2}
      onPress={applyPlayCurrentPlayer({
        id: '2',
        status,
        playCurrentPlayer
      })}
    />
  ), [gameLogicValueBox4, status]);

  const memoizedBox5 = useMemo(() => (
    <BoxGame
      value={gameLogicValueBox5}
      borderBottom={2}
      borderTop={2}
      borderLeft={2}
      borderRight={2}
      onPress={applyPlayCurrentPlayer({
        id: '5',
        status,
        playCurrentPlayer
      })}
    />
  ), [gameLogicValueBox5, status]);

  const memoizedBox6 = useMemo(() => (
    <BoxGame
      value={gameLogicValueBox6}
      borderTop={2}
      borderLeft={2}
      borderRight={2}
      onPress={applyPlayCurrentPlayer({
        id: '8',
        status,
        playCurrentPlayer
      })}
    />
  ), [gameLogicValueBox6, status]);

  const memoizedBox7 = useMemo(() => (
    <BoxGame
      value={gameLogicValueBox7}
      borderBottom={2}
      borderLeft={2}
      onPress={applyPlayCurrentPlayer({
        id: '3',
        status,
        playCurrentPlayer
      })}
    />
  ), [gameLogicValueBox7, status]);

  const memoizedBox8 = useMemo(() => (
    <BoxGame
      value={gameLogicValueBox8}
      borderBottom={2}
      borderTop={2}
      borderLeft={2}
      onPress={applyPlayCurrentPlayer({
        id: '6',
        status,
        playCurrentPlayer
      })}
    />
  ), [gameLogicValueBox8, status]);

  const memoizedBox9 = useMemo(() => (
    <BoxGame
      value={gameLogicValueBox9}
      borderTop={2}
      borderLeft={2}
      onPress={applyPlayCurrentPlayer({
        id: '9',
        status,
        playCurrentPlayer
      })}
    />
  ), [gameLogicValueBox9, status]);



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
          {memoizedBox1}
          {memoizedBox2}
          {memoizedBox3}
        </ColumnGame>

        <ColumnGame>
          {memoizedBox4}
          {memoizedBox5}
          {memoizedBox6}
        </ColumnGame>
        <ColumnGame>
          {memoizedBox7}
          {memoizedBox8}
          {memoizedBox9}
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