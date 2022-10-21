import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PublicNavigation from './public'
import PrivateNavigation from './private'

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="PublicNavigation" component={PublicNavigation} />
        <Stack.Screen name="PrivateNavigation" component={PrivateNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
