import Text from '@atoms/Text/Text';
import React from 'react';
import { GitHubUser } from 'src/types/types';
import { View } from 'tamagui';

interface UserPictureProfileProps {
  data?: GitHubUser;
}
const UserPictureProfile: React.FC<UserPictureProfileProps> = ({
  data,
  ...props
}) => {
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
          width={60}
          height={60}
          borderRadius={25}
          backgroundColor={'$color.placeholder'}
        ></View>
        <Text color={'$color.textPrimary'} fontSize={'$fontSize.lg'}>
          {data?.login}
        </Text>
      </View>
    </View>
  );
};

export default UserPictureProfile;
