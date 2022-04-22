import { 
  Button, 
  AreaScreen, 
  Input, 
  Form, 
  Text 
} from './styles';

import colors from '../../styles/colors';
import convertOpacityColor from '../../utils/convertOpacityColor';
import { Logo } from '../../components';
import { ImageIconLogo } from '../../assets';

function SelectPlayers() {
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
          placeholder="Nome do jogador O"
          placeholderTextColor={convertOpacityColor(colors.playerO)}
        />
        <Input
          space={spaceBelowConfig}
          color={colors.playerX}
          placeholder="Nome do jogador X"
          placeholderTextColor={convertOpacityColor(colors.playerX)}
        />
        <Input
          space={spaceBelowConfig}
          color={colors.secundary}
          placeholder="Quantidade de vitórias"
          placeholderTextColor={convertOpacityColor(colors.secundary)}
        />
        <Button>
          <Text>Criar Partida</Text>
        </Button>
      </Form>
    </AreaScreen>
  )
}

export default SelectPlayers;