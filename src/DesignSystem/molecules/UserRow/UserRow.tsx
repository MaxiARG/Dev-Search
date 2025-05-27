import React from 'react';
import UserPictureProfile from '@molecules/UserPictureProfile.tsx/UserPictureProfile';
import IconButton from '@molecules/IconButton/IconButton';
import Button from '@atoms/Button/Button';
import UserRowContainer from './UserRow.styled';
import { View } from 'tamagui';
import useGetNavigation from '@common-hooks/useGetNavigation';
import { FavoriteUser } from 'src/Navigator/hooks/useFavoriteStorage';

export interface UserRowProps {
  user: FavoriteUser;
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
          user={user}
          paddingVertical={'$padding.lg'}
          paddingHorizontal={'$padding.xs'}
          iconSelectedName="heart-sharp"
          iconUnselectedName="heart-outline"
          color={'$color.favoriteActive'}
          size={20}
        />
      </View>
    </UserRowContainer>
  );
};

export default UserRow;
