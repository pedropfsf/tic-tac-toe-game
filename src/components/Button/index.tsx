import { ButtonArea, ButtonAreaProps } from "./styles";

import Text, { SpanProps } from "../Text";

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
        { children }
      </Text>
    </ButtonArea>
  )
}

export default Button;