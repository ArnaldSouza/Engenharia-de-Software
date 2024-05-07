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

            <View>
                <TouchableOpacity >
                    <Text> CADASTRAR</Text>
                </TouchableOpacity>

            </View>

            <View>
            </View>

        </KeyboardAvoidingView>
    );
};


const styles = StyleSheet.create({


    textStatus: {
        justifyContent: "flex-start",
        color: 'white',
        alignSelf: 'flex-start'
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



});

export default Perfil;