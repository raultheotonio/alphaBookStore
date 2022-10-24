import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { WelcomePage } from '../../pages/welcome'
import LoginPage from '../../pages/login'
import RegisterPage from '../../pages/register'

const Stack = createNativeStackNavigator()

const PublicNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={WelcomePage} />
            <Stack.Screen name="Login" component={LoginPage} />
            <Stack.Screen name="Register" component={RegisterPage} />
        </Stack.Navigator>
    )
}

export default PublicNavigation
