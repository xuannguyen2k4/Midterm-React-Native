import React from 'react';
import { View, Text, Image, Button, StyleSheet, ImageBackground } from 'react-native';

const OnBoardingScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('./assets/Group.png')} style={styles.container}>
      <View style={styles.overlay}>
        <Image source={require('./assets/8140.png')} style={styles.image} />
        <Text style={styles.title}>Get your groceries in as fast as one hour</Text>
        <Text style={styles.description}>Welcome to our store! We offer a wide variety of groceries that you can order and receive delivery within an hour.</Text>
        <Button title="Get Started" onPress={() => navigation.navigate('SignIn')} />
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // This adds a dark overlay to make the text more readable
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white', // Ensure text is readable
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: 'white', // Ensure text is readable
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default OnBoardingScreen;
