import { FlatList } from 'react-native';
import React from 'react';
import useFavoriteStorage from 'src/Navigator/hooks/useFavoriteStorage';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import UserRow from '@molecules/UserRow/UserRow';
import { View } from 'tamagui';

const FavoriteList = () => {
  const { favorites: users } = useFavoriteStorage();
  return (
    <>
      {users && users.length > 0 && (
        <Animated.View
          entering={FadeIn}
          exiting={FadeOut}
          style={{
            flex: 1,
            rowGap: 22,
            marginTop: 22,
          }}
        >
          {users && users.length > 0 && (
            <Animated.View
              entering={FadeIn}
              exiting={FadeOut}
              style={{
                flex: 1,
                marginTop: 22,
              }}
            >
              <FlatList
                data={users}
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

export default FavoriteList;
