import React from 'react';
import { View, Image, Button, ScrollView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from "./styles.js"

export default function BookAp( {route} ){
  const navigation = useNavigation();
  const { book } = route.params;

  // Check if book.lido is true or false
  const isBookRead = book.lido ? true : false;

  return (
    <ScrollView>
      <View>
        <Image style={styles.cover} source={{ uri: book.cover }} />

        <View style={styles.divider} />
        <View style={styles.details}>
          <Text style={styles.title}>{book.title}</Text>
          <Text style={styles.author}>{book.author}</Text>
          <Text style={styles.author}>{book.cat}</Text>
          <View style={styles.divider} />
          <Text style={styles.description}>{book.description}</Text>
          
        </View>
        <View style={styles.divider} />
        <Button
          title="Voltar para tela Home"
          onPress={() => navigation.goBack()}
        />
      </View>
    </ScrollView>
  );
}