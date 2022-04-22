import { Area, Box } from './styles';

import Text from '../Text';

type StatusPlayerProps = {
  namePlayer: string;
  typePlayer: 'player-x' | 'player-o'
  quantityVitory: number;
  color: string;
}

function StatusPlayer({ 
  namePlayer, 
  typePlayer, 
  quantityVitory, 
  color 
}: StatusPlayerProps) {
  return (
    <Area
      color={color}
    >
      <Box
        line={{
          top: 0,
        }}
        color={color}
      >
        <Text color={color}>{ namePlayer }</Text>
      </Box>
    </Area>
  )
}

export default StatusPlayer;