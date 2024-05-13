import React from 'react';
import { Text, View, KeyboardAvoidingView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


interface IntroducaoProps {
    navigation: any;
}

const Introducao: React.FC<IntroducaoProps> = ({ navigation = useNavigation() }) => {
    return (

        <KeyboardAvoidingView>
            <View>
                <Text style={styles.exemplo}>Introducao</Text>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    exemplo:{
        marginTop: 150,
        padding: 150,
    }
});

export default Introducao;