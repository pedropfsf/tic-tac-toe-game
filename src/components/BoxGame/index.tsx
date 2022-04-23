import { AreaBoxGame, AreaBoxGameProps } from './styles';

type BoxGameProps = AreaBoxGameProps & {};

function BoxGame({ 
  borderTop, 
  borderBottom, 
  borderLeft, 
  borderRight 
}: BoxGameProps) {
  return (
    <AreaBoxGame
      borderTop={borderTop}
      borderBottom={borderBottom}
      borderLeft={borderLeft}
      borderRight={borderRight}
    >
    
    </AreaBoxGame>
  )
}

export default BoxGame;