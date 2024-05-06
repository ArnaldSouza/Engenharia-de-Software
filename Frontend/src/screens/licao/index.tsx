import React from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface LicaoProps {
    navigation: any;
}

const Licao: React.FC<LicaoProps> = ({ navigation = useNavigation() }) => {
    return (
        <KeyboardAvoidingView >
            <View>
                <TouchableOpacity onPress={() => {navigation.navigate("selecaoModulo")}}>
                    <Image source={require('../../../assets/seta-esquerda.png')} />
                </TouchableOpacity>
                
                <TouchableOpacity ><Text>Introdução</Text></TouchableOpacity>
                <TouchableOpacity ><Text>Missões</Text></TouchableOpacity>
                <TouchableOpacity ><Text>Material</Text></TouchableOpacity>
            </View>
        </KeyboardAvoidingView >
    );
};

const styles = StyleSheet.create({

});

export default Licao;