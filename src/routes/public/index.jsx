import React from 'react'
import LoginPage from '../../pages/login'
import RegisterPage from '../../pages/register'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const PublicNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginPage} />
            <Stack.Screen name="Register" component={RegisterPage} />
        </Stack.Navigator>
    )
}

export default PublicNavigation
