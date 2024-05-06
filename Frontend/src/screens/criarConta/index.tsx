import React from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native';

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

                <TouchableOpacity style={styles.btnCriar}>
                    <Text>CRIAR</Text>
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

    login: {
        flex: 2,
        alignItems: 'center',
        width: '90%'
    },

    Image: {
        width: 230,
        height: 200,
    },

    textcriar: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        color: 'black',
        fontSize: 25,
        marginBottom: '1%',
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

    btnCriar: {
        marginTop: '30%',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 0,
        width: '90%',
        height: 45,
        borderColor: '#black',
        borderWidth: 1,
    }


});

export default CriarConta;