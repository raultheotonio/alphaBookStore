import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container:{
       display: 'flex',
       alignItems: 'center',
       justifyContent: 'center',
       paddingHorizontal: 12,
       paddingVertical: 12,
       marginBottom: 16,
       borderRadius: 10,
       
    },
    buttonRedColor: {
        backgroundColor: '#EB5757',
        borderWidth: 2,
        borderColor: '#FFFF' 
    },
    buttonWhiteColor: {
        backgroundColor: '#FFFF', 
    },
    textColor: {
        color: '#FFF'
    }
})