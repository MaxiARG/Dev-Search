import { Input } from 'tamagui';
import { useState } from 'react';
import InputContainer from '@atoms/Input/InputContainer.styled';
import useSearchWithDebounce from './hooks/useSearchWithDebounce';
import useSelectedTabSectionAtom from 'src/common-atoms/useSelectedTabSectionAtom';
import InputToggableIcons from '@molecules/SearchInput/components/InputToggableIcons';

interface SearchInputProps {
  placeholder: string;
}

export function SearchInput({ placeholder }: SearchInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const { setSelectedIndex } = useSelectedTabSectionAtom();
  const { setText, text } = useSearchWithDebounce({ debounceTime: 1000 });

  return (
    <InputContainer focus={isFocused}>
      <InputToggableIcons textValue={text} clearText={() => setText('')} />
      <Input
        onChangeText={setText}
        value={text}
        autoComplete="off"
        autoCorrect={false}
        autoCapitalize="none"
        spellCheck={false}
        paddingVertical={0}
        height={30}
        placeholder={placeholder || 'Buscar usuarios de GitHub...'}
        placeholderTextColor="$color.placeholder"
        backgroundColor="transparent"
        color="$color.textPrimary"
        borderWidth={0}
        fontSize={'$fontSize.md'}
        onFocus={() => {
          setSelectedIndex(0);
          setIsFocused(true);
        }}
        onBlur={() => setIsFocused(false)}
      />
    </InputContainer>
  );
}
