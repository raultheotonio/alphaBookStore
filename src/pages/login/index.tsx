import React from 'react'
import { View } from 'react-native'
import Login from '../../components/atomic/organisms/Login'
import { styles } from './styles'

const LoginPage = () => {
    return (
        <View style={styles.container}>
            <Login/>
        </View>
    )
}

export default LoginPage
