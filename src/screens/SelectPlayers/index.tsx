import { Container } from './styles';
import { Logo } from '../../components';
import { ImageIconLogo } from '../../assets';

function SelectPlayers() {

  return (
    <Container >
      <Logo
        Src={ImageIconLogo}
        alt="Logo do aplicativo"
      />
    </Container>
  )
}

export default SelectPlayers;