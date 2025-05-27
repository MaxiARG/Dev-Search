import { useEffect, useState } from 'react';

let debounceTimeout: ReturnType<typeof setTimeout>;

const useSearchWithDebounce = () => {
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

  return {
    text,
    setText,
  };
};

export default useSearchWithDebounce;
