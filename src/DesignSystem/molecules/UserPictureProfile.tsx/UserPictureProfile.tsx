import Text from '@atoms/Text/Text';
import React from 'react';
import { FavoriteUser } from 'src/Navigator/hooks/useFavoriteStorage';
import { GitHubUser } from 'src/types/types';
import { Image, View } from 'tamagui';

interface UserPictureProfileProps {
  data?: FavoriteUser;
}
const UserPictureProfile: React.FC<UserPictureProfileProps> = ({
  data,
  ...props
}) => {
  const imgSize = 60;
  const borderRadius = 25;
  return (
    <View
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      flex={1}
    >
      <View
        flexDirection="row"
        alignItems="center"
        flex={1}
        columnGap={'$margin.xxl'}
      >
        <View
          width={imgSize}
          height={imgSize}
          borderRadius={borderRadius}
          backgroundColor={'$color.placeholder'}
        >
          <Image
            src={data?.avatar_url}
            width={imgSize}
            height={imgSize}
            borderRadius={borderRadius}
            alt={data?.login}
            objectFit="cover"
          />
        </View>
        <Text color={'$color.textPrimary'} fontSize={'$fontSize.lg'}>
          {data?.login}
        </Text>
      </View>
    </View>
  );
};

export default UserPictureProfile;
