import React from 'react';
import IconIonic from '@expo/vector-icons/Ionicons';
import { styled } from 'tamagui';

// heredamos los tipos correctos de IconFA
type IconProps = React.ComponentProps<typeof IconIonic>;

const IconBase = React.forwardRef<any, IconProps>(
  ({ name, size, color, ...props }, ref) => {
    return (
      <IconIonic
        ref={ref}
        name={name}
        size={size}
        color={color}
        weight="solid"
        {...props}
      />
    );
  },
);
//wrapper para que los Icons de FA reconozcan tokens y colors
export const Icon = styled(IconBase);
