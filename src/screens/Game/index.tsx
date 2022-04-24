import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
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