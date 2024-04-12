import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native';
import styles from './styles'

const AboutUsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.text}>
        We are a team of passionate developers who love to create amazing apps.
        Our mission is to provide the best user experience and to make the world
        a better place through technology.
      </Text>
      <Text style={styles.text}>
        We believe that great apps are built on a foundation of collaboration,
        innovation, and a commitment to excellence. We are dedicated to
        delivering high-quality software that meets the needs of our users and
        exceeds their expectations.
      </Text>
      <Text style={styles.text}>
        Thank you for choosing our app. We hope you enjoy using it as much as we
        enjoyed building it.
      </Text>
    </View>
  );
};

export default AboutUsScreen;