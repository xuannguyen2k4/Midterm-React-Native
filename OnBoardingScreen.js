import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const OnBoardingScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('./assets/8140.png')} style={styles.container}>
      <View style={styles.overlay}>
        <Image source={require('./assets/Group.png')} style={styles.icon} resizeMode="contain"/>
        <Text style={styles.title}>Welcome{'\n'}to our store</Text>
        <Text style={styles.description}>Get your groceries in as fast as one hour</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  icon: {
    width: 50,  
    height: 50, 
    marginTop: 210,
    marginBottom: 20,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white', 
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#FCFCFC', 
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#53B175',
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 20, // Để bo tròn nút
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default OnBoardingScreen;
