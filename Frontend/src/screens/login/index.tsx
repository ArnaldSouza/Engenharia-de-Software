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
                <Image style={styles.Image} source={require('../../../assets/React-icon.svg.png')} />
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

                <TouchableOpacity style={styles.btnHome} onPress={() => {navigation.navigate("home")}}>
                    <Text style={styles.btnTextoHome}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.textconta} onPress={() => {navigation.navigate("criarConta")}}>
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
        backgroundColor: '#fff',
      },

      logo: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
        alignContent: 'center',
      },

      Image: {
        width: 230,
        height: 200,
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
        fontSize: 17,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 0,
        padding: 10,
      },

      textsenha: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        color: 'black',
        paddingLeft: 80,
        fontSize: 10,
      },

      btnHome: {
        marginTop: '30%',
        backgroundColor: '#fff',
        justifyContent: 'center',
        borderRadius: 0,
        width: '90%',
        height: 45,
        alignItems: "center",
    
      },

      textconta: {
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
        marginTop: '1%',
        fontSize: 10
      },

      btnTextoHome: {
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
        textAlign: "center",
        lineHeight: 45, // Adiciona esta linha para alinhar verticalmente
    
      },

});

export default Login;