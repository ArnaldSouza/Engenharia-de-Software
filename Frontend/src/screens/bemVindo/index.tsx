import React from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native';

interface WelcomeProps {
    navigation: any;
}

const Welcome: React.FC<WelcomeProps> = ({ navigation }) => {
    return (
        <View>
            <Text> INTRODUÇÃO </Text>

            <Text>
                Prepare-se para embarcar em uma jornada épica através do mundo da programação, onde cada linha de código
                é uma nova descoberta e cada desafio é uma oportunidade de crescimento.
            </Text>

            <Text>
                Você desvendar segredos, resolver quebra-cabeças e desafiar seu intelecto de maneiras que você jamais imaginou.
                E lembre-se, mesmo nos momentos de dificuldade, cada erro é apenas mais uma oportunidade de aprender e crescer.
            </Text>

            <Text>
                Então, aventureiro, o que está esperando? Seu destino aguarda. Prepare-se para iniciar sua jornada na Dev Route e
                transformar-se no programador que sempre sonhou ser!
            </Text>

        </View >
    );
};

const styles = StyleSheet.create({

});

export default Welcome;