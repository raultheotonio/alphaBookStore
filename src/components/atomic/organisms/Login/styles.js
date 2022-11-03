import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    logo: {
        alignSelf: 'center'
    },
    inputContainer: {
        flexDirection: 'row',
        borderColor: '#8E8E93',
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 10
    },
    input: {
        fontFamily: 'Poppins-Regular',
        width: '90%',
        paddingVertical: 10
    },
    clean: {
        width: '10%',        
        justifyContent: 'center',
        alignItems: 'center'
    },
    label:{
        fontFamily: 'Poppins-Regular',
    }
})