import styled from "styled-components/native";
import colors from "../../styles/colors";

export type ButtonAreaProps = {
  backgroundColor?: string;
  border?: string;
  marginTop?: string | number;
  marginBottom?: string | number;
  marginLeft?: string | number;
  marginRight?: string | number;
  width?: string;
  height?: string;
  flex?: number;
};

export const ButtonArea = styled.View<ButtonAreaProps>`
  width: ${props => props.width && !props.flex ? props.width : '100%'};
  height: ${props => props.height && !props.flex ? props.height : '57px'};
  flex: ${props => props.flex ? props.flex : 'none'};

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.backgroundColor ? props.backgroundColor : colors.detach};

  margin-top: ${props => props.marginTop ? props.marginTop : 0}px;
  margin-bottom: ${props => props.marginBottom ? props.marginBottom : 0}px;
  margin-left: ${props => props.marginLeft ? props.marginLeft : 0}px;
  margin-right: ${props => props.marginRight ? props.marginRight : 0}px;

  border: ${props => props.border ? props.border : '0px'};
  border-radius: 10px;
`;