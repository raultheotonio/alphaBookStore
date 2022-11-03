import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { WelcomePage } from '../../pages/welcome'
import LoginPage from '../../pages/login'
import RegisterPage from '../../pages/register'

const Stack = createNativeStackNavigator()

const PublicNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
              options={{
                headerShown: false
              }}
              name="Welcome" component={WelcomePage} />
            <Stack.Screen               
              options={{
                headerShown: false
              }} 
              name="Login" component={LoginPage} />
            <Stack.Screen               
              options={{
                headerShown: false
              }} 
              name="Register" component={RegisterPage} />
        </Stack.Navigator>
    )
}

export default PublicNavigation
