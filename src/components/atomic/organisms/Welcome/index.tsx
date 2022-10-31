import React from 'react'
import { View, Text, Image } from 'react-native'
import { Button } from '../../atoms/Button'
import { styles } from './styles'

export const Welcome = () => {

    const showLogo = () => {
        return <Image 
                style={styles.logo}
                source={require('../../../../../assets/image/logo.png')} 
            />

    }

    const apresentation = () => {
       return ( 
            <View style={styles.apresentationContainer}>
                <Text style={styles.title}> Welcome </Text>
                <Text style={styles.subtitle}> Road without limits </Text>
            </View> 
        )
    }
        
    const createButton = () => {
        return (
            <Button 
                text={'Create Account'} 
                color={'#EB5757'} 
                backgroundColor={'#FFF'} 
            />
        )
    }

    const login = () => {
        return (
            <Button text={'Login in as Guest'} 
                    color={'#FFF'} 
                    backgroundColor={'#EB5757'}
            />
        )
    }

    return (
        <View>
            {showLogo()}
            
            {apresentation()}

             {createButton()}

             {login()}
            
        </View>
    )
}