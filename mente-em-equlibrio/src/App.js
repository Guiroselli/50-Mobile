import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import FraseMotivacionalScreen from './src/screens/FraseMotivacionalScreen';


<Stack.Screen name="Frases" component={FraseMotivacionalScreen} />


export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

