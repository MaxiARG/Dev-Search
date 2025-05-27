import React from 'react';
import useGetUsers from '../../hooks/useGetUsers';
import HomeLoading from '../../loading/HomeLoading';
import ErrorScreen from '@atoms/Error/Error';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import UserRow from '@molecules/UserRow/UserRow';
import { FlatList } from 'react-native';
import { View } from 'tamagui';
import useSearchUserResultAtom from 'src/common-atoms/useSearchUserResultAtom';
import NoResultsFound from './NoResultsFound';

const MainUserList = () => {
  const { error, loading, userListAtom } = useGetUsers();
  const { searchResult } = useSearchUserResultAtom();

  if (searchResult?.result?.length === 0) return <NoResultsFound />;

  return (
    <>
      {loading && <HomeLoading />}
      {error && <ErrorScreen message={error?.message} />}
      {!loading && !error && userListAtom && userListAtom.length > 0 && (
        <Animated.View
          entering={FadeIn}
          exiting={FadeOut}
          style={{
            flex: 1,
            rowGap: 22,
            marginTop: 22,
          }}
        >
          {!loading && !error && userListAtom && userListAtom.length > 0 && (
            <Animated.View
              entering={FadeIn}
              exiting={FadeOut}
              style={{
                flex: 1,
                marginTop: 22,
              }}
            >
              <FlatList
                data={searchResult?.result || userListAtom}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <UserRow user={item} />}
                ItemSeparatorComponent={() => <View height={22} />}
                contentContainerStyle={{ paddingBottom: 22 }}
              />
            </Animated.View>
          )}
        </Animated.View>
      )}
    </>
  );
};

export default MainUserList;
