import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import home from "../screens/home";
import perfil from "../screens/perfil";

export default function StackComponent() {
  return (
    <NavigationContainer>
      <Stack.Navigator>   
        <Stack.Screen name ="home" component={home} />
        <Stack.Screen name ="perfil" component={perfil} />   
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();