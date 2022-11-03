import React, {useState} from 'react'
import { Image, KeyboardAvoidingView, } from 'react-native'

import { styles } from './styles'
import { LoginForm } from '../../molecules/LoginForm'

const Login = () => {

    const Logo = () => {

        return (
            <Image 
                style={styles.logo}
                source={require('../../../../../assets/image/logoRed.png')} 
            />
        )
    }



    return (
        <KeyboardAvoidingView behavior="padding">
            {Logo()}
            <LoginForm/>
        </KeyboardAvoidingView>
    )
}

export default Login