import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Switch } from 'react-native';

const BookCard = ({ book, onPress }) => {
  const [isBookRead, setIsBookRead] = React.useState(book.lido);

  const toggleSwitch = () => {
    setIsBookRead(!isBookRead);
  };

  return (
<TouchableOpacity style={styles.card} onPress={onPress}>
      <Image style={styles.cover} source={{ uri: book.cover }} />
      <View style={styles.details}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>{book.author}</Text>
        <Text style={styles.author}>{book.cat}</Text>
        <Text style={styles.description}>{book.description}</Text>
        <View style={styles.switch}>
          <Text style={styles.switchLabel}>Já li:</Text>
          <Switch
            value={isBookRead}
            onValueChange={toggleSwitch}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 2,
    marginBottom: 16,
  },
  cover: {
    width: 100,
    height: 150,
    borderRadius: 4,
    resizeMode: 'cover',
  },
  details: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  author: {
    fontSize: 14,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  switch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  switchLabel: {
    fontSize: 14,
  },
});

export default BookCard;