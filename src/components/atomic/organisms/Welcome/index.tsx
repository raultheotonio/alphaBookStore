import React from 'react'
import { View, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Button } from '../../atoms/Button'
import { styles } from './styles'
import Logo from '../../atoms/Logo'

export const Welcome = () => {

    const navigation = useNavigation()
    
    const apresentation = () => <View style={styles.apresentationContainer}>
                <Text style={styles.title}> Welcome </Text>
                <Text style={styles.subtitle}> Road without limits </Text>
            </View> 
        
    const createButton = () => <Button 
        text={'Create Account'} 
        backgroundColor={'#FFF'}
        onPress={()=> navigation.push('Register')  }
        
    />
        
    const loginButton = () => <Button text={'Login in as Guest'}
            backgroundColor={'#EB5757'}
            onPress={()=> navigation.push('Login') }
    />

    return (
        <View>
            
            <Logo type='white' />
            
            {apresentation()}

            {createButton()}

            {loginButton()}
            
        </View>
    )
}