import React from 'react'
import { View } from 'react-native'
import { LoginnTemplate } from '../../components/atomic/templates/Login'
import { styles } from './styles'

const LoginPage = () => {
    return (
        <View style={styles.container}>
            <LoginnTemplate />
        </View>
    )
}

export default LoginPage
