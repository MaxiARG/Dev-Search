import { View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Icon } from '@atoms/Icon/Icon.styled';
import useFavoriteStorage, {
  FavoriteUser,
} from 'src/Navigator/hooks/useFavoriteStorage';
import { GitHubUser } from 'src/types/types';

interface IconButtonProps
  extends Omit<React.ComponentProps<typeof Icon>, 'name'> {
  iconSelectedName: string;
  iconUnselectedName: string;
  user: FavoriteUser;
}

const IconButton: React.FC<IconButtonProps> = ({
  color,
  iconSelectedName,
  iconUnselectedName,
  user,
  ...iconProps
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const { isFavorite, updateFavorite } = useFavoriteStorage();

  useEffect(() => {
    const alreadySelected = isFavorite(user.id);
    setIsSelected(alreadySelected);
  }, [user.id, isFavorite]);

  const handlePress = (evt: any) => {
    updateFavorite(user);
    setIsSelected((prev) => !prev);
  };

  return (
    <View>
      <Icon
        onPress={handlePress}
        color={isSelected ? '$color.favoriteActive' : '$color.favoriteInactive'}
        name={isSelected ? iconSelectedName : iconUnselectedName}
        {...iconProps}
      />
    </View>
  );
};

export default IconButton;
