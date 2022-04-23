import { ButtonArea, ButtonAreaProps } from "./styles";

import Text, { SpanProps } from "../Text";

type OptionsButton = {
  colorButton: ButtonAreaProps['backgroundColor'];
  colorText: SpanProps['color'];
  sizeText: SpanProps['fontSize'];
};

type ButtonProps = {
  children: string | string[];
  optionsButton?: OptionsButton;
}

function Button({ children, optionsButton }: ButtonProps) {
  return (
    <ButtonArea
      backgroundColor={optionsButton?.colorButton}
    >
      <Text
        fontSize={optionsButton?.sizeText}
        color={optionsButton?.colorText}
      >
        { children }
      </Text>
    </ButtonArea>
  )
}

export default Button;