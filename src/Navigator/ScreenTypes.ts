import { GitHubUser } from 'src/types/types';

//Params passed through navigation.navigate('route', {here the params})
export type MainScreensParams = {
  Home: undefined;
  UserProfile: { user: GitHubUser };
};

export type AppScreensParams = MainScreensParams;
