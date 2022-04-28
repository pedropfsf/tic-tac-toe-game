import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { 
  AreaButtons,
  AreaScreen, 
  AreaStatusPlayers, 
  Container
} from './styles';

import { ImageIconLogo } from '../../assets';
import { StatusPlayer, Text, Button } from '../../components';
import Logo from '../../components/Logo';
import { useContextGame } from '../../contexts/GameContext';
import colors from '../../styles/colors';
import RootNativeStackParamsList from '../../types/RootNativeStackParamsList';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootNativeStackParamsList, 'Home'>;

const optionsButtonBack = {
  colorButton: 'transparent',
  BorderButton: `2.5px solid ${colors.secundary}`,
  marginBottomButton: 16
};

function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { state } = useContextGame();

  function goScreenSelectPlayers() {
    navigation.navigate('SelectPlayers');
  }

  function goScreenGame() {
      navigation.navigate('Game');
  }

  return (
    <AreaScreen>
      <Logo
        Src={ImageIconLogo}
        alt="Logo do aplicativo"
      />
      <Container>
        <AreaStatusPlayers>
          <StatusPlayer
            namePlayer={state.playerX.name}
            quantityVitory={state.playerX.victories}
            typePlayer='Jogador X'
            color={colors.playerX}
          />

          <Text 
            color={colors.detach}
            margin="8px"
          >
            VS
          </Text>
          
          <StatusPlayer
            namePlayer={state.playerO.name}
            quantityVitory={state.playerO.victories}
            typePlayer='Jogador O'
            color={colors.playerO}
          />
        </AreaStatusPlayers>
        <AreaButtons>
          <Button 
            optionsButton={optionsButtonBack}
            onPress={goScreenSelectPlayers}
          >
            Sair da partida
          </Button>
          
          <Button onPress={goScreenGame}>
            Vamos começar
          </Button>
        </AreaButtons>
      </Container>
    </AreaScreen>
  )
}

export default HomeScreen;