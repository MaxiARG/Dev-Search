import { FavoriteUser } from './hooks/useFavoriteStorage';

//Params passed through navigation.navigate('route', {here the params})
export type MainScreensParams = {
  Home: undefined;
  UserProfile: { user: FavoriteUser };
};

export type AppScreensParams = MainScreensParams;
