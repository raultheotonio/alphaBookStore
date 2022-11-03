import React from 'react'
import { View, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Button } from '../../atoms/Button'
import { styles } from './styles'

export const Welcome = () => {

    const navigation = useNavigation()
    
    const Logo = () => {

        return (
            <Image 
                style={styles.logo}
                source={require('../../../../../assets/image/logo.png')} 
            />
        )
    }

    const apresentation = () => <View style={styles.apresentationContainer}>
                <Text style={styles.title}> Welcome </Text>
                <Text style={styles.subtitle}> Road without limits </Text>
            </View> 
    
        
    const createButton = () => <Button 
        text={'Create Account'} 
        color={'#EB5757'} 
        backgroundColor={'#FFF'}
        onPress={()=> navigation.push('Register')  }
        
    />
        

    const login = () => <Button text={'Login in as Guest'} 
            color={'#FFF'} 
            backgroundColor={'#EB5757'}
            onPress={()=> navigation.push('Login') }
    />

    return (
        <View>
            {Logo()}
            
            {apresentation()}

             {createButton()}

             {login()}
            
        </View>
    )
}