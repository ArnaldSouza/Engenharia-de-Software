
// LoginScreen.tsx

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet,Text, ActivityIndicator } from 'react-native';
import {getFirestore, collection, getDocs, doc, addDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import app from '@src/config/config';

const firebaseAuth = getAuth(app);
const db = getFirestore(app);


const CadastroScreen: React.FC<{ navigation: any }> = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const auth = firebaseAuth;

  const singUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
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

      <Button title="Cadastrar" onPress={singUp} />
      
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
  
  export default CadastroScreen;

