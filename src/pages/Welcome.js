import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Welcome() {
  return (
    <View style={styles.container}>
        <View style={styles.containerLogo}>
        <Image 
            source={require('../assets/logo.png')} 
            style={styles.logo} 
            resizeMode="contain"/>
        </View>
        <View style={styles.containerForm}>
            <Text style={styles.title}>Seja bem-vindo</Text>
            <Text style={styles.text}>Monitore e organize sua Landing Page de qualquer lugar!</Text>
        </View>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#38a69d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLogo: {
    flex:2,
    justifyContent:'center',
    alignItems: 'center',
  },
  logo:{
    width: '100%',
  },
  containerLogo: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  title: {
    fontSize: 24,
    fontWeigth: 'bold',
    marginTop: 28,
    marginBottom: 12,
  },
  text: {
    color: '#a1a1a1',
  },
  button: {
    position: 'absolute',
    backgroundColor: '#38a96d',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%'
  }
});