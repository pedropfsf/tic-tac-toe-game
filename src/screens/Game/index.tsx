import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import gameWinningChecker from '../../utils/gameWinningChecker';
import RootNativeStackParamsList from '../../types/RootNativeStackParamsList';

import {
  AreaScreen,
  ColumnGame,
  PanelGame,
  PanelStatusPlayers,
  ContainerButtons
} from './styles';

import { Text, BoxGame, Button } from '../../components';
import colors from '../../styles/colors';
import { useContextGame } from '../../contexts/GameContext';

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
    selectPlayerTurn
  } = useContextGame();

  const { status, namePlayer } = state.currentVictory;
  let numberOfMovesGame = state.numberOfMovesGame;

  function selectTypePlayerText() {
    switch(state.turn) {
      case 'o':
        return 'Jogador O';
      
      case 'x':
        return 'Jogador X';

      default:
        return 'Jogador O';
    }
  }

  function changeColorTextTurn() {
    return (
      status === 'winner'
        ? 
        colors.success 
        : 
        colors.secundary
    )
  }

  function changeContentTextTurn() {
    if(status === 'got-old') {
      return `Empatados!!!`;
    } else if (status === 'winner') {
      return `${namePlayer} Ganhouu!!!`;
    } else {
      return `É a vez do ${selectPlayerTurn().name}, ${selectTypePlayerText()}`;
    }
  }

  let navigation = useNavigation<GameScreenNavigationProp>();

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
        color={changeColorTextTurn()}
        margin="16px 0 0 0"
        fontSize={18}
      >
        { changeContentTextTurn() }
      </Text>
      <PanelGame>
        <ColumnGame>
          <BoxGame
            value={state.gameLogic[0][0].value}
            borderBottom={2}
            borderRight={2}
            onPress={() => {
              const id = '1';

              if(state.currentVictory.status === 'progress') {
                playCurrentPlayer(id);
              }
            }}
          />
          <BoxGame
            value={state.gameLogic[1][0].value}
            borderBottom={2}
            borderTop={2}
            borderRight={2}
            onPress={() => {
              const id = '4';

              if(state.currentVictory.status === 'progress') {
                playCurrentPlayer(id);
              }
            }}
          />
          <BoxGame
            value={state.gameLogic[2][0].value}
            borderTop={2}
            borderRight={2}
            onPress={() => {
              const id = '7';

              if(state.currentVictory.status === 'progress') {
                playCurrentPlayer(id);
              }
            }}
          />
        </ColumnGame>
        <ColumnGame>
          <BoxGame
            value={state.gameLogic[0][1].value}
            borderBottom={2}
            borderLeft={2}
            borderRight={2}
            onPress={() => {
              const id = '2';

              if(state.currentVictory.status === 'progress') {
                playCurrentPlayer(id);
              }

            }}
          />
          <BoxGame
            value={state.gameLogic[1][1].value}
            borderBottom={2}
            borderTop={2}
            borderLeft={2}
            borderRight={2}
            onPress={() => {
              const id = '5';

              if(state.currentVictory.status === 'progress') {
                playCurrentPlayer(id);
              }
            }}
          />
          <BoxGame
            value={state.gameLogic[2][1].value}
            borderTop={2}
            borderLeft={2}
            borderRight={2}
            onPress={() => {
              const id = '8';

              if(state.currentVictory.status === 'progress') {
                playCurrentPlayer(id);
              }
            }}
          />

        </ColumnGame>
        <ColumnGame>
          <BoxGame
            value={state.gameLogic[0][2].value}
            borderBottom={2}
            borderLeft={2}
            onPress={() => {
              const id = '3';

              if(state.currentVictory.status === 'progress') {
                playCurrentPlayer(id);
              }

            }}
          />
          <BoxGame
            value={state.gameLogic[1][2].value}
            borderBottom={2}
            borderTop={2}
            borderLeft={2}
            onPress={() => {
              const id = '6';

              if(state.currentVictory.status === 'progress') {
                playCurrentPlayer(id);
              }
            }}
          />
          <BoxGame
            value={state.gameLogic[2][2].value}
            borderTop={2}
            borderLeft={2}
            onPress={() => {
              const id = '9';

              if(state.currentVictory.status === 'progress') {
                playCurrentPlayer(id);
              }
            }}
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
        <Button optionsButton={configButtonRepeat}>
          Reiniciar
        </Button>
      </ContainerButtons>
    </AreaScreen>
  )
}

export default GameScreen;