import React, {useState} from 'react'
import { View, Text, Button } from 'react-native'
import {styles} from './styles'

function Contador(){
  const [cont, setCont] = useState(0)

  function incrementarDecrementar(click){
    if (click == '+')
      setCont(cont + 1)
    else if (cont > 0)
      setCont(cont - 1)
  }

  return(
    <View style={styles.area}>

      <Text style={styles.titulo}>Contador</Text>

      <Text style={styles.contador}>{cont}</Text>

      <Button title='+' color='blue' onPress={() => incrementarDecrementar('+')}/>
      <Button title='-' color='cyan' onPress={() => incrementarDecrementar('-')}/>
    </View>
  )
}


export default Contador;