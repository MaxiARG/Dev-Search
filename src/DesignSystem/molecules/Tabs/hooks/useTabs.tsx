import { useState } from 'react';
import useSelectedTabSectionAtom from 'src/common-atoms/useSelectedTabSectionAtom';

const useTabs = () => {
  const [tabWidths, setTabWidths] = useState<number[]>([]);
  const { selectedIndex, setSelectedIndex } = useSelectedTabSectionAtom();

  const handleLayout = (index: number, width: number) => {
    setTabWidths((prev) => {
      const newWidths = [...prev];
      newWidths[index] = width;
      return newWidths;
    });
  };

  return {
    tabWidths,
    setTabWidths,
    selectedIndex,
    setSelectedIndex,
    handleLayout,
  };
};

export default useTabs;
