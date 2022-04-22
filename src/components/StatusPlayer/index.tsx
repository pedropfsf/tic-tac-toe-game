import { Area } from './styles';

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

    </Area>
  )
}

export default StatusPlayer;