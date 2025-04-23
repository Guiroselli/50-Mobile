import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import ApoioScreen from '../screens/ApoioScreen';
import DoacaoScreen from '../screens/DoacaoScreen';
import NoticiasScreen from '../screens/NoticiasScreen';
import DevsScreen from '../screens/DevsScreen';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Início" component={HomeScreen} />
      <Tab.Screen name="Pontos de Apoio" component={ApoioScreen} />
      <Tab.Screen name="Doações" component={DoacaoScreen} />
      <Tab.Screen name="Notícias" component={NoticiasScreen} />
      <Tab.Screen name="Desenvolvedores" component={DevsScreen} />
    </Tab.Navigator>
  );
}
