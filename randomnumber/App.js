import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const RandomNumberGame = () => {
  const [randomNumber, setRandomNumber] = useState(null);
  const [userGuess, setUserGuess] = useState('');
  const [message, setMessage] = useState('');

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 11);
    setRandomNumber(randomNumber);
  };

  const checkGuess = () => {
    if (parseInt(userGuess) === randomNumber) {
      setMessage('Parabéns! Você adivinhou o número corretamente!');
    } else {
      setMessage(`Desculpe, isso não está correto. O número era ${randomNumber}.`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guess the Number Game</Text>
      <Text style={styles.instructions}>
        Estou pensando em um número entre 0 e 10. Você consegue adivinhar o que é?
      </Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={userGuess}
        onChangeText={text => setUserGuess(text)}
      />
      <Button title="Adivinhe" onPress={checkGuess} />
      <Button title="Gerar um novo número" onPress={generateRandomNumber} />
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  instructions: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  message: {
    fontSize: 16,
    marginTop: 20,
  },
});

export default RandomNumberGame;