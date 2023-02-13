import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
    <View>
      <Image 
        source={require('../assets/logo.png')} 
        style={styles.logo} 
        resizeMode="contain"/>
    </View>
      
      <Text>Login</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width: '100%',
  }
});