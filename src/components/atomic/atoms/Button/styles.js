import { StyleSheet } from 'react-native';
import Themes from '../../../../Utils/Themes';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginBottom: 16,
    borderRadius: 10,
  },
  buttonRedColor: {
    backgroundColor: Themes.colors.primary,
    color: Themes.colors.white,
    borderWidth: 2,
    borderColor: Themes.colors.white,
  },
  text: {
    fontFamily: 'Poppins-Regular',
    color: Themes.colors.white,
  },
  buttonWhiteColor: {
    backgroundColor: Themes.colors.white,
  },
});
