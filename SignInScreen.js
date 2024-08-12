import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from 'react-native-vector-icons'; // Import icons

const SignInScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSignIn = () => {
    console.log('Sign in attempted with:', phoneNumber);
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/MaskGroup.png')} style={styles.maskImage} />
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Get your groceries{'\n'}with nectar</Text>
        </View>
        <View style={styles.phoneInputContainer}>
          <Image source={require('./assets/Rectangle.png')} style={styles.rectImage} />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              placeholder="+880"
              keyboardType="phone-pad"
              underlineColorAndroid="transparent"
              color="black"
            />
          </View>
        </View>
        <View style={styles.orTextContainer}>
          <Text style={styles.orText}>Or connect with social media</Text>
        </View>
        <View style={styles.socialButtonContainer}>
          <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#5383EC' }]} onPress={() => console.log('Sign in with Google')}>
            <FontAwesome name="google" size={20} color="white" />
            <Text style={styles.socialButtonText}>Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#4A66AC' }]} onPress={() => console.log('Sign in with Facebook')}>
            <FontAwesome name="facebook" size={20} color="white" />
            <Text style={styles.socialButtonText}>Continue with Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Loại bỏ màu nền
    position: 'relative',
  },
  maskImage: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '50%', // Điều chỉnh chiều cao của ảnh MaskGroup tùy theo nhu cầu
  },
  content: {
    alignItems: 'center', // Căn giữa theo chiều ngang
    justifyContent: 'center',
    padding: 20,
    flex: 1,
    flexDirection: 'column', // Phân bố các thành phần theo chiều dọc
  },
  titleContainer: {
    alignSelf: 'flex-start', // Đưa tiêu đề về bên trái
    marginBottom: 10, // Điều chỉnh khoảng cách
    paddingTop: 300,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left', // Căn lề trái cho văn bản
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  rectImage: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
    flex: 1,
  },
  input: {
    height: 40,
    paddingVertical: 10,
  },
  orTextContainer: {
    alignItems: 'center', // Căn giữa theo chiều ngang
    justifyContent: 'center',
    marginTop: 20, // Điều chỉnh khoảng cách
    marginBottom: 20, // Điều chỉnh khoảng cách
    width: '100%', // Đảm bảo căn giữa theo chiều ngang
  },
  orText: {
    fontSize: 16,
    color: '#828282',
  },
  socialButtonContainer: {
    flexDirection: 'column', // Để các nút xã hội xuống dòng
    alignItems: 'center', // Căn giữa theo chiều ngang
    marginBottom: 20,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 65, // Thử điều chỉnh giá trị này
    borderRadius: 10,
    marginVertical: 10,
    width: '100%', // Đảm bảo độ rộng của nút bằng nhau
  },
  socialButtonText: {
    marginLeft: 10,
    color: 'white',
    fontSize: 16,
  },
});

export default SignInScreen;
