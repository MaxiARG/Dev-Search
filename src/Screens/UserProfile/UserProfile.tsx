import MainContainer from '@atoms/Container/MainContainer';
import Text from '@atoms/Text/Text';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { View, Image, ScrollView } from 'tamagui';
import useUserDataFetching from './hooks/useUserDataFetching';
import Button from '@atoms/Button/Button';
import useConfigureScreen from '@common-hooks/useConfigureScreen';

export function UserProfile() {
  const { loading, user, setFavorite, favorite } = useUserDataFetching();
  useConfigureScreen({ header_title: 'User' });

  if (loading) {
    return <ActivityIndicator size="large" color="#2f81f7" />;
  }

  return (
    <MainContainer>
      <ScrollView backgroundColor="#0d1117" padding="$4">
        {/* Avatar y nombre */}
        <View alignItems="center" marginBottom="$4" rowGap={20}>
          <Image
            source={{ uri: user.avatar_url }}
            style={{ width: 120, height: 120, borderRadius: 60 }}
          />
          <Text fontSize={24} color="#c9d1d9" fontWeight="600" marginTop="$2">
            {user.name || user.login}
          </Text>
          <Text color="#8b949e" fontSize={16}>
            @{user.login}
          </Text>
          {user.bio && (
            <Text
              color="#c9d1d9"
              textAlign="center"
              marginTop="$2"
              fontSize={'$5'}
            >
              {user.bio}
            </Text>
          )}
          {user.location && (
            <Text color="#8b949e" marginTop="$2">
              📍 {user.location}
            </Text>
          )}
        </View>

        {/* Estadísticas con recuadro */}
        <View
          backgroundColor="#161b22"
          borderRadius="$4"
          padding="$3"
          marginBottom="$4"
          borderColor="#30363d"
          borderWidth={1}
          rowGap={20}
        >
          <View flexDirection="row" justifyContent="space-around">
            <View alignItems="center">
              <Text color="#c9d1d9" fontWeight="600">
                {user.public_repos}
              </Text>
              <Text color="#8b949e">Repos</Text>
            </View>
            <View alignItems="center">
              <Text color="#c9d1d9" fontWeight="600">
                {user.followers}
              </Text>
              <Text color="#8b949e">Followers</Text>
            </View>
            <View alignItems="center">
              <Text color="#c9d1d9" fontWeight="600">
                {user.following}
              </Text>
              <Text color="#8b949e">Following</Text>
            </View>
          </View>
        </View>

        {/* Botón de favorito */}
        <Button
          title={favorite ? 'Quitar de favoritos' : 'Marcar como favorito'}
          backgroundColor={favorite ? '#f78166' : '#2f81f7'}
          color="#ffffff"
          borderRadius="$3"
          paddingVertical="$3"
          fontWeight="600"
          onPress={() => setFavorite((prev) => !prev)}
        />
      </ScrollView>
    </MainContainer>
  );
}
