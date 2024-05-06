import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native';

interface HomeProps {
    navigation: any;
}

const Home: React.FC<HomeProps> = ({ navigation = useNavigation() }) => {
    return (
        <KeyboardAvoidingView style={styles.HomeScreen}>
            <TouchableOpacity style={styles.btnHomeBemVindo}>
                <Text style={styles.btnTextoBemVindo}>BEM VINDO!</Text>
            </TouchableOpacity>
            <Text style={styles.textintro}>INTRODUCAO</Text>
            <Text style={styles.textbemvindo}> 123 </Text>
            
            <TouchableOpacity style={styles.btnsetahome} onPress={ () => {navigation.navigate("perfil")}}>
                <Image style={styles.btnsetaimg} source={require('../../../assets/seta-direita.png')} />
            </TouchableOpacity>


        </KeyboardAvoidingView >
    );
};



const styles = StyleSheet.create({

    HomeScreen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },

    btnHomeBemVindo: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        width: '75%',
        height: 75,
        borderColor: '#000',
        marginBottom: '50%',
    },

    btnTextoBemVindo: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },

    textintro: {
        marginTop: -160,
        textAlign: 'left',
        marginLeft: -200,
    },

    textbemvindo: {
        color: 'black',
        fontSize: 15,
        textAlign: 'center',
        padding: 10,
        marginBottom: 10,
        display: 'flex',
        marginTop: 50,
    },

    btnsetaimg: {
        height: 100,
        width: 100,
    },

    btnsetahome: {
        height: 100,
        width: 100,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: '#ddd',
        borderRadius: 50,
        marginLeft: 180,
        marginTop: 180,
    }

});


export default Home;