import { Text, View, StyleSheet, Image } from 'react-native';

export default function Txt() {
  return (
    <View style={styles.container}>
     
       <Text style={styles.title}>
       Game Dev
      </Text>
      <Text style={styles.paragraph}>
       Trabalhando há mais de 5 anos utilizando Unity Engine e C#.
       Criador dos jogos Runaway, Protect Space, Cards And Dice and Exp-02.
      </Text>
      
     
    </View>
  );
}

const styles = StyleSheet.create({

  
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  }
  
 
});
