import React, { useState } from 'react';
import { View, Text, TextInput, CheckBox, Button, Switch, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';

const AccountForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [education, setEducation] = useState('');
  const [limit, setLimit] = useState(200);
  const [isBrazilian, setIsBrazilian] = useState(false);

  const navigation = useNavigation();

  const handleSubmit = () => {
    navigation.navigate('AccountDetails', {
      name,
      age,
      gender,
      education,
      limit,
      isBrazilian,
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        placeholder="Age"
        value={age}
        onChangeText={text => setAge(text)}
      />
      <TextInput
        placeholder="Gender"
        value={gender}
        onChangeText={text => setGender(text)}
      />
      <TextInput
        placeholder="Education"
        value={education}
        onChangeText={text => setEducation(text)}
      />
      <Slider
        value={limit}
        onValueChange={value => setLimit(value)}
        minimumValue={0}
        maximumValue={1000}
        step={1}
        minimumTrackTintColor="#000000"
        maximumTrackTintColor="#000000"
      />
      <Text>Limit: {limit}</Text>
      <Switch
        value={isBrazilian}
        onValueChange={() => setIsBrazilian(!isBrazilian)}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isBrazilian? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
      />
      <Text>Brazilian</Text>
      <Button title="Confirm" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default AccountForm;