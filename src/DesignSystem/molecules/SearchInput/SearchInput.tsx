import { Input } from 'tamagui';
import { useState } from 'react';
import InputContainer from '@atoms/Input/InputContainer.styled';
import { Icon } from '@atoms/Icon/Icon.styled';
interface SearchInputProps {
  placeholder: string;
}
export function SearchInput() {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <InputContainer focus={isFocused}>
      <Icon name="search" size={18} color="$color.placeholder" />
      <Input
        flex={1}
        placeholder="Buscar usuarios de GitHub..."
        placeholderTextColor="$color.placeholder"
        backgroundColor="transparent"
        color="$color.textPrimary"
        borderWidth={0}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </InputContainer>
  );
}
