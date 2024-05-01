import React from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

interface LoginProps {
  navigation: any;
}

const Login: React.FC<LoginProps> = ({ navigation }) => {
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.logo}>
        <Image style={styles.Image} source={require('./assets/React-icon.svg.png')} />
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

        <TouchableOpacity style={styles.bntHome} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.btnTextoHome}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.textconta} onPress={() => navigation.navigate('CriarConta')}>
          <Text style={styles.textconta}>Ainda não tem conta ? Criar conta</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

interface CriarContaProps {
  navigation: any;
}

const CriarConta: React.FC<CriarContaProps> = ({ navigation }) => {
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.logo}>
        <Image style={styles.Image} source={require('./assets/React-icon.svg.png')} />
      </View>

      <Text style={styles.textcriar}>CRIE SUA CONTA</Text>

      <View style={styles.login}>
        <TextInput
          style={styles.input}
          placeholder='Nome'
          autoCorrect={false}
          onChangeText={() => { }}
        />

        <TextInput
          style={styles.input}
          placeholder='Telefone'
          autoCorrect={false}
          onChangeText={() => { }}
        />

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

        <TouchableOpacity style={styles.bntCriar}>
          <Text>CRIAR</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

interface HomeProps {
  navigation: any;
}

const Home: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <KeyboardAvoidingView style={styles.HomeScreen}>
      <TouchableOpacity style={styles.bntHomeBemVindo}>
        <Text style={styles.btnTextoBemVindo}>BEM VINDO!</Text>
      </TouchableOpacity>
      <Text style={styles.textintro}>INTRODUCAO</Text>
      <Text style={styles.textbemvindo}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis ac purus vel    placerat. Nunc ullamcorper tellus in risus faucibus cursus. Sed sed fermentum dolor, ac venenatis purus. Ut porta sit amet nibh ut eleifend. Cras ante magna, cursus ac vehicula vel, volutpat vel tortor. Nulla placerat ac est sit amet maximus. Mauris venenatis sapien nec lectus elementum, quis finibus tellu </Text>
      <TouchableOpacity style={styles.btnsetahome} onPress={() => navigation.navigate('Perfil')}>
        <Image style={styles.btnsetaimg} source={require('./assets/seta-direita.png')} />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

interface PerfilProps {
  navigation: any;
}

const Perfil: React.FC<PerfilProps> = ({ navigation }) => {
  return (
    <KeyboardAvoidingView style={styles.HomeScreen}>
      <Image style={styles.btnsetaimg} source={require('./assets/perfil.png')} />
      <Text> STATUS </Text>
      <View style={styles.perfilBar}>
        <TouchableOpacity style={styles.buttonbarperfil}><Text>POINTS</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonbarperfil}><Text>RANK</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonbarperfil}><Text>HORAS</Text></TouchableOpacity>
      </View>

      <View style={styles.perfilBar}>
        <TouchableOpacity style={styles.buttonbarperfil}><Text>PYTHON</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonbarperfil}><Text>JAVA</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonbarperfil}><Text>JAVASCRIPT</Text></TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CriarConta" component={CriarConta} />
        <Stack.Screen name="Perfil" component={Perfil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


const styles = StyleSheet.create({
  background:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  logo:{
    flex: 1,
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom:'auto',
    alignContent: 'center',
  },

  login:{
    flex: 2,
    alignItems: 'center',
    width: '90%'
  },

  Image:{
    width: 230,
    height: 200,
  },

  btnsetaimg:{
    height: 100,
    width: 100,
  },

  btnsetahome:{
    height: 100,
    width: 100,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#ddd',
    borderRadius: 50,
    marginLeft: 180,
    marginTop: 180,
  },

  perfilBar:{
    flexDirection: "row",
  },

  buttonbarperfil:{
    backgroundColor: "#ddd",
    padding: 15,
    borderWidth: 1,
    borderColor: "#000",
    
  },

  input:{
    backgroundColor:'white',
    width: '90%',
    marginBottom: 20,
    color: '#222',
    fontSize: 17,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 0,
    padding: 10,
  },


  textintro:{
    marginTop: -160,
    textAlign: 'left',
    marginLeft: -200,
  },

  textbemvindo:{
    color: 'black',
    fontSize: 15,
    textAlign: 'center',
    padding: 10,
    marginBottom: 10,
    //justifyContent: justify,
    display: 'flex',
    marginTop: 50,
  },

  bntHome:{
    marginTop: '30%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderRadius: 0,
    width: '90%',
    height: 45,
    alignItems: "center",

  },

  bntCriar:{
    marginTop: '30%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 0,
    width: '90%',
    height: 45,
    borderColor: '#black',
    borderWidth: 1,
  },

  bntHomeBemVindo:{
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: '75%',
    height: 75,
    borderColor: '#000',
    marginBottom: '50%',
  },

  btnTextoBemVindo:{
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },

  btnTextoHome:{
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 0,
    width: '90%',
    height: 45,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign:"center",
    lineHeight: 45, // Adiciona esta linha para alinhar verticalmente

  },


  textsenha:{
    justifyContent: 'center',
    alignItems: 'flex-end',
    color: 'black',
    paddingLeft: 80,
    fontSize:10,
  },

  textcriar:{
    justifyContent: 'center',
    alignItems: 'flex-end',
    color: 'black',
    fontSize:25,
    marginBottom: '1%',
  },

  textconta:{
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    marginTop: '1%',
    fontSize: 10
  },

  HomeScreen:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

});