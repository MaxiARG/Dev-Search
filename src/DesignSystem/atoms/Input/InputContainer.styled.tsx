import { styled, XStack } from 'tamagui'

const InputContainer = styled(XStack, {
    borderWidth: 1,
    backgroundColor: "$color.surface",
    borderRadius: "$radius.md",
    paddingHorizontal: "$padding.sm",
    paddingVertical: "$padding.md",
    variants: {
        focus: {
            true: {
                borderColor: '$color.accent',
            },
            false: {
                borderColor: '$color.border',
            }
        },
        defaultVariants: {
            focus: false

        }
    }
})

export default InputContainer