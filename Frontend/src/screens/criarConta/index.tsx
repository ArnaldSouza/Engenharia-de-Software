import React from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface CriarContaProps {
    navigation: any;
}

const CriarConta: React.FC<CriarContaProps> = ({ navigation = useNavigation()}) => {
    return (
        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.logo}>
                <Image style={styles.Image} source={require('../../../assets/logo.png')} />
            </View>

            <Text style={styles.textcriar}>CRIE SUA CONTA</Text>

            <View style={styles.login}>
                <TextInput
                    style={styles.input}
                    placeholder='nome'
                    autoCorrect={false}
                    onChangeText={() => { }}
                />

                <TextInput
                    style={styles.input}
                    placeholder='telefone'
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
                    <Text onPress={() => { navigation.navigate("login") }} style={styles.textcriar}>CADASTRAR</Text>
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
        backgroundColor: '#25A18E',
    },

    logo: {
        justifyContent: 'center',        
        alignContent: 'center'
    },

    Image: {
        width: 150,
        height: 150
    },

    login: {
        flex: 2,
        alignItems: 'center',
        width: '90%'
    },

    textcriar: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        color: 'white',
        fontSize: 25,
        marginBottom: '1%'
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

    btnCriar: {
        marginTop: '30%',
        backgroundColor: '#004E64',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        width: '90%',
        height: 45,
        borderColor: '#black',
        borderWidth: 1,
    }


});

export default CriarConta;