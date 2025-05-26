import { View } from 'react-native';
import React, { useState } from 'react';
import { Icon } from '@atoms/Icon/Icon.styled';

interface IconButtonProps
  extends Omit<React.ComponentProps<typeof Icon>, 'name'> {
  iconSelectedName: string;
  iconUnselectedName: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  onPress,
  color,
  iconSelectedName,
  iconUnselectedName,
  ...iconProps
}) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <View>
      <Icon
        onPress={(evt) => {
          setIsSelected((prev) => !prev);
          return onPress?.(evt);
        }}
        color={
          !isSelected
            ? (color ?? '$color.favoriteInactive')
            : '$color.favoriteInactive'
        }
        name={isSelected ? iconSelectedName : iconUnselectedName}
        {...iconProps}
      />
    </View>
  );
};

export default IconButton;
