import Text from '@atoms/Text/Text';
import React, { useState } from 'react';
import TabsContainer from './TabsContainer.styled';
import Divider from '@atoms/Divider/Divider';
import { View } from 'tamagui';
import SectionContainer from './SectionContainer.tsx/SectionContainer.styled';
import useSelectedTabSectionAtom from 'src/common-atoms/useSelectedTabSectionAtom';

const str = {
  search: 'Buscar',
  favorites: 'Favoritos',
};

const Tabs = () => {
  const [tabWidths, setTabWidths] = useState<number[]>([]);
  const { selectedIndex, setSelectedIndex } = useSelectedTabSectionAtom();

  const handleLayout = (index: number, width: number) => {
    setTabWidths((prev) => {
      const newWidths = [...prev];
      newWidths[index] = width;
      return newWidths;
    });
  };

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
