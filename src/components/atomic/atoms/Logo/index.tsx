import React from 'react'
import { Image } from 'react-native'
import { styles } from './styles'
import logoWhite from '../../../../../assets/image/logoWhite.png'
import logoRed from '../../../../../assets/image/logoRed.png'

interface IProps {
    type: 'white' | 'red'
}

const Logo = ({ type }:IProps) => {

    const getTypeImage = type === 'white' ? logoWhite : logoRed

    return <Image 
        style={styles.logo}
        source={getTypeImage} 
    />}

export default Logo