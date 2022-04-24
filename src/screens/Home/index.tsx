import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import RootNativeStackParamsList from '../../types/RootNativeStackParamsList';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootNativeStackParamsList, 'Home'>;

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

function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { state } = useContextGame();

  function goSelectPlayers() {
    navigation.navigate('SelectPlayers');
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
            onPress={goSelectPlayers}
          >
            Voltar
          </Button>
          <Button>
            Vamos começar
          </Button>
        </AreaButtons>
      </Container>
    </AreaScreen>
  )
}

export default HomeScreen;