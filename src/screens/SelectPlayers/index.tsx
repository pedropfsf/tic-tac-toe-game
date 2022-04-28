import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Keyboard } from 'react-native';
import { useEffect, useState } from 'react';

import { 
  AreaScreen, 
  Form,
  Input 
} from './styles';

import { ImageIconLogo } from '../../assets';
import { Button, Logo, Text } from '../../components';
import { useContextGame } from '../../contexts/GameContext';
import colors from '../../styles/colors';
import spaceBelowConfig from '../../settings/inputSpaceBelowConfig'
import RootNativeStackParamsList from '../../types/RootNativeStackParamsList';
import convertOpacityColor from '../../utils/convertOpacityColor';
import verifyFieldsPlayers from '../../utils/verifyFieldsPlayers';
import setQuantityVictoriesDefault from '../../utils/setQuantityVictoriesDefault';

type SelectPlayersScreenNavigationProp = NativeStackNavigationProp<RootNativeStackParamsList, 'SelectPlayers'>;

function SelectPlayersScreen() {
  let [ hiddenElements, setHiddenElements ] = useState(false);

  useEffect(() => {
    const showKeyboard = Keyboard.addListener('keyboardDidShow', () => {
      setHiddenElements(true);
    });

    const hiddenKeyboard = Keyboard.addListener('keyboardDidHide', () => {
      setHiddenElements(false);
    });

    return () => {
      showKeyboard.remove();
      hiddenKeyboard.remove();
    }
  }, []);

  const { 
    state, 
    changePlayerO, 
    changePlayerX,
    changeQuantityVictories,
    resetTotal
  } = useContextGame();

  const navigation = useNavigation<SelectPlayersScreenNavigationProp>();
  
  function goScreenHome() {
    const isPassed = verifyFieldsPlayers(state);
    if(isPassed) {
      setQuantityVictoriesDefault(state, changeQuantityVictories);
      navigation.navigate('Home');
    }
  }

  navigation.addListener('focus', () => {
    resetTotal();
  });

  return (
    <AreaScreen>
      {
        hiddenElements
        ||
        (
        <>
          <Logo
            Src={ImageIconLogo}
            alt="Logo do aplicativo"
          />
          <Text>
            Digite o nome de cada jogador para criar a partida
          </Text>
        </>
        )
      }
      <Form>
        <Input
          space={spaceBelowConfig}
          color={colors.playerO}
          value={state.playerO.name}
          onChangeText={changePlayerO}
          placeholder="Nome do jogador O"
          placeholderTextColor={convertOpacityColor(colors.playerO)}
        />
        <Input
          space={spaceBelowConfig}
          color={colors.playerX}
          value={state.playerX.name}
          onChangeText={changePlayerX}
          placeholder="Nome do jogador X"
          placeholderTextColor={convertOpacityColor(colors.playerX)}
        />
        <Input
          space={spaceBelowConfig}
          color={colors.secundary}
          value={state.quantityVictories}
          onChangeText={changeQuantityVictories}
          placeholder="Quantidade de vitórias, 5 por padrão"
          placeholderTextColor={convertOpacityColor(colors.secundary)}
          keyboardType={'numeric'}
        />
        <Button onPress={goScreenHome}>
          Criar Partida
        </Button>
      </Form>
    </AreaScreen>
  )
}

export default SelectPlayersScreen;