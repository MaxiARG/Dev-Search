import { atom } from 'jotai/vanilla';
import { useAtom } from 'jotai/react';
import { GitHubUser } from 'src/types/types';

interface UserSearchResultAtom {
  result: GitHubUser[] | null;
}
export const defaultUserSearchResult: UserSearchResultAtom = {
  result: null,
};

export const userSearchResultAtom = atom<UserSearchResultAtom>(
  defaultUserSearchResult,
);

const useSearchUserResultAtom = () => {
  const [searchResult, setSearchResult] = useAtom(userSearchResultAtom);
  const setSearchResultWrapper = (newResult: GitHubUser[] | null) => {
    setSearchResult({ result: newResult });
  };
  return { searchResult, setSearchResult, setSearchResultWrapper };
};

export default useSearchUserResultAtom;
