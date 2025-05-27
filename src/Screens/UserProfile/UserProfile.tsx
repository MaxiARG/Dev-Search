import MainContainer from '@atoms/Container/MainContainer';
import Text from '@atoms/Text/Text';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { View, Image, ScrollView } from 'tamagui';
import useUserDataFetching from './hooks/useUserDataFetching';
import Button from '@atoms/Button/Button';
import useConfigureScreen from '@common-hooks/useConfigureScreen';
import useFavoriteStorage from 'src/Navigator/hooks/useFavoriteStorage';

const str = {
  Repos: 'Repos',
  Followers: 'Followers',
  Following: 'Following',
};

export function UserProfile() {
  useConfigureScreen({ header_title: 'User' });
  const { loading, user } = useUserDataFetching();
  const { isFavorite, toggleFavorite } = useFavoriteStorage();
  const imgSize = 120;
  if (loading) {
    return <ActivityIndicator size="large" color="#2f81f7" />;
  }

  return (
    <MainContainer>
      <ScrollView backgroundColor="$colors.background" padding="$4">
        {/* Avatar y nombre */}
        <View alignItems="center" marginBottom="$4" rowGap={20}>
          <Image
            source={{ uri: user.avatar_url }}
            style={{ width: imgSize, height: imgSize, borderRadius: 60 }}
          />
          <Text
            type="title"
            color="$textPrimary"
            fontWeight="600"
            marginTop="$2"
          >
            {user.name || user.login}
          </Text>
          <Text color="$textSecondary" fontSize={16}>
            @{user.login}
          </Text>
          {user?.bio && (
            <Text
              color="$textSecondary"
              textAlign="center"
              marginTop="$2"
              fontSize={'$5'}
            >
              {user.bio}
            </Text>
          )}
          {user?.location && (
            <Text
              color="$textSecondary"
              marginTop="$2"
              fontSize={'$fontSize.md'}
            >
              Location: {user?.location}
            </Text>
          )}
          {user?.blog && (
            <Text
              color="$textSecondary"
              marginTop="$2"
              fontSize={'$fontSize.md'}
            >
              Blog: {user?.blog}
            </Text>
          )}
        </View>

        {/* Estadísticas con recuadro */}
        <View
          backgroundColor="$surface"
          borderRadius="$4"
          marginBottom="$margin.xs"
          marginTop="$margin.md"
          borderColor="$border"
          borderWidth={1}
          rowGap={'$gap.md'}
        >
          <View flexDirection="row" justifyContent="space-around">
            <View alignItems="center">
              <Text color="$textPrimary" fontSize={'$fontSize.xl'}>
                {user.public_repos}
              </Text>
              <Text color="$textSecondary" fontSize={'$fontSize.lg'}>
                {str.Repos}
              </Text>
            </View>
            <View alignItems="center">
              <Text color="$textPrimary" fontSize={'$fontSize.xl'}>
                {user.followers}
              </Text>
              <Text color="$textSecondary" fontSize={'$fontSize.lg'}>
                {str.Followers}
              </Text>
            </View>
            <View alignItems="center">
              <Text color="$textPrimary" fontSize={'$fontSize.xl'}>
                {user.following}
              </Text>
              <Text color="$textSecondary" fontSize={'$fontSize.lg'}>
                {str.Following}
              </Text>
            </View>
          </View>
        </View>

        {/* Botón de favorito */}
        <Button
          title={
            isFavorite(user.id) ? 'Quitar de favoritos' : 'Agregar a favoritos'
          }
          textColor={isFavorite(user.id) ? 'black' : 'white'}
          backgroundColor={isFavorite(user.id) ? '#f78166' : '#2f81f7'}
          borderRadius={4}
          justifyContent="center"
          alignItems="center"
          onPress={() => toggleFavorite(user)}
        />
      </ScrollView>
    </MainContainer>
  );
}
