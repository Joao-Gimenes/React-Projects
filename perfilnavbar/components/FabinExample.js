import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
     <Image style={styles.logo} source={require('../assets/eu.jpg')} />
       <Text style={styles.paragraph}>
        Fábio Henrique
        Cimino Júnior
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
  /*paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },*/
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});
