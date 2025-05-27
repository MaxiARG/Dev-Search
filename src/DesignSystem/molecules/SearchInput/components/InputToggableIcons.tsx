import React from 'react';
import { Icon } from '@atoms/Icon/Icon.styled';
import { View } from 'tamagui';

interface InputToggableIconsProps {
  clearText: () => void;
  textValue: string;
}
const InputToggableIcons: React.FC<InputToggableIconsProps> = ({
  clearText,
  textValue,
}) => {
  return (
    <View
      onPress={clearText}
      paddingVertical={5}
      paddingLeft={7}
      justifyContent="center"
    >
      {textValue && textValue?.length > 0 ? (
        <Icon name="close" size={20} color="$color.favoriteActive" />
      ) : (
        <Icon name="search" size={20} color="$color.placeholder" />
      )}
    </View>
  );
};

export default InputToggableIcons;
