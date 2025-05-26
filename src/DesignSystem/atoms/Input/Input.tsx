import { Input as InputTamagui } from 'tamagui';
import { useState, useEffect } from 'react';
import InputContainer from '@atoms/Input/InputContainer.styled';

let debounceTimeout: ReturnType<typeof setTimeout>;

export function Input() {
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

  return (
    <InputContainer focus={isFocused}>
      <InputTamagui
        flex={1}
        value={text}
        onChangeText={setText}
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
