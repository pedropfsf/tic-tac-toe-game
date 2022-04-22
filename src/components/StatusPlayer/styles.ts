import styled from 'styled-components/native';

type AreaProps = {
  color: string;
}

export const Area = styled.View<AreaProps>`
  width: 100%;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  border: 2.5px solid ${props => props.color};
  border-radius: 10px;
`;

export const Column = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

type BoxProps = {
  line?: {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  },
  color: string;
}

export const Box = styled.View<BoxProps>`
  flex: 1;
  justify-content: center;
  align-items: center;

  border-top-width: ${props => props.line?.top ? `${props.line.top}px` : `2.5px`};
  border-bottom-width: ${props => props.line?.bottom ? `${props.line.bottom}px` : `2.5px`};
  border-left-width: ${props => props.line?.left ? `${props.line.left}px` : `2.5px`};
  border-right-width: ${props => props.line?.right ? `${props.line.right}px` : `2.5px`};
  border-color: ${props => props.color};

  padding: 24px;
`;
