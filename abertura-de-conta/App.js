import React, { useState } from 'react';
import { TextInput, Picker, Pressable } from 'react-native';
import { View, Text, Switch, StyleSheet } from 'react-native-web';
import Slider from '@react-native-community/slider';
import { styles } from './styles';

const App = () => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState(0);
  const [sexo, setSexo] = useState('Selecione');
  const [escolaridade, setEscolaridade] = useState('Selecione');
  const [status, setStatus] = useState(false);
  const [valor, setValor] = useState(0)
  const [confirmarDados, setConfirmarDados] = useState(false);

  const ButtonConfirmar = () => {
    setConfirmarDados(true);
  };

  return (
    <View>
      <Text style={styles.titulo}>Abertura de conta</Text>
      <View style={styles.form}>
        <Text style={styles.texto}>Nome: </Text>
        <TextInput
          style={styles.input}
          onChangeText={(n) => setNome(n)}
          value={nome}
        />
      </View>

      <View style={styles.form}>
        <Text style={styles.texto}>Idade: </Text>
        <TextInput
          style={styles.input}
          onChangeText={(i) => setIdade(i)}
          value={idade.toString()} 
          keyboardType="numeric"
        />
      </View>

      <View style={styles.form}>
        <Text style={styles.texto}>Sexo: </Text>
        <Picker
          style={styles.selecao}
          selectedValue={sexo}
          onValueChange={(itemValue) => setSexo(itemValue)}
        >
          <Picker.Item value={''} label='Selecione'/>
          <Picker.Item value={"Masculino"} label="Masculino"/>
          <Picker.Item value={"Feminino"} label="Feminino"/>
        </Picker>
      </View>

      <View style={styles.form}>
        <Text style={styles.texto}>Escolaridade: </Text>
        <Picker
          style={styles.selecao}
          selectedValue={escolaridade}
          onValueChange={(itemValue) => setEscolaridade(itemValue)}
        >
          <Picker.Item value={''} label='Selecione'/>
          <Picker.Item value={"Ensino Fundamental Incompleto"} label="Ensino Fundamental Incompleto"/>
          <Picker.Item value={"Ensino Fundamental Completo"} label="Ensino Fundamental Completo"/>
          <Picker.Item value={"Ensino Médio Incompleto"} label="Ensino Médio Incompleto"/>
          <Picker.Item value={"Ensino Médio Completo"} label="Ensino Médio Completo"/>
          <Picker.Item value={"Ensino Superior Incompleto"} label="Ensino Médio Incompleto"/>
          <Picker.Item value={"Ensino Superior Completo"} label="Ensino Médio Completo"/>
        </Picker>
      </View>

      <View style={styles.form}>
        <Text style={styles.texto}>Limite: </Text>
        <Slider
          minimumValue={0}
          maximumValue={100}
          onValueChange={ (valorSelecionado) => setValor(valorSelecionado) }
        value={valor}
        />
        
      </View>
       <View style={styles.form}>
        <Text style={styles.texto}>Brasileiro: </Text>
        <Switch 
          style={styles.switc}
          value={status}
          onValueChange={(valorSwitch) => setStatus(valorSwitch)}
        />
      </View>

      <Pressable style={styles.confirmar} onPress={ButtonConfirmar} >
        <Text style={styles.confirmarText}> Confirmar </Text>
      </Pressable>
      
      {confirmarDados && (
        <View style={styles.form}>
          <Text style={styles.texto}>Nome: {nome}</Text>
          <Text style={styles.texto}>Idade: {idade}</Text>
          <Text style={styles.texto}>Sexo: {sexo}</Text>
          <Text style={styles.texto}>Escolaridade: {escolaridade}</Text>
          <Text style={styles.texto}>Limite: {Math.round(valor)}</Text>
          <Text style={styles.texto}>Brasileiro: {status ? 'Sim' : 'Não'}</Text>
        </View>
      )}
    </View>
  );
}

export default App;
