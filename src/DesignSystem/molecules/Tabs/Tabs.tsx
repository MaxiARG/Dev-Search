import Text from '@atoms/Text/Text';
import React from 'react';
import TabsContainer from './TabsContainer.styled';
import Divider from '@atoms/Divider/Divider';
import { View } from 'tamagui';
import SectionContainer from './SectionContainer.tsx/SectionContainer.styled';
import useTabs from './hooks/useTabs';

const str = {
  search: 'Buscar',
  favorites: 'Favoritos',
};

const Tabs = () => {
  const { handleLayout, selectedIndex, setSelectedIndex, tabWidths } =
    useTabs();
  return (
    <View rowGap={'$gap.xxxs'}>
      <TabsContainer>
        <SectionContainer>
          <Text
            color={selectedIndex === 0 ? '$color.accent' : '$color.textPrimary'}
            solid={selectedIndex === 0}
            onLayout={(e) => {
              handleLayout(0, e.nativeEvent.layout.width);
            }}
            onPress={() => setSelectedIndex(0)}
            type="subtitle"
          >
            {str.search}
          </Text>
          <Divider
            width={selectedIndex === 0 ? tabWidths[0] || 0 : 0}
            color={selectedIndex === 0 ? '$accent' : '$border'}
          />
        </SectionContainer>

        <SectionContainer>
          <Text
            type="subtitle"
            color={selectedIndex === 1 ? '$color.accent' : '$color.textPrimary'}
            solid={selectedIndex === 1}
            onLayout={(e) => {
              handleLayout(1, e.nativeEvent.layout.width);
            }}
            onPress={() => setSelectedIndex(1)}
          >
            {str.favorites}
          </Text>
          <Divider
            width={selectedIndex === 1 ? tabWidths[1] || 0 : 0}
            color={selectedIndex === 1 ? '$accent' : '$border'}
          />
        </SectionContainer>
      </TabsContainer>
      <Divider />
    </View>
  );
};

export default Tabs;
