import React from 'react';
import UserPictureProfile from '@molecules/UserPictureProfile.tsx/UserPictureProfile';
import IconButton from '@molecules/IconButton/IconButton';
import Button from '@atoms/Button/Button';
import UserRowContainer from './UserRow.styled';
import { View } from 'tamagui';
import { GitHubUser } from 'src/types/types';
import useGetNavigation from '@common-hooks/useGetNavigation';

export interface UserRowProps {
  user: GitHubUser;
}

const str = {
  buttonTitle: 'Ver detalle',
};

const UserRow: React.FC<UserRowProps> = ({ user }) => {
  const navigation = useGetNavigation();
  return (
    <UserRowContainer>
      <UserPictureProfile data={user} />
      <View flexDirection="row" alignItems="center" columnGap={'$gap.lg'}>
        <Button
          title={str.buttonTitle}
          onPress={() => navigation.navigate('UserProfile', { user: user })}
        />
        <IconButton
          // onPress={test}
          iconSelectedName="heart-outline"
          iconUnselectedName="heart-sharp"
          color={'$color.favoriteActive'}
          size={20}
        />
      </View>
    </UserRowContainer>
  );
};

export default UserRow;
