import { useAtom } from 'jotai/react';
import { atomWithStorage, createJSONStorage } from 'jotai/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type FavoriteUser = {
  id: string;
  login: string;
  avatar_url: string;
};

const favoriteUsersAtom = atomWithStorage<FavoriteUser[]>(
  'favorite_users',
  [],
  createJSONStorage(() => AsyncStorage),
);

const useFavoriteStorage = () => {
  const [favorites, setFavorites] = useAtom(favoriteUsersAtom);

  const isFavorite = (id: string) => {
    return favorites.some((user) => user.id === id);
  };

  const addFavorite = (user: FavoriteUser) => {
    if (!isFavorite(user.id)) {
      setFavorites([...favorites, user]);
    }
  };

  const removeFavorite = (id: string) => {
    setFavorites(favorites.filter((user) => user.id !== id));
  };

  const toggleFavorite = (user: FavoriteUser) => {
    if (isFavorite(user.id)) {
      removeFavorite(user.id);
    } else {
      addFavorite({
        id: user.id,
        login: user.login,
        avatar_url: user.avatar_url,
      });
    }
  };

  const updateFavorite = (user: FavoriteUser) => {
    toggleFavorite(user);
  };

  return {
    favorites,
    setFavorites,
    isFavorite,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    updateFavorite,
  };
};

export default useFavoriteStorage;
