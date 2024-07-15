import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import OnBoardingScreen from './OnBoardingScreen'; // Ensure the path is correct
import SignInScreen from './SignInScreen'; // Ensure the path is correct

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Define the HomeStack component
function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="OnBoarding">
      <Stack.Screen name="OnBoarding" component={OnBoardingScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="HomeTab" component={HomeStack} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
