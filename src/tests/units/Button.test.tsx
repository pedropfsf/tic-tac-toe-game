import styled from 'styled-components/native';
import { render } from '@testing-library/react-native';

import colors from '../../styles/colors';

import Text, { SpanProps } from '../../components/Text';

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

type OptionsButton = {
  colorButton?: ButtonAreaProps['backgroundColor'];
  BorderButton?: ButtonAreaProps['border'];
  colorText?: SpanProps['color'];
  sizeText?: SpanProps['fontSize'];
  marginTopButton?: ButtonAreaProps['marginTop'];
  marginBottomButton?: ButtonAreaProps['marginBottom'];
  marginLeftButton?: ButtonAreaProps['marginLeft'];
  marginRightButton?: ButtonAreaProps['marginRight'];
  marginTotalText?: SpanProps['margin'];
  widthButton?: ButtonAreaProps['width'];
  heightButton?: ButtonAreaProps['height'];
  flexButton?: ButtonAreaProps['flex'];
};

function createConfigButtonLength(prop: 'width' | 'height') {
  return (props: ButtonAreaProps) => {
    if (props[prop]) {
      return props[prop];
    } else if (props.flex) {
      return 'auto'
    } else {
      return '100%'
    }
  }
}

const ButtonArea = styled.View<ButtonAreaProps>`
  width: ${createConfigButtonLength('width')};
  height: ${createConfigButtonLength('height')};
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



type ButtonProps = {
  children: string | string[];
  optionsButton?: OptionsButton;
}

function Button({ children, optionsButton }: ButtonProps) {
  return (
    <ButtonArea
      backgroundColor={optionsButton?.colorButton}
      border={optionsButton?.BorderButton}
      marginBottom={optionsButton?.marginBottomButton}
      marginTop={optionsButton?.marginTopButton}
      marginLeft={optionsButton?.marginLeftButton}
      marginRight={optionsButton?.marginRightButton}
      width={optionsButton?.widthButton}
      height={optionsButton?.heightButton}
      flex={optionsButton?.flexButton}
    >
      <Text
        fontSize={optionsButton?.sizeText}
        color={optionsButton?.colorText}
        margin={optionsButton?.marginTotalText}
      >
        {children}
      </Text>
    </ButtonArea>
  )
}

describe('Test Unit in button component', () => {

  test('When applying setting for flex on button, remove width and height automatically', () => {
    // SET
    const CONFIGURATION_FLEX_BUTTON = {
      flexButton: 1
    };

    // ACT
    const result = render(
      <Button
        optionsButton={CONFIGURATION_FLEX_BUTTON}
      >
        Clique me
      </Button>
    ).toJSON();

    // ASSERT
    expect(result).toMatchSnapshot();
  });

  test('When applying configuration for width and height on button, remove flex configuration automatically', () => {
    // SET
    const CONFIGURATION_WIDTH_HEIGHT_BUTTON = {
      widthButton: '70%',
      heightButton: '70px'
    }

    // ACT
    const result = render(
      <Button
        optionsButton={CONFIGURATION_WIDTH_HEIGHT_BUTTON}
      >
        Clique me
      </Button>
    ).toJSON();

    // ASSERT
    expect(result).toMatchSnapshot();
  });
});