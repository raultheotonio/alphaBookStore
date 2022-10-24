import React from 'react'
import { View } from 'react-native'
import { Button } from '../../atoms/Button'
import { styles } from './styles'

export const WelcomeTemplate = () => {
    return (
        <View styles={styles.container}>
            <Button 
                text={'Create Account'} 
                color={'#EB5757'} 
                backgroundColor={'#FFF'} 
            />

            <Button text={'Create Account'} 
                    color={'#FFF'} 
                    backgroundColor={'#EB5757'}
            />
            
        </View>
    )
}