import styled from 'styled-components/native';

type AreaProps = {
  color: string;
}

export const Area = styled.View<AreaProps>`
  width: 100%;
  height: 125px;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  border: 2.5px solid ${props => props.color};
  border-radius: 10px;
`;

export const Column = styled.View`
  flex: 1;
  justify-content: center;
  align-items: stretch;
`;

type BoxProps = {
  line?: {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  },
  color: string;
  padding?: {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  };
}

export const Box = styled.View<BoxProps>`
  flex: 1;
  justify-content: center;
  align-items: center;

  border-top-width: ${props => props.line?.top ? `${props.line.top}px` : `0px`};
  border-bottom-width: ${props => props.line?.bottom ? `${props.line.bottom}px` : `0px`};
  border-left-width: ${props => props.line?.left ? `${props.line.left}px` : `0px`};
  border-right-width: ${props => props.line?.right ? `${props.line.right}px` : `0px`};
  border-color: ${props => props.color};

  padding: 8px 0px;
`;
