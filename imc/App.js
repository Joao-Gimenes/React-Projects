import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const IMCCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState('');

  const calculateIMC = () => {
    if (weight !== '' && height !== '') {
      const imc = parseFloat(weight) / (parseFloat(height) * parseFloat(height));
      setResult(`Seu IMC é: ${imc.toFixed(2)}`);
    } else {
      setResult('Por favor, insira peso e altura.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>
      <Text style={styles.instructions}>Insira seu peso e altura para calcular o IMC:</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Peso (Ex: 60.0)"
          keyboardType="numeric"
          value={weight}
          onChangeText={setWeight}
          style={styles.input}
        />
        <TextInput
          placeholder="Altura (Ex: 1.80)"
          keyboardType="numeric"
          value={height}
          onChangeText={setHeight}
          style={styles.input}
        />
      </View>
      <Button title="Calcular IMC" onPress={calculateIMC} style={styles.button} />
      <Text style={styles.result}>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  instructions: {
    fontSize: 16,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  result: {
    fontSize: 16,
    marginTop: 20,
  },
});

export default IMCCalculator;