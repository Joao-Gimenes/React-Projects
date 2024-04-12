import React from 'react';
import { View, Text, Image, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles'

const HandleBookPress = (nav) => {
  nav.navigate('Main');
};

const RegisterScreen = () => {
  const navigation = useNavigation();
  return (
    
    <View style={styles.container}>
      <Image style={styles.bannerImg} source={require('../../img/banner1.jpg')} />
      <Text style={styles.title}>Register</Text>
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
      <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry={true} />
      <Button onPress={() => HandleBookPress(navigation)} title="Register" color="#00AFFF" />

    </View>
  );
};


export default RegisterScreen;