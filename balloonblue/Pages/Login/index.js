import React from 'react';
import { View, Text, Image, TextInput, Button } from 'react-native';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles'

const HandleBookPress = (nav) => {
  nav.navigate('Main');
};

const HandleRegPress = (nav) => {
  nav.navigate('RegisterScreen');
};

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    
    <View style={styles.container}>
      <Image style={styles.bannerImg} source={require('../../img/banner1.jpg')} />
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
      <Button onPress={() => HandleBookPress(navigation)} title="LOGIN" color="#00AFFF" />
      <Button onPress={() => HandleRegPress(navigation)} title="Or Sign Up" color="#00AFFF" />
      
      <Text style={styles.forgot}>Forgot password ?</Text>
    </View>
  );
};


export default LoginScreen;