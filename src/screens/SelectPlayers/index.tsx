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

function SelectPlayersScreen() {
  const { 
    state, 
    changePlayerO, 
    changePlayerX,
    changeQuantityVictories
  } = useContextGame();

  const spaceBelowConfig = {
    below: 16
  };

  return (
    <AreaScreen>
      <Logo
        Src={ImageIconLogo}
        alt="Logo do aplicativo"
      />
      <Text>
        Digite o nome de cada jogador para criar a partida
      </Text>
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
          placeholder="Quantidade de vitórias"
          placeholderTextColor={convertOpacityColor(colors.secundary)}
          keyboardType={'numeric'}
        />
        <Button>
          Criar Partida
        </Button>
      </Form>
    </AreaScreen>
  )
}

export default SelectPlayersScreen;