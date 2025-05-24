
import { Input } from 'tamagui'
import { useState } from 'react'
import InputContainer from '@atoms/Input/InputContainer.styled'

export function SearchInput() {
  const [isFocused, setIsFocused] = useState(false)
  return (
    <InputContainer focus={isFocused}>
      <Input
        flex={1}
        placeholder="Buscar usuarios de GitHub..."
        placeholderTextColor= '$color.placeholder'
        backgroundColor="transparent"
        color="$color.textPrimary"
        borderWidth={0}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </InputContainer>
  )
}
