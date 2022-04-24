import styled from "styled-components/native";

import colors from "../../styles/colors";

export type AreaBoxGameProps = {
  borderTop?: number;
  borderBottom?: number;
  borderLeft?: number;
  borderRight?: number;
}

export const AreaBoxGame = styled.View<AreaBoxGameProps>`
  flex: 1;
  justify-content: center;
  align-items: center;
  
  border-color: ${colors.secundary};
  border-top-width: ${props => props.borderTop ? props.borderTop : '0'}px;
  border-bottom-width: ${props => props.borderBottom ? props.borderBottom : '0'}px;
  border-left-width: ${props => props.borderLeft ? props.borderLeft : '0'}px;
  border-right-width: ${props => props.borderRight ? props.borderRight : '0'}px;
  `;

export const AreaBoxClickable = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: stretch;
`;