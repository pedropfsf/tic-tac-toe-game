import { SvgProps } from 'react-native-svg';
import { TextAlternative } from './styles';

type LogoProps = {
  Src: React.FC<SvgProps>;
  alt: string;
};

function Logo({ Src, alt }: LogoProps) {
  if(Src) {
    return <Src/>;
  } 
  
  return (
    <TextAlternative>
      { alt }
    </TextAlternative>
  );
}

export default Logo;