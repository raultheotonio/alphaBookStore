import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { styles } from './styles';
import Themes from '../../../../Utils/Themes';

interface IProps {
  value: string;
  setValue: (string) => void;
  description: string;
  type: 'Email' | 'default' | 'Password';
}

export const Input = ({ value, setValue, description, type }: IProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder={description}
        keyboardType={type}
        secureTextEntry={type === 'Password'}
      />
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.clean}
        onPress={() => setValue('')}
      >
        <Icon name="closecircleo" color={Themes.colors.second} size={15} />
      </TouchableOpacity>
    </View>
  );
};
