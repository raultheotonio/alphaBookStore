import React from 'react'
import { View } from 'react-native'
import { WelcomeTemplate } from '../../components/atomic/templates/Welcome'
import { styles } from './styles'

export const WelcomePage = () => {
    return (
        <View style={styles.container}>
            <WelcomeTemplate />
        </View>
    )
}