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

function HomeScreen() {
  return (
    <AreaScreen>
      <Logo
        Src={ImageIconLogo}
        alt="Logo do aplicativo"
      />
      <Container>
        <AreaStatusPlayers>
          <StatusPlayer
            namePlayer='Pedro'
            quantityVitory={2}
            typePlayer='Jogador X'
            color={colors.playerX}
          />
          <Text 
            color={colors.detach}
            margin="8px"
          >VS</Text>
          <StatusPlayer
            namePlayer='Tiago'
            quantityVitory={2}
            typePlayer='Jogador O'
            color={colors.playerO}
          />
        </AreaStatusPlayers>
        <AreaButtons>
          <Button optionsButton={{
            colorButton: 'transparent',
            BorderButton: `2.5px solid ${colors.secundary}`,
            marginBottomButton: 16
          }}>
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