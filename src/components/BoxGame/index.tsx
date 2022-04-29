
import { GestureResponderEvent } from 'react-native';
import { ImageIconPlayerO, ImageIconPlayerX } from '../../assets';
import { 
  AreaBoxGame, 
  AreaBoxGameProps, 
  AreaBoxClickable 
} from './styles';

type BoxGameProps = AreaBoxGameProps & {
  value: 'x' | 'o' | '';
  onPress?: (event: GestureResponderEvent) => void;
};

function selectImage(value: BoxGameProps['value']) {
  switch(value) {
    case 'o':
      return <ImageIconPlayerO/>
    
    case 'x':
      return <ImageIconPlayerX/>
    
    default:
      return null;
  }
}

function BoxGame({ 
  borderTop, 
  borderBottom, 
  borderLeft, 
  borderRight,
  value,
  onPress
}: BoxGameProps) {


  return (
    <AreaBoxClickable
      onPress={onPress}
    >
      <AreaBoxGame
        borderTop={borderTop}
        borderBottom={borderBottom}
        borderLeft={borderLeft}
        borderRight={borderRight}
      >
        { selectImage(value) }
      </AreaBoxGame>
    </AreaBoxClickable>
  )
}

export default BoxGame;