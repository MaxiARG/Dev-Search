import { View } from 'react-native';
import React from 'react';
import { Icon } from '@atoms/Icon/Icon.styled';

interface IconButtonProps {
  iconProps: React.ComponentProps<typeof Icon>;
  selected: boolean;
  iconSelectedName: string;
  iconUnselectedName: string;
}
const IconButton: React.FC<IconButtonProps> = ({
  iconProps,
  selected,
  iconSelectedName,
  iconUnselectedName,
}) => {
  return (
    <View>
      <Icon
        name={selected ? iconSelectedName : iconUnselectedName}
        // {...iconProps}
      />
    </View>
  );
};

export default IconButton;
