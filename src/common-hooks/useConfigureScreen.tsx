import { useLayoutEffect } from 'react';
import useGetNavigation from '@common-hooks/useGetNavigation';

interface ConfigureScreenProps {
  header_title?: string;
}
const useConfigureScreen = ({ header_title }: ConfigureScreenProps) => {
  const navigation = useGetNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: header_title,
    });
  }, []);

  return {};
};

export default useConfigureScreen;
