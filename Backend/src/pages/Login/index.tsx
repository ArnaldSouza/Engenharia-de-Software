// LoginScreen.tsx

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet,Text, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import {getFirestore, collection, getDocs, doc} from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import app from '@src/config/config';
const firebaseAuth = getAuth(app);

const LoginScreen: React.FC<{ navigation: any }> = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const auth = firebaseAuth;

  const singIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      alert('check');
    } catch (error: any) {
      console.log(error);
      alert('error' + error.message)
    } finally{
      setLoading(false);
    } 
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Login" onPress={singIn} />
      <Button title="Cadastrar" onPress={() => navigation.navigate('Cadastro')} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      width: '80%',
      height: 40,
      marginBottom: 20,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      paddingHorizontal: 10,
    },
  });
  
  export default LoginScreen;

