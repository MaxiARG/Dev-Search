import { styled, Text as TextTamagui  } from 'tamagui'

const Text = styled(TextTamagui,{
    fontSize: '$fontSize.md', 
    fontWeight: '400', 
    color: 'black',
    fontFamily: 'Roboto-Regular',
    variants: {
        link: {
            true: {
                fontSize: '$fontSize.md',
                color: 'blue',
            },
            false: {
                fontSize: '$fontSize.sm',
                color: 'black',
                fontFamily: 'Roboto-Regular',

            }
        }
    },
    defaultVariants: {
        link: false
    }
    
})

export default Text