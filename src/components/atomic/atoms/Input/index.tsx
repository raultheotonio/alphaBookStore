import React from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons/faXmarkCircle'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { styles } from './styles'

interface IProps {
    value: string,
    setValue: (string) => void,
    description: string,
    type: 'default' | 'Password'
}

export const Input = ({value, setValue, description, type}: IProps) => {
    return (
        <View style={styles.container}>
        <TextInput 
            style={styles.input}
            onChangeText={setValue}
            value={value}
            placeholder = {description}
            keyboardType = {type}
            secureTextEntry={type === 'Password'}
        />
        <TouchableOpacity
            activeOpacity={.7}
            style={styles.clean}
            onPress={()=> setValue('')}
        >
            <FontAwesomeIcon color='#8E8E93' icon={ faXmarkCircle } />
        </TouchableOpacity>
    </View>
    )
}