import styled from 'styled-components/native';

import colors from '../../styles/colors';

export type SpanProps = {
  fontSize?: string | number;
  color?: string;
  margin?: string;
}

export const Span = styled.Text<SpanProps>`
  font-size: ${props => props.fontSize ? props.fontSize : 24}px;
  font-weight: bold;
  
  text-align: center;

  margin: ${props => props.margin ? props.margin : '0 24px'};

  color: ${props => props.color ? props.color : colors.secundary};
`;