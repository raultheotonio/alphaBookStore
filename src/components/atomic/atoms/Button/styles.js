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
        color: '#FFF',
        borderWidth: 2,
        borderColor: '#FFFF',
    },
    text: {
        fontFamily: 'Poppins-Regular',
        color: '#FFF',
    },
    buttonWhiteColor: {
        backgroundColor: '#FFFF',
    },
})