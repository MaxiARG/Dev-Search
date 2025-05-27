import { FlatList } from 'react-native';
import React from 'react';
import useFavoriteStorage from 'src/Navigator/hooks/useFavoriteStorage';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import UserRow from '@molecules/UserRow/UserRow';
import { View } from 'tamagui';
import EmptyFavs from 'assets/svgs/empty-favorites.svg';

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
      {!users ||
        (users?.length === 0 && (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <EmptyFavs width={100} height={100} />
            <Animated.Text
              entering={FadeIn}
              exiting={FadeOut}
              style={{ fontSize: 18, color: '#888' }}
            >
              No hay usuarios favoritos
            </Animated.Text>
          </View>
        ))}
    </>
  );
};

export default FavoriteList;
