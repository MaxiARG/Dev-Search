import { useAtomValue, useSetAtom } from 'jotai/react';
import { atomWithStorage, createJSONStorage } from 'jotai/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

const favoriteIdsAtom = atomWithStorage<string[]>(
  'favorite_ids',
  [],
  createJSONStorage(() => AsyncStorage),
);

const useFavoriteStorage = () => {
  const favorite = useAtomValue(favoriteIdsAtom);
  const storeFavorites = useSetAtom(favoriteIdsAtom);

  useEffect(() => {
    console.log(favorite);
  }, [favorite]);

  const id_is_persisted = (id: string) => {
    return favorite.includes(id);
  };

  const addFavorite = (id: string) => {
    if (!favorite.includes(id)) {
      console.log('aassadada', id);
      storeFavorites([...favorite, id]);
    }
  };

  const removeFavorite = (id: string) => {
    storeFavorites(favorite.filter((favId) => favId !== id));
  };

  const toggleFavorite = (id: string) => {
    if (favorite.includes(id)) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };

  const updateFavorite = (id: string) => {
    if (id_is_persisted(id)) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };

  return {
    favorite,
    storeFavorites,
    id_is_persisted,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    updateFavorite,
  };
};

export default useFavoriteStorage;
