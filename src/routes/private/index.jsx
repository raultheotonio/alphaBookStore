import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import  HomePage from '../../pages/home'

const Tab = createBottomTabNavigator();

const PrivateNavigation = () => {

  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomePage} />
      </Tab.Navigator>
  );
}

export default PrivateNavigation;
