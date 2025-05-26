import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AppScreensParams, MainScreensParams } from 'src/Navigator/ScreenTypes';

/**
 * Return a correctly typed navigator
 * @returns Return a correctly typed navigator
 */
const useGetNavigation = () => {
  const navigation = useNavigation<NavigationProp<MainScreensParams>>();
  return navigation;
};

export default useGetNavigation;
