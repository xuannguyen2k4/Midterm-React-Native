import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from 'react-native-vector-icons'; // Import icons

const SignInScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    console.log('Sign in attempted with:', phoneNumber, password);
    // Add your sign-in logic here (e.g., API call to validate credentials)
  };

  return (
    <ImageBackground source={require('./assets/MaskGroup.png')} style={styles.container}>
      <View style={styles.content}>
        <Image source={require('./assets/Rectangle.png')} style={styles.image} />
        <Text style={styles.title}>Get your groceries with nectar</Text>
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder="Phone Number (+880)"
          keyboardType="phone-pad" // Set keyboard type for phone numbers
        />
        <View style={styles.socialButtonContainer}>
          <TouchableOpacity style={styles.socialButton} onPress={() => console.log('Sign in with Google')}>
            <FontAwesome name="google" size={20} color="white" />
            <Text style={styles.socialButtonText}>Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton} onPress={() => console.log('Sign in with Facebook')}>
            <FontAwesome name="facebook" size={20} color="white" />
            <Text style={styles.socialButtonText}>Continue with Facebook</Text>
          </TouchableOpacity>
        </View>
        <Button title="Continue" onPress={handleSignIn} style={styles.button} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    marginBottom: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  socialButtonContainer: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 20,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    backgroundColor: '#4267B2',
  },
  socialButtonText: {
    marginLeft: 10,
    color: 'white',
    fontSize: 16,
  },
  button: {
    width: '100%',
    padding: 10,
    backgroundColor: '#00C569',
    borderRadius: 5,
  },
});

export default SignInScreen;
