import { 
  ButtonArea, 
  ButtonAreaProps, 
  ClickableArea,
  ClickableAreaProps
} from "./styles";

import Text, { SpanProps } from "../Text";

type OptionsButton = {
  colorButton?: ButtonAreaProps['backgroundColor'];
  BorderButton?: ButtonAreaProps['border'];
  colorText?: SpanProps['color'];
  sizeText?: SpanProps['fontSize'];
  marginTopButton?: ClickableAreaProps['marginTop'];
  marginBottomButton?: ClickableAreaProps['marginBottom'];
  marginLeftButton?: ClickableAreaProps['marginLeft'];
  marginRightButton?: ClickableAreaProps['marginRight'];
  marginTotalText?: SpanProps['margin'];
  widthButton?: ClickableAreaProps['width'];
  heightButton?: ClickableAreaProps['height'];
  flexButton?: ClickableAreaProps['flex'];
};

type ButtonProps = {
  children: string | string[];
  optionsButton?: OptionsButton;
  onPress?: () => void;
}

function Button({ 
  children, 
  optionsButton, 
  onPress 
}: ButtonProps) {
  return (
    <ClickableArea
      onPress={onPress}
      marginBottom={optionsButton?.marginBottomButton}
      marginTop={optionsButton?.marginTopButton}
      marginLeft={optionsButton?.marginLeftButton}
      marginRight={optionsButton?.marginRightButton}
      width={optionsButton?.widthButton}
      height={optionsButton?.heightButton}
      flex={optionsButton?.flexButton}
    >
      <ButtonArea
        backgroundColor={optionsButton?.colorButton}
        border={optionsButton?.BorderButton}
      >
        <Text
          fontSize={optionsButton?.sizeText}
          color={optionsButton?.colorText}
          margin={optionsButton?.marginTotalText}
        >
          { children }
        </Text>
      </ButtonArea>
    </ClickableArea>
  )
}

export default Button;