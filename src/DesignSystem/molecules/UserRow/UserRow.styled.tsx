import { styled, View } from 'tamagui';

const UserRowContainer = styled(View, {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  borderBottomWidth: 1,
  borderBottomColor: '$border',
  paddingHorizontal: '$padding.md',
});

export default UserRowContainer;
