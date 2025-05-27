import { TamaguiProvider } from 'tamagui';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import tamaguiConfig from './tamagui.config';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import RootStack from './src/Navigator/RootStack';
import useFontLoader from './src/common-hooks/useFontLoader';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#0d1117',
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
