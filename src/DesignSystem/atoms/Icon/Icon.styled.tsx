import React from 'react';
import IconIonic from '@expo/vector-icons/Ionicons';
import { styled } from 'tamagui';

// se sobreescribe 'name' para aceptar cualquier string
type LooseIconProps = Omit<React.ComponentProps<typeof IconIonic>, 'name'> & {
  name: string;
};

const IconBase = React.forwardRef<any, LooseIconProps>(
  ({ name, size, color, ...props }, ref) => {
    return (
      <IconIonic
        ref={ref}
        name={name as any}
        size={size}
        color={color}
        {...props}
      />
    );
  },
);

export const Icon = styled(IconBase);
