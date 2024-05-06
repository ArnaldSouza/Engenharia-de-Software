import React from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface ModuloProps {
    navigation: any;
}

const Modulo: React.FC<ModuloProps> = ({ navigation = useNavigation() }) => {
    return (
        <KeyboardAvoidingView >
            <View>
                <TouchableOpacity onPress={() => {navigation.navigate("welcome")}}>
                    <Image source={require('../../../assets/seta-esquerda.png')} />
                </TouchableOpacity>
                
                <TouchableOpacity ><Text>Iniciante</Text></TouchableOpacity>
                <TouchableOpacity ><Text>Intermediário</Text></TouchableOpacity>
                <TouchableOpacity ><Text>Avançado</Text></TouchableOpacity>
            </View>
        </KeyboardAvoidingView >
    );
};

const styles = StyleSheet.create({

});

export default Modulo;