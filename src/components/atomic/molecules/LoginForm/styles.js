import { StyleSheet } from 'react-native';
import Themes from '../../../../Utils/Themes';

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    borderColor: Themes.colors.second,
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
  },
  input: {
    fontFamily: 'Poppins-Regular',
    width: '90%',
    paddingVertical: 10,
  },
  clean: {
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontFamily: 'Poppins-Bold',
  },
  link: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
