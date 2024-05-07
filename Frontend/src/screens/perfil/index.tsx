import React from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface PerfilProps {
    navigation: any;
}

const Perfil: React.FC<PerfilProps> = ({ navigation = useNavigation() }) => {
    return (
        <KeyboardAvoidingView style={styles.HomeScreen}>
            <Image style={styles.btnsetaimg} source={require("../../../assets/perfil1.png")} />

            <Text style={styles.textStatus}> STATUS </Text>

            <View style={styles.perfilBar}>
                <TouchableOpacity style={styles.buttonbarperfil} >
                    <Text style={styles.textphStatus}>PONTOS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonbarperfil} >
                    <Text style={styles.textphStatus}>HORAS</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.barLinguagens}>
                <TouchableOpacity onPress={() => { navigation.navigate("selecaoModulo") }} style={styles.btnLinguagens}>
                    <Text style={styles.textLing}>PYTHON</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnLinguagens}>
                    <Text style={styles.textLing}>JAVA</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnLinguagens}>
                    <Text style={styles.textLing}>JAVASCRIPT</Text>
                </TouchableOpacity>
            </View>

        </KeyboardAvoidingView>
    );
};


const styles = StyleSheet.create({

    textphStatus: {
        color: 'white',
        alignContent: 'center',
        justifyContent: 'center'
    },

    textLing: {
        color: 'white',
        textAlign: 'center'
    },
    
    barLinguagens: {
        flexDirection: "column",
        marginTop: 10
    },
    
    btnLinguagens: {
        backgroundColor: "#25A18E",
        padding: 15,
        borderRadius: 20,
        marginTop: 20,
        color: 'white',
        marginVertical: 5,
        paddingLeft: 30,
        paddingRight: 30,
        textAlign: 'center' // Centraliza o texto horizontalmente
    },    

    textStatus: {
        justifyContent: "flex-start",
        color: 'white',
        alignSelf: 'flex-start',
        marginLeft: 108,
    },

    btnsetaimg: {
        height: 100,
        width: 100,
    },

    HomeScreen: {
        flex: 1,
        backgroundColor: '#004E64',
        alignItems: 'center',
    },

    perfilBar: {
        flexDirection: "row"
    },

    buttonbarperfil: {
        backgroundColor: "#25A18E",
        padding: 15,
        borderWidth: 1,
        borderColor: "#000",

    },

});

export default Perfil;