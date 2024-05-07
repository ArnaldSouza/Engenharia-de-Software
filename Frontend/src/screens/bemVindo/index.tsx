import React from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface WelcomeProps {
    navigation: any;
}

const Welcome: React.FC<WelcomeProps> = ({ navigation = useNavigation() }) => {
    return (

        <ImageBackground style={styles.container}
            source={require('../../../assets/background.png')}>
            <View style={styles.content}>
                <Text style={styles.text}> INTRODUÇÃO </Text>

                <Text style={styles.text} >
                        Prepare-se para embarcar em uma jornada épica através do mundo da programação, onde cada linha de código
                    é uma nova descoberta e cada desafio é uma oportunidade de crescimento.
                </Text>

                <Text style={styles.text}>
                        Você desvendar segredos, resolver quebra-cabeças e desafiar seu intelecto de maneiras que você jamais imaginou.
                    E lembre-se, mesmo nos momentos de dificuldade, cada erro é apenas mais uma oportunidade de aprender e crescer.
                </Text>

                <Text style={styles.text}>
                        Então, aventureiro, o que está esperando? Seu destino aguarda. Prepare-se para iniciar sua jornada na Dev Route e
                    transformar-se no programador que sempre sonhou ser!
                </Text>


            </View >

            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => { navigation.navigate("perfil") }}>
                    <Image style={styles.button} source={require('../../../assets/setaHome.png')} />
                </TouchableOpacity>
            </View>



        </ImageBackground>



    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '100%',
        height: '100%'
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        right: 20
    },
    button: {
        height: 50,
        width: 50,
    },
    text: {
        color: 'white',
        textAlign: 'justify'
    }

});

export default Welcome;