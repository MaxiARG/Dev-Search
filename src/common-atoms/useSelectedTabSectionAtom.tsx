import { atom } from 'jotai/vanilla';
import { useAtom } from 'jotai/react';

export const sectionAtom = atom(0);

const useSelectedTabSectionAtom = () => {
  const [selectedIndex, setSelectedIndex] = useAtom(sectionAtom);
  return { selectedIndex, setSelectedIndex };
};

export default useSelectedTabSectionAtom;
