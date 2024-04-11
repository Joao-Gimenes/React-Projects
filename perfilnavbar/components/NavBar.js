import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';




const openLink = (url) => {
  window.open(url, '_blank');
};

const Navbar = ({ onPress }) => {
  const handlePress = (route) => {
    if (route === 'Profile') {
      openLink('https://www.linkedin.com/in/fhcjr');
    } else {
      onPress(route);
    }
  };

  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={() => handlePress('Home')} style={styles.navItem}>
        <Text style={styles.navText}>Home</Text>
        
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress('Profile')} style={styles.navItem}>
        <Text style={styles.navText}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress('Settings')} style={styles.navItem}>
        <Text style={styles.navText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );

  
};

const styles = StyleSheet.create({
  navbar: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#21AF36',
    padding: 10,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  navText: {
    color: '#fff',
    fontFamily: 'Times New Roman',
    fontSize: 16,
  },
});

export default Navbar;