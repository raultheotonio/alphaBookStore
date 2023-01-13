import React from 'react';
import { View } from 'react-native';
import { LoginTemplate } from '../../components/atomic/templates/Login';
import { styles } from './styles';

const LoginPage = () => {
  return (
    <View style={styles.container}>
      <LoginTemplate />
    </View>
  );
};

export default LoginPage;
