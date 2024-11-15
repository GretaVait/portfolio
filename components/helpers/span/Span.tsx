// Components
import Text, { TextProps } from '../text/Text'

const Span = ({
  variant = 'inherit',
  children,
  decoration,
  transform,
  textColor
}: TextProps) => {
  return (
    <Text
      tagName="span"
      variant={variant}
      decoration={decoration}
      transform={transform}
      textColor={textColor}
    >
      {children}
    </Text>
  )
}

export default Span
