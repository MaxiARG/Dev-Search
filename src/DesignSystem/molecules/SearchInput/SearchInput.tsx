import { Input } from 'tamagui';
import { useState } from 'react';
import InputContainer from '@atoms/Input/InputContainer.styled';
import { Icon } from '@atoms/Icon/Icon.styled';
import useSearchWithDebounce from './hooks/useSearchWithDebounce';
import useSelectedTabSectionAtom from 'src/common-atoms/useSelectedTabSectionAtom';

interface SearchInputProps {
  placeholder: string;
}

export function SearchInput({ placeholder }: SearchInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const { setSelectedIndex } = useSelectedTabSectionAtom();
  const { setText, text } = useSearchWithDebounce({ debounceTime: 1000 });

  return (
    <InputContainer focus={isFocused}>
      <Icon name="search" size={18} color="$color.placeholder" />
      <Input
        onChangeText={setText}
        value={text}
        paddingVertical={0}
        height={30}
        placeholder={placeholder || 'Buscar usuarios de GitHub...'}
        placeholderTextColor="$color.placeholder"
        backgroundColor="transparent"
        color="$color.textPrimary"
        borderWidth={0}
        onFocus={() => {
          setSelectedIndex(0);
          setIsFocused(true);
        }}
        onBlur={() => setIsFocused(false)}
      />
    </InputContainer>
  );
}
