import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Picker } from 'react-native';

const CurrencyConverter = () => {
  const [value, setValue] = useState('');
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [result, setResult] = useState('');

  const currencies = ['Dólar', 'Real', 'Euro'];

  const convertCurrency = () => {

  let convertedValue;


  if (fromCurrency === 'Dólar' && toCurrency === 'Real') {

    convertedValue = value * 5.5; 

  } else if (fromCurrency === 'Dólar' && toCurrency === 'Euro') {

    convertedValue = value * 0.85; 

  } else if (fromCurrency === 'Real' && toCurrency === 'Dólar') {

    convertedValue = value / 5.5; 
  } else if (fromCurrency === 'Real' && toCurrency === 'Euro') {

    convertedValue = value / 5.5 * 0.85; 

  } else if (fromCurrency === 'Euro' && toCurrency === 'Dólar') {

    convertedValue = value / 0.85; 

  } else if (fromCurrency === 'Euro' && toCurrency === 'Real') {

    convertedValue = value / 0.85 * 5.5; 

  }

  console.log(convertedValue);
  setResult(convertedValue.toFixed(2));

};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Currency Converter</Text>
      <Text style={styles.subtitle}>Dólar, Real, and Euro</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Value"
          keyboardType="numeric"
          value={value}
          onChangeText={setValue}
        />
        <Picker
          style={styles.picker}
          selectedValue={fromCurrency}
          onValueChange={(itemValue) => setFromCurrency(itemValue)}
        >
          {currencies.map((currency) => (
            <Picker.Item label={currency} value={currency} key={currency} />
          ))}
        </Picker>
        <Picker
          style={styles.picker}
          selectedValue={toCurrency}
          onValueChange={(itemValue) => setToCurrency(itemValue)}
        >
          {currencies.map((currency) => (
            <Picker.Item label={currency} value={currency} key={currency} />
          ))}
        </Picker>
      </View>
      <Button title="Convert" onPress={convertCurrency} />
      <Text style={styles.result}>Result: {result}</Text>
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
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
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
    marginRight: 10,
  },
  picker: {
    flex: 1,
    height: 40,
    marginRight: 10,
  },
  result: {
    fontSize: 18,
    marginTop: 20,
  },
});

export default CurrencyConverter;