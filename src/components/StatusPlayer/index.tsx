import { Area, Box, Column } from './styles';

import Text from '../Text';

type StatusPlayerProps = {
  namePlayer: string;
  typePlayer: 'Jogador X' | 'Jogador O'
  quantityVitory: number;
  color: string;
}

function StatusPlayer({ 
  namePlayer, 
  typePlayer, 
  quantityVitory, 
  color 
}: StatusPlayerProps) {
  function setLimitSizeText(name: string) {
    return (
      name.length > 7
      ?
      16
      :
      24
    )
  }

  return (
    <Area color={color}>
      <Column>
        <Box
          line={{ right: 2.5 }}
          color={color}
        >
          <Text 
            color={color}
            fontSize={setLimitSizeText(namePlayer)}
          >
            { namePlayer }
          </Text>
        </Box>
      </Column>
      <Column>
        <Box
          line={{ bottom: 2.5 }}
          color={color}
        >
          <Text 
            color={color}
            fontSize={16}
          >
            { typePlayer }
          </Text>
        </Box>
        <Box
          color={color}
        >
          <Text 
            color={color}
            fontSize={16}
          >
            { String(quantityVitory) } Vitórias
          </Text>
        </Box>
      </Column>
    </Area>
  )
}

export default StatusPlayer;