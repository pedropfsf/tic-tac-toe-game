import { Span, SpanProps } from "./styles";

type AditionalProps = {
  children: string | string[];
}

type TextProps = AditionalProps & SpanProps

function Text({ 
  children, 
  fontSize, 
  color 
}: TextProps) {
  return (
    <Span fontSize={fontSize} color={color}>
      { children }
    </Span>
  )
}

export default Text;

export {
  SpanProps
};