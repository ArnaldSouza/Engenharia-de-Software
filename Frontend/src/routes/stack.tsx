import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import home from "../screens/home";
import perfil from "../screens/perfil";
import criarConta from "../screens/criarConta";
import login from '../screens/login';
import welcome from '../screens/bemVindo';
import selecaoModulo from '../screens/selecaoModulo';
import missoes from '../screens/missoes';


export default function StackComponent() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name ="Login" component={login} />
        <Stack.Screen name ="home" component={home} />
        <Stack.Screen name ="perfil" component={perfil} />  
        <Stack.Screen name ="criarConta" component={criarConta} /> 
        <Stack.Screen name = "welcome" component={welcome} />
        <Stack.Screen name = "selecaoModulo" component={selecaoModulo} />
        <Stack.Screen name = "missoes" component={missoes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const Stack = createNativeStackNavigator();