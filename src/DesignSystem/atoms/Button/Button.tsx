import Text from '@atoms/Text/Text';
import React from 'react';
import { Pressable } from 'react-native';

const Button: React.FC<ButtonProps> = ({ title = 'Not Impl', onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: pressed ? '#161b22' : '#0d1117',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: pressed ? '#58a6ff' : '#30363d',
        transform: pressed ? [{ scale: 0.97 }] : [{ scale: 1 }],
      })}
    >
      <Text fontSize={'$fontSize.sm'} color={'$accent'}>
        {title}
      </Text>
    </Pressable>
  );
};

export default Button;
