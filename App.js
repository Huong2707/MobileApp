import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { testNavigation } from './componets/test';
const Stack = createNativeStackNavigator();

export const App = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='test' component={testNavigation} />
    </Stack.Navigator>
  );
}

