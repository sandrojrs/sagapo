
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from './src/screens/RegisterScreen';
import { StatusBar } from 'expo-status-bar';
import LoginScreen from './src/screens/LoginScreen';
import AppNavigator from './src/navigation/AppNavigator';

const Stack = createStackNavigator();

const App = () => {
  return (
    <AppNavigator>
      <StatusBar style="auto" />
    </AppNavigator >
  );
};

export default App;
