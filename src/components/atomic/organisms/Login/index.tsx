import React from 'react'
import { KeyboardAvoidingView, } from 'react-native'

import { LoginForm } from '../../molecules/LoginForm'
import Logo from '../../atoms/Logo'

const Login = () => {

    return (
        <KeyboardAvoidingView behavior="padding">
            <Logo type="red" />

            <LoginForm/>
        </KeyboardAvoidingView>
    )
}

export default Login