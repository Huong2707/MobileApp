import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen } from './screen/SplashScreen';
import { LoginScreen } from './screen/LoginScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator>
        <Stack.Screen name='SplashScreen' component={SplashScreen} />
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
