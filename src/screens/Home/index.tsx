import { AreaScreen, Container } from './styles';

import { StatusPlayer, Text } from '../../components';
import { ImageIconLogo } from '../../assets';
import Logo from '../../components/Logo';
import colors from '../../styles/colors';

function Home() {
  return (
    <AreaScreen>
      <Logo
        Src={ImageIconLogo}
        alt="Logo do aplicativo"
      />
      <Container>
        <StatusPlayer
          namePlayer='Pedro'
          quantityVitory={2}
          typePlayer='Jogador X'
          color={colors.playerX}
        />
        <Text color={colors.detach}>VS</Text>
        <StatusPlayer
          namePlayer='Tiago'
          quantityVitory={2}
          typePlayer='Jogador O'
          color={colors.playerO}
        />
      </Container>
    </AreaScreen>
  )
}

export default Home;