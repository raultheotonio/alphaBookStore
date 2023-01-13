import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../../pages/home';
import Icon from 'react-native-vector-icons/AntDesign';
import Themes from '../../Utils/Themes';

const Tab = createBottomTabNavigator();

const PrivateNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: Themes.colors.second,
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
        name="Home"
        component={HomePage}
      />
    </Tab.Navigator>
  );
};

export default PrivateNavigation;
