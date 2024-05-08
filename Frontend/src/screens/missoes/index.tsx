import React from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native';
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

                <TouchableOpacity style={styles.livro} onPress={() => { navigation.navigate("material") }}> 
                    <Image style={styles.livroImg} source={require('../../../assets/livro.png')} />
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
    viewTop:{
        flexDirection: "row"
    },
    
    setaModulo:{
        alignSelf: 'flex-start',
        paddingTop: 50,
    },

    btnsetaimgm: {
        height: 75,
        width: 75,
    },

    livro:{
        alignSelf: 'flex-end',
        paddingLeft: 225
    },

    livroImg:{
        height: 50,
        width: 50
    },
});

export default Missoes;