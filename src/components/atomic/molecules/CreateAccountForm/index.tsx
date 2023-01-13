import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { Input } from '../../atoms/Input'
import { Button } from '../../atoms/Button'

export const CreateAccountForm = () => {
    const navigation = useNavigation()
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')


    const link = () => {
        return (
            <View style={styles.link}>
                <Text>{`Already have an account?`}</Text>

                <TouchableOpacity
                    activeOpacity={.7} 
                    onPress={()=> navigation.push('Login')}
                >
                    <Text style={styles.label}>{` Log in here`}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const form = () => {
        return (
            <View>
                <Input description='Name' value={name} setValue={setName}  type={'default'} />
                <Input description='Email' value={email} setValue={setEmail} type={'default'} />
                <Input description='password' value={password} setValue={setPassword}  type={'Password'} />

                <Button text={'Create Account'} onPress={()=>{}} backgroundColor={'#EB5757'} />
            </View>
        )
    }

    return (
        <View
            style={styles.container}
        >
            {form()}
            {link()}
            
        </View>
    )
}