import React, { useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, TextInput, Text, TouchableOpacity } from 'react-native'
import { Button } from '../../atoms/Button'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons/faXmarkCircle'
import { styles } from './styles'
import { Input } from '../../atoms/Input'

export const LoginForm = () => {
    const navigation = useNavigation()
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const form = () => {
        return (
            <>
                <Input description='Email' value={email} setValue={setEmail} type={'default'} />
                <Input description='password' value={password} setValue={setPassword}  type={'Password'}/>
            </>
        )
    }

    const InputEmail = () => {
        return (
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                    placeholder = {'Email'}
                />
                <TouchableOpacity
                    activeOpacity={.7}
                    style={styles.clean}
                    onPress={()=> setEmail('')}
                >
                    <FontAwesomeIcon color='#8E8E93' icon={ faXmarkCircle } />
                </TouchableOpacity>
            </View>
        )
    }

    const InputPassword = () => {
        return (
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input}
                    onChangeText={setPassword}
                    value={password}
                    placeholder = {'Password'}
                    secureTextEntry={true}
                />
                <TouchableOpacity
                    activeOpacity={.7}
                    style={styles.clean}
                    onPress={()=> setPassword('')}
                >
                    <FontAwesomeIcon color='#8E8E93' icon={ faXmarkCircle } />
                </TouchableOpacity>
                
            </View>
        )
    }

        return (
            <View
                style={{
                    paddingVertical: 16,
                }}
            >
                {InputEmail()}
                {InputPassword()}

                <Button text={'Login in'}
                    backgroundColor={'#EB5757'}
                    onPress={()=> {} } />
                <View
                    style={styles.link}
                >
                    <Text>{`Don’t have an account yet?`}</Text>
                    <TouchableOpacity
                        activeOpacity={.7} 
                        onPress={()=> navigation.push('Register')}
                        >
                            <Text style={styles.label}>{` Sign up here`}</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        )
}