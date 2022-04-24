import { useEffect, useState } from 'react';
import { Alert, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { 
  AreaScreen, 
  Input, 
  Form 
} from './styles';

import colors from '../../styles/colors';
import convertOpacityColor from '../../utils/convertOpacityColor';
import { Button, Logo, Text } from '../../components';
import { ImageIconLogo } from '../../assets';
import { useContextGame } from '../../contexts/GameContext';
import RootNativeStackParamsList from '../../types/RootNativeStackParamsList';

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
    changeQuantityVictories
  } = useContextGame();

  const navigation = useNavigation<SelectPlayersScreenNavigationProp>();

  const spaceBelowConfig = {
    below: 16
  };

  function goScreenHome() {
    if(!state.playerO.name || !state.playerX.name) {
      Alert.alert('Preencha os campos', 'Campo do jogador X e jogador O estão vazios')
    } else {
      changeQuantityVictories('5');

      navigation.navigate('Home');
    }
  }

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
        <Button
          onPress={goScreenHome}
        >
          Criar Partida
        </Button>
      </Form>
    </AreaScreen>
  )
}

export default SelectPlayersScreen;