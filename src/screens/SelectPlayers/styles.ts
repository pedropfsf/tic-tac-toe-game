import { Dimensions } from 'react-native';
import Constants from 'expo-constants';
import styled from 'styled-components/native';

import colors from '../../styles/colors';

const PhoneWidth = Dimensions.get('window').width;
const barHeightSpace = Constants.statusBarHeight;

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;

  background-color: ${colors.background};

  padding-top: ${barHeightSpace + 24}px;
`;

type TextProps = {
  fontSize?: string | number;
}

export const Text = styled.Text<TextProps>`
  font-size: ${props => props.fontSize ? props.fontSize : 24}px;
  font-weight: bold;
  
  text-align: center;

  margin: 0 24px;

  color: ${colors.secundary};
`;

export const Form = styled.View`
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;

  width: ${PhoneWidth - 56}px;
  
  margin-bottom: 32px;
`;

type Space = {
  below?: string | number;
  above?: string | number;
}

type InputProps = {
  color: string;
  space?: Space;
};

export const Input = styled.TextInput<InputProps>`
  width: 100%;
  height: 57px;
  
  border: 2.5px solid ${props => props.color};
  border-radius: 10px;

  padding-left: 16px;
  margin-top: ${props => props.space?.above ? props.space.above : 0}px;
  margin-bottom: ${props => props.space?.below ? props.space.below : 0}px;
`;

type ButtonProps = {
  backgroundColor?: string;
};

export const Button = styled.View<ButtonProps>`
  width: 100%;
  height: 57px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.backgroundColor ? props.backgroundColor : colors.detach};

  border-radius: 10px;
`;