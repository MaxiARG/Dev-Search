import { config } from '@tamagui/config/v3'
import { createTamagui } from 'tamagui'
import { tokens } from './src/DesignSystem/core/tokens'

export const tamaguiConfig = createTamagui({...config, tokens})

export default tamaguiConfig

export type Conf = typeof tamaguiConfig

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}