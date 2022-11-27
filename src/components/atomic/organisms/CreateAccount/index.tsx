import React from 'react'
import { View } from 'react-native'
import Logo from '../../atoms/Logo'
import { CreateAccountForm } from '../../molecules/CreateAccountForm'
import { styles } from './styles'

export const  CreateAccount = () => {

    return (
        <View style={styles.container}>
            <Logo type='red' />
            <CreateAccountForm/>
        </View>
    )
}