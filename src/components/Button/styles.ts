import styled from "styled-components/native";
import colors from "../../styles/colors";

export type ButtonAreaProps = {
  backgroundColor?: string;
};

export const ButtonArea = styled.View<ButtonAreaProps>`
  width: 100%;
  height: 57px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.backgroundColor ? props.backgroundColor : colors.detach};

  border-radius: 10px;
`;