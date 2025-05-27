import { searchUsers } from '@api/users';
import { useEffect, useState } from 'react';
import useSearchUserResultAtom, {
  defaultUserSearchResult,
} from 'src/common-atoms/useSearchUserResultAtom';

let debounceTimeout: ReturnType<typeof setTimeout>;
interface UseSearchWithDebounceProps {
  debounceTime?: number;
}
const useSearchWithDebounce = ({
  debounceTime = 1000,
}: UseSearchWithDebounceProps) => {
  const [text, setText] = useState('');
  const { searchResult, setSearchResultWrapper } = useSearchUserResultAtom();

  useEffect(() => {
    if (text?.length >= 3) {
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => {
        searchUsers(text)
          .then((response) => {
            setSearchResultWrapper(response?.data?.items);
          })
          .catch((error) => {
            setSearchResultWrapper(defaultUserSearchResult?.result);
            console.error('Error fetching search results:', error);
          });
      }, debounceTime);
    } else {
      setSearchResultWrapper(defaultUserSearchResult?.result);
    }

    return () => clearTimeout(debounceTimeout);
  }, [text]);

  return { searchResult, text, setText };
};

export default useSearchWithDebounce;
