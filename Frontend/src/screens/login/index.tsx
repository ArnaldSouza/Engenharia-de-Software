import React from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface LoginProps {
  navigation: any;
}

const Login: React.FC<LoginProps> = ({ navigation = useNavigation() }) => {
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.logo}>
        <Image style={styles.Image} source={require('../../../assets/logo.png')} />
      </View>

      <View style={styles.login}>
        <TextInput
          style={styles.input}
          placeholder='email'
          autoCorrect={false}
          onChangeText={() => { }}
        />

        <TextInput
          style={styles.input}
          placeholder='senha'
          autoCorrect={false}
          secureTextEntry
          onChangeText={() => { }}
        />

        <TouchableOpacity style={styles.textsenha}>
          <Text style={styles.textsenha}>Esqueci minha senha</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnHome} onPress={() => { navigation.navigate("home") }}>
          <Text style={styles.btnTextoHome}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate("criarConta") }}>
          <Text style={styles.textconta}>Ainda não tem conta ? Criar conta</Text>
        </TouchableOpacity>

        
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
 
  
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#004E64',
  },

  logo: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    alignContent: 'center',
  },

  Image: {
    width: 130,
    height: 150
  },

  login: {
    flex: 2,
    alignItems: 'center',
    width: '90%'
  },

  input: {
    backgroundColor: 'white',
    width: '90%',
    marginBottom: 20,
    color: '#222',
    fontSize: 12,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
    padding: 10,
  },

  textsenha: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    color: 'white',
    paddingLeft: 80,
    fontSize: 10
  },

  btnHome: {
    marginTop: '30%',
    backgroundColor: '#25A18E',
    justifyContent: 'center',
    borderRadius: 15,
    width: '90%',
    height: 45,
    alignItems: "center"
  },

  btnTextoHome: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    borderColor: 'black',
    borderWidth: 0,
    borderRadius: 20,
    width: '90%',
    height: 45,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    lineHeight: 45

  },

  textconta: {
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    color: 'white',
    marginTop: '1%',
    fontSize: 10
  } 

});

export default Login;