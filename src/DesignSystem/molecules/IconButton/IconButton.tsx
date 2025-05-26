import { View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Icon } from '@atoms/Icon/Icon.styled';
import useFavoriteStorage from 'src/Navigator/hooks/useFavoriteStorage';

interface IconButtonProps
  extends Omit<React.ComponentProps<typeof Icon>, 'name'> {
  iconSelectedName: string;
  iconUnselectedName: string;
  id: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  color,
  iconSelectedName,
  iconUnselectedName,
  id,
  ...iconProps
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const { id_is_persisted, updateFavorite } = useFavoriteStorage();

  useEffect(() => {
    const alreadySelected = id_is_persisted(id);
    setIsSelected(alreadySelected);
  }, [id, id_is_persisted]);

  const handlePress = (evt: any) => {
    console.log('sssss');
    updateFavorite(id);
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
