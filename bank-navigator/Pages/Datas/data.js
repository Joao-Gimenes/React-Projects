import React from 'react';
import { View, Text } from 'react-native';

const AccountDetails = ({ route }) => {
  const { name, age, gender, education, limit, isBrazilian } = route.params;

  return (
    <View>
      <Text>Name: {name}</Text>
      <Text>Age: {age}</Text>
      <Text>Gender: {gender}</Text>
      <Text>Education: {education}</Text>
      <Text>Limit: {limit}</Text>
      <Text>Brazilian: {isBrazilian ? 'Yes' : 'No'}</Text>
    </View>
  );
};

export default AccountDetails;