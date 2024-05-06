import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import home from "../screens/home";
import perfil from "../screens/perfil";
import criarConta from "../screens/criarConta";
import Login from '../screens/login';

export default function StackComponent() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name ="Login" component={Login} />
        <Stack.Screen name ="home" component={home} />
        <Stack.Screen name ="perfil" component={perfil} />  
        <Stack.Screen name ="criarConta" component={criarConta} />  
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const Stack = createNativeStackNavigator();