import { Input } from 'tamagui';
import { useState } from 'react';
import InputContainer from '@atoms/Input/InputContainer.styled';
import { Icon } from '@atoms/Icon/Icon.styled';
import { sectionAtom } from '@molecules/Tabs/Tabs';
import { useSetAtom } from 'jotai/react';
import useSearchWithDebounce from './hooks/useSearchWithDebounce';

interface SearchInputProps {
  placeholder: string;
}
export function SearchInput({ placeholder }: SearchInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const setSelectedIndex = useSetAtom(sectionAtom);
  const { setText, text } = useSearchWithDebounce();

  return (
    <InputContainer focus={isFocused}>
      <Icon name="search" size={18} color="$color.placeholder" />
      <Input
        onChangeText={setText}
        onChange={(e) => {
          console.log('onChange', e.nativeEvent.text);
        }}
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
