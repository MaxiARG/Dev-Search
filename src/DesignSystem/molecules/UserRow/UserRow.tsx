import React from 'react';
import UserPictureProfile from '@atoms/UserPictureProfile.tsx/UserPictureProfile';
import IconButton from '@molecules/IconButton/IconButton';
import Button from '@atoms/Button/Button';
import UserRowContainer from './UserRow.styled';
import { View } from 'tamagui';
import { GitHubUser } from 'src/types/types';

export interface UserRowProps {
  user: GitHubUser;
}

const UserRow: React.FC<UserRowProps> = ({ user }) => {
  return (
    <UserRowContainer>
      <UserPictureProfile data={user} />
      <View flexDirection="row" alignItems="center" columnGap={'$gap.lg'}>
        <Button
          title="Ver detalle"
          onPress={() => {
            console.log('first');
          }}
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
