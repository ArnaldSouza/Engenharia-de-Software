import React from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface ModuloProps {
    navigation: any;
}

const Modulo: React.FC<ModuloProps> = ({ navigation = useNavigation() }) => {
    return (
        <KeyboardAvoidingView style={styles.ModuloScreen}>
            <View>
                <TouchableOpacity style={styles.setaModulo} onPress={() => {navigation.navigate("welcome")}}>
                    <Image style={styles.btnsetaimgm} source={require('../../../assets/seta-esquerda.png')} />
                </TouchableOpacity>
                
                <View style={styles.barModulo}>
                    <TouchableOpacity style={styles.btnModulo} >
                        <Text style={styles.textModulo}>Iniciante</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnModulo} >
                        <Text style={styles.textModulo}>Intermediário</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnModulo} >
                        <Text style={styles.textModulo}>Avançado</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView >
    );
};

const styles = StyleSheet.create({

    textModulo: {
        color: 'white',
        textAlign: 'center'
    },
    
    barModulo: {
        flexDirection: "column",
        marginTop: 10,
    },
    
    btnModulo: {
        backgroundColor: "#7AE582",
        padding: 15,
        borderRadius: 20,
        marginTop: 20,
        color: 'white',
        marginVertical: 5,
        paddingLeft: 30,
        paddingRight: 30,
        textAlign: 'center', // Centraliza o texto horizontalmente
        alignItems: 'center',
    },    

    ModuloScreen: {
        flex: 1,
        backgroundColor: '#004E64',
    },

    setaModulo:{
        alignSelf: 'flex-start',
    },


    btnsetaimgm: {
        height: 100,
        width: 100,
    },
});

export default Modulo;