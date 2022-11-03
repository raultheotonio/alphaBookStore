import React from 'react'
import { Image } from 'react-native'
import { styles } from './styles'
import { logo } from '../../../../../assets'

interface IProps {
    source: string
}

const Logo = ({ source }:IProps) => {

    return <Image 
        style={styles.logo}
        source={require(logo)} 
    />}

export default Logo