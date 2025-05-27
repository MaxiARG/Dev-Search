import { styled, Text as TextTamagui } from 'tamagui';

const Text = styled(TextTamagui, {
  fontSize: '$size.sm',
  color: '$color.textPrimary',
  fontFamily: 'Roboto-Regular',
  numberOfLines: 2,
  textOverflow: 'ellipsis',
  variants: {
    solid: {
      true: {
        fontWeight: '800',
      },
      false: {
        fontWeight: '400',
      },
    },
    type: {
      title: {
        fontSize: '$fontSize.xl',
      },
      subtitle: {
        fontSize: '$fontSize.lg',
      },
      body: {
        fontSize: '$fontSize.md',
      },
      caption: {
        fontSize: '$fontSize.sm',
      },
    },
  },
  defaultVariants: {
    solid: false,
    type: 'body',
  },
});

export default Text;
