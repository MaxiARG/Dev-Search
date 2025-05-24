import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home/Home';
import { UserProfile } from '../Screens/UserProfile/UserProfile';
import { AppScreensParams } from './ScreenTypes';

const AppStack = createNativeStackNavigator<AppScreensParams>();

export default function RootStack() {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0d1117',
        },
        headerTintColor: '#c9d1d9',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 33,
        },
      }}
    >
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="UserProfile" component={UserProfile} />
    </AppStack.Navigator>
  );
}
