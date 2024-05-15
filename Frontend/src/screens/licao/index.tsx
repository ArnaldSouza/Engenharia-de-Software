import React from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface LicaoProps {
    navigation: any;
}

const Licao: React.FC<LicaoProps> = ({ navigation = useNavigation() }) => {
    return (
        <KeyboardAvoidingView style={styles.ModuloScreen}>
            <View>
                <TouchableOpacity style={styles.setaModulo} onPress={() => {navigation.navigate("selecaoModulo")}}>
                    <Image style={styles.btnsetaimgm} source={require('../../../assets/setaModulo.png')} />
                </TouchableOpacity>
                
                <View style={styles.barModulo}>
                    <TouchableOpacity  style={styles.btnModulo} onPress={() => { navigation.navigate("introducao") }}>
                        <Text style={styles.textModulo}>Introdução</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate("missoes") }} style={styles.btnModulo} >
                        <Text style={styles.textModulo}>Missões</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnModulo} >
                        <Text style={styles.textModulo}>Material</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView >
    );
};

const styles = StyleSheet.create({
    textModulo: {
        color: 'black',
        textAlign: 'center', 
        fontWeight: 'bold',
    },
    
    barModulo: {
        flexDirection: "column",
        marginTop: 100,
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
        textAlign: 'center',
        alignItems: 'center',
        width: '75%',
        marginLeft: '12.5%',
    },    

    ModuloScreen: {
        flex: 1,
        backgroundColor: '#004E64',
    },

    setaModulo:{
        alignSelf: 'flex-start',
        paddingTop: 50,
    },


    btnsetaimgm: {
        height: 50,
        width: 50,
    },
});

export default Licao;