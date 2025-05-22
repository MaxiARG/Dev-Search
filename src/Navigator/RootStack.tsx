import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Home/Home";
import { UserProfile } from "../Screens/UserProfile/UserProfile";
import { AppScreensParams } from "./ScreenTypes";
import {atomWithStorage} from 'jotai/utils'



const AppStack = createNativeStackNavigator<AppScreensParams>();

export default function RootStack() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="UserProfile" component={UserProfile} />
    </AppStack.Navigator>
  );
}