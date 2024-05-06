import React from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface MissoesProps {
    navigation: any;
}

const Missoes: React.FC<MissoesProps> = ({ navigation = useNavigation() }) => {
    return (
        <KeyboardAvoidingView >
            <View>
                <TouchableOpacity onPress={() => { navigation.navigate("selecaoModulo") }}>
                    <Image source={require('../../../assets/seta-esquerda.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { navigation.navigate("material") }}> 
                    <Image source={require('../../../assets/livro.png')} />
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity ><Text>1</Text></TouchableOpacity>
                <TouchableOpacity ><Text>2</Text></TouchableOpacity>
                <TouchableOpacity ><Text>3</Text></TouchableOpacity>
                <TouchableOpacity ><Text>4</Text></TouchableOpacity>
            </View>
        </KeyboardAvoidingView >
    );
};

const styles = StyleSheet.create({

});

export default Missoes;