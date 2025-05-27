import { TamaguiProvider } from 'tamagui';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import tamaguiConfig from './tamagui.config';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import RootStack from './src/Navigator/RootStack';
import useFontLoader from './src/common-hooks/useFontLoader';
import { colors } from 'src/DesignSystem/core/colors';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.background,
  },
};

export default function App() {
  const fonts = useFontLoader();
  if (!fonts) return null;

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <GestureHandlerRootView>
        <NavigationContainer theme={MyTheme}>
          <RootStack />
        </NavigationContainer>
      </GestureHandlerRootView>
    </TamaguiProvider>
  );
}
