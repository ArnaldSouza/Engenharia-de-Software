import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import perfil from "../screens/perfil";
import criarConta from "../screens/criarConta";
import login from '../screens/login';
import welcome from '../screens/bemVindo';
import selecaoModulo from '../screens/selecaoModulo';
import missoes from '../screens/missoes';
import licao from '../screens/licao'


export default function StackComponent() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerTransparent:true, title:"", headerShown: false}} name ="login" component={login} />
        <Stack.Screen options={{headerTransparent:true, title:"", headerShown: false}} name ="perfil" component={perfil} />  
        <Stack.Screen options={{headerTransparent:true, title:"", headerShown: false}} name ="criarConta" component={criarConta} /> 
        <Stack.Screen options={{headerTransparent:true, title:"", headerShown: false}} name = "welcome" component={welcome} />
        <Stack.Screen options={{headerTransparent:true, title:"", headerShown: false}} name = "selecaoModulo" component={selecaoModulo} />
        <Stack.Screen options={{headerTransparent:true, title:"", headerShown: false}} name = "missoes" component={missoes} />
        <Stack.Screen options={{headerTransparent:true, title:"", headerShown: false}} name = "licao" component={licao} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const Stack = createNativeStackNavigator();