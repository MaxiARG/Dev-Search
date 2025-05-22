import { TamaguiProvider } from 'tamagui'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import tamaguiConfig from './tamagui.config';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/Navigator/RootStack';
import useFontLoader from './src/common-hooks/useFontLoader';

export default function App() {
  const fonts = useFontLoader();
  if (!fonts) return null;

  return (
    <TamaguiProvider config={tamaguiConfig} >
      <GestureHandlerRootView>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </GestureHandlerRootView>
    </TamaguiProvider>
  )
}

