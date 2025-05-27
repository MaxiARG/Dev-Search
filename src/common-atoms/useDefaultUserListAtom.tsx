import { useAtom } from 'jotai/react';
import { GitHubUser } from 'src/types/types';
import { atom } from 'jotai/vanilla';

const defaultUserListAtom = atom([] as GitHubUser[]);

const useDefaultUserListAtom = () => {
  const [userListAtom, setDefaultUserListAtom] = useAtom(defaultUserListAtom);
  return { userListAtom, setDefaultUserListAtom };
};

export default useDefaultUserListAtom;
