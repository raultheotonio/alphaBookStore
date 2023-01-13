import { DefaultTheme } from '@react-navigation/native';
import Themes from '../../Themes';

export default CustomTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Themes.colors.primary,
    background: Themes.colors.white,
  },
};
