import { Input } from 'tamagui';
import { useEffect, useState } from 'react';
import InputContainer from '@atoms/Input/InputContainer.styled';
import { Icon } from '@atoms/Icon/Icon.styled';
let debounceTimeout: ReturnType<typeof setTimeout>;

interface SearchInputProps {
  placeholder: string;
}
export function SearchInput() {
  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    if (text.length >= 3) {
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => {
        console.log('hola mundo');
      }, 500);
    }

    return () => clearTimeout(debounceTimeout);
  }, [text]);

  const test = () => {
    console.log('Working Test');
  };

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
