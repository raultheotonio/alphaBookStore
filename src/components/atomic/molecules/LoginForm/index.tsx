import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button } from '../../atoms/Button';
import { styles } from './styles';
import { Input } from '../../atoms/Input';

export const LoginForm = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const form = () => (
    <>
      <Input
        description="Email"
        value={email}
        setValue={setEmail}
        type={'Email'}
      />
      <Input
        description="password"
        value={password}
        setValue={setPassword}
        type={'Password'}
      />
    </>
  );

  return (
    <View
      style={{
        paddingVertical: 16,
      }}
    >
      {form()}

      <Button
        text={'Login in'}
        backgroundColor={'#EB5757'}
        onPress={() => navigation.push('privateNavigation')}
      />
      <View style={styles.link}>
        <Text>{`Don’t have an account yet?`}</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.push('Register')}
        >
          <Text style={styles.label}>{` Sign up here`}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
