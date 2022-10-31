import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

interface IProps {
    text: String,
    color: '#EB5757' | '#FFF',
    backgroundColor: '#EB5757' | '#FFF',
}

export const Button = ({ text, color, backgroundColor }:IProps) => {
    const getColorButton = backgroundColor === '#EB5757' ?  styles.buttonRedColor : styles.buttonWhiteColor
        
    return (
        <TouchableOpacity 
            activeOpacity={.7}
            style={{...styles.container, ...getColorButton}}
            onPress={()=>{}}
        >
        
            <Text style={{color: color, fontFamily: 'Poppins-Regular'}}>{text}</Text>
        </TouchableOpacity>
    )
}