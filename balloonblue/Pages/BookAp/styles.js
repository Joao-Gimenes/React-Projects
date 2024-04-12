import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cover: {
    width: 200,
    height: 300,
    justifyContent: 'center',
    alignSelf: 'center',
    resizeMode: 'cover',
    marginBottom: 10,
    marginTop: 15,
    borderWidth: 5,
    borderColor: '#000',
  },
  details: {
    
    padding: 16,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  author: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginTop: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 16,
  },
});

export default styles;