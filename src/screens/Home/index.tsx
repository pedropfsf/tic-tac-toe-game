import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import RootNativeStackParamsList from '../../types/RootNativeStackParamsList';

import { 
  AreaScreen, 
  Container, 
  AreaStatusPlayers, 
  AreaButtons 
} from './styles';

import { StatusPlayer, Text, Button } from '../../components';
import { ImageIconLogo } from '../../assets';
import Logo from '../../components/Logo';
import colors from '../../styles/colors';
import { useContextGame } from '../../contexts/GameContext';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootNativeStackParamsList, 'Home'>;

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
            optionsButton={{
              colorButton: 'transparent',
              BorderButton: `2.5px solid ${colors.secundary}`,
              marginBottomButton: 16
            }}
            onPress={goScreenSelectPlayers}
          >
            Voltar
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