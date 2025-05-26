import React from 'react';
import { View } from 'tamagui';
import { DividerProps } from './Divider.types';

const Divider: React.FC<DividerProps> = ({ width, color }) => {
  return (
    <View
      width={width ?? '100%'}
      height={3}
      backgroundColor={color ?? '$border'}
    ></View>
  );
};

export default Divider;
