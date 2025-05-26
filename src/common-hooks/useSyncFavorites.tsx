import { useAtom } from 'jotai/react';
import { atomWithStorage } from 'jotai/utils';

const favoritesAtom = atomWithStorage('UnaKey', 'UnValue');

const useSyncFavorites = () => {
  const [favorites, setFavorites] = useAtom(favoritesAtom);

  return { favorites, setFavorites };
};

export default useSyncFavorites;
