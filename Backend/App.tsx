import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/pages/Login';
import HomeScreen from './src/pages/Home';
import CadastroScreen from './src/pages/Cadastro';
import Nivel from 'pages/Nivel';
import Pergunta from 'pages/pergunta';
import Desafio from 'pages/desafio';


const Stack = createStackNavigator();


const app: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Desafio">
        <Stack.Screen name='Desafio' component={Desafio}/>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name='Pergunta' component={Pergunta}/>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name='Nivel' component={Nivel}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default app;


