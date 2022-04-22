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

