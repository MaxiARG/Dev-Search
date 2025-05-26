import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { GitHubUser } from 'src/types/types';
import { RouteProp, useRoute } from '@react-navigation/native';
import { MainScreensParams } from 'src/Navigator/ScreenTypes';
import { getUserByUsername } from '@api/users';

const useUserDataFetching = () => {
  const { user: username } = useRoute<RouteProp<MainScreensParams>>()
    .params as {
    user: GitHubUser;
  };
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    setLoading(true);
    getUserByUsername(username?.login)
      .then((data) => {
        setUser(data.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [username?.login]);

  return { loading, user, favorite, setFavorite };
};

export default useUserDataFetching;
