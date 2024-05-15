import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface MissoesProps {
    navigation: any;
}

const Missoes: React.FC<MissoesProps> = ({ navigation = useNavigation() }) => {
    return (
        <KeyboardAvoidingView >
            <View style={styles.viewTop}>
                <TouchableOpacity style={styles.setaModulo} onPress={() => { navigation.navigate("licao") }}>
                    <Image style={styles.btnsetaimgm} source={require('../../../assets/setaModulo.png')} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.livro}>
                    <Image style={styles.livroImg} source={require('../../../assets/livro.png')} />
                </TouchableOpacity>
            </View>

            <View style={styles.viewBottom}>
                <View style={styles.buttons}>
                    <TouchableOpacity  >
                        <Image style={styles.numero} source={require('../../../assets/btn1.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Image style={styles.numero} source={require('../../../assets/btn3.png')} />
                    </TouchableOpacity>
                </View>

                <View style={styles.buttons}>
                    <TouchableOpacity >
                        <Image style={styles.numero} source={require('../../../assets/btn2.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Image style={styles.numero} source={require('../../../assets/btn4.png')} />
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity style={styles.botao} onPress={() => { navigation.navigate("introducao") }}>
                <Text style={styles.texto}>Introdução</Text>
            </TouchableOpacity>


        </KeyboardAvoidingView >
    );
};

const styles = StyleSheet.create({
    
    //colocar styles em ordem alfabetica
    botao: {
        backgroundColor: '#004E64',
        borderRadius: 10,
        padding: 15,
        marginLeft: 25,
        alignSelf: 'flex-start',
    },

    texto: {
        fontSize: 20,
        color: '#FFFFFF',
        textAlign: 'center',
        fontWeight: "bold",
    },

    numero: {
        height: 100,
        width: 100,
        marginVertical: "35%",
        marginLeft: '25%',
    },

    buttons: {
        flexDirection: "column",
        marginVertical: 15,
    },

    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },

    viewTop: {
        flexDirection: "row",
        paddingBottom: 25,
        paddingLeft: 20,
        backgroundColor: '#004E64',
    },

    viewBottom: {
        flexDirection: "row",
        marginTop: "15%",
    },

    setaModulo: {
        alignSelf: 'flex-start',
        paddingTop: 50,
    },

    btnsetaimgm: {
        height: 50,
        width: 50,
    },

    livro: {
        alignSelf: 'flex-end',
        paddingLeft: 250
    },

    livroImg: {
        height: 50,
        width: 50
    },
});

export default Missoes;