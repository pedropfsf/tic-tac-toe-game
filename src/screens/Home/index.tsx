import { AreaScreen, Container } from './styles';

import { StatusPlayer } from '../../components';
import { ImageIconLogo } from '../../assets';
import Logo from '../../components/Logo';

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
          typePlayer='player-x'
          color='red'
        />
      </Container>
    </AreaScreen>
  )
}

export default Home;