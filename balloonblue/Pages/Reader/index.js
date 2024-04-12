import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';



const App = () => {
   const [limit, setLimit] = useState(200);
  return (
    <View>
    <View>
    <Slider
        value={limit}
        onValueChange={value => setLimit(value)}
        minimumValue={0}
        maximumValue={1000}
        step={1}
        minimumTrackTintColor="#000000"
        maximumTrackTintColor="#000000"
      />
    </View>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    
      <Text>Limit: {limit}</Text>
      <Text>Vai ler o que hoje?</Text>
      
    </View>
    </View>
    
    
    
  );
};

export default App;