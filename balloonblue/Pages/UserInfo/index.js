import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image } from 'react-native';
import styles from './styles'

const UserInformation = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../../img/balloon.png')} />
      <Text style={styles.title}>Ballon Blue</Text>
      <Text style={styles.text}>Name: John Doe</Text>
      <Text style={styles.text}>Email: john.doe@example.com</Text>
      <Text style={styles.text}>Phone: 123-456-7890</Text>
    </View>
  );
};

export default UserInformation;