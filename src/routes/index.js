import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PublicNavigation from './public';
import PrivateNavigation from './private';
import CustomTheme from '../Utils/Navigation/Theme';
const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer theme={CustomTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="publicNavigation" component={PublicNavigation} />
        <Stack.Screen name="privateNavigation" component={PrivateNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
