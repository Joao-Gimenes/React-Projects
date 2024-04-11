import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';

const App = () => {
  const [alcoholPrice, setAlcoholPrice] = useState('');
  const [gasolinePrice, setGasolinePrice] = useState('');
  const [result, setResult] = useState('');

  const checkFuel = () => {
    if (+alcoholPrice < +gasolinePrice / 0.7) {
      setResult('Melhor utilizar Álcool');
    } else if (+alcoholPrice >= +gasolinePrice / 0.7) {
      setResult('Melhor utilizar Gasolina');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alcool ou Gasolina</Text>

      <Text style={styles.label}>Preço do Álcool</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setAlcoholPrice(text)}
        value={alcoholPrice}
        placeholder="Insira o preço do Álcool"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Preço da Gasolina</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setGasolinePrice(text)}
        value={gasolinePrice}
        placeholder="Insira o preço da Gasolina"
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={checkFuel}>
        <Text style={styles.buttonText}>Verificar</Text>
      </TouchableOpacity>

      <Text style={styles.result}>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: 200,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  result: {
    fontSize: 16,
    marginTop: 20,
  },
});

export default App;