import React from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native';

interface PerfilProps {
    navigation: any;
}

const Perfil: React.FC<PerfilProps> = ({ navigation }) => {
    return (
        <KeyboardAvoidingView style={styles.HomeScreen}>
            <Image style={styles.btnsetaimg} source={require("../../../assets/perfil.png")} />
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


const styles = StyleSheet.create({

    btnsetaimg: {
        height: 100,
        width: 100,
    },

    perfilBar: {
        flexDirection: "row",
    },

    buttonbarperfil: {
        backgroundColor: "#ddd",
        padding: 15,
        borderWidth: 1,
        borderColor: "#000",

    },

    HomeScreen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },

});

export default Perfil;
