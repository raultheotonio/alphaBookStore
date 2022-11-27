import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

interface IProps {
    text: String,
    backgroundColor: '#EB5757' | '#FFF',
    onPress: () => void
}

export const Button = ({ text, backgroundColor, onPress }:IProps) => {
    const getColorButton = backgroundColor === '#EB5757' ?  styles.buttonRedColor : styles.buttonWhiteColor
    
    const getColorText = backgroundColor === '#EB5757' ? '#FFF' : '#EB5757'
    
    return (
        <TouchableOpacity 
            activeOpacity={.7}
            style={{...styles.container, ...getColorButton}}
            onPress={onPress}
        >
        
            <Text style={{...styles.text, color: getColorText }}>{text}</Text>
        </TouchableOpacity>
    )
}