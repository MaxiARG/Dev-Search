import { styled, Text as TextTamagui } from 'tamagui';

const Text = styled(TextTamagui, {
  fontSize: '$size.sm',
  color: '$color.textPrimary',
  fontFamily: 'Roboto-Regular',
  variants: {
    solid: {
      true: {
        fontWeight: '800',
      },
      false: {
        fontWeight: '400',
      },
    },
  },
  defaultVariants: {
    solid: false,
  },
});

export default Text;
