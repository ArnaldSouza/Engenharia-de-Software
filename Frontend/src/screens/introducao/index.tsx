import React from 'react';
import { Text, View, KeyboardAvoidingView, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


interface IntroducaoProps {
    navigation: any;
}

const Introducao: React.FC<IntroducaoProps> = ({ navigation = useNavigation() }) => {
    return (

        <ScrollView style={styles.container}> 
        <TouchableOpacity style={styles.setaModulo} onPress={() => {navigation.navigate("licao")}}>
                    <Image style={styles.btnsetaimgm} source={require('../../../assets/setaModulo.png')} />
        </TouchableOpacity>
        <Text style={styles.title}>O que é Python?</Text>
        <Text style={styles.text}>
            Python é uma linguagem de programação de alto nível, interpretada e de propósito geral. Desenvolvida por Guido van Rossum e lançada pela primeira vez em 1991, Python foi projetada para ser fácil de aprender e ler. Sua sintaxe limpa e legível permite que os desenvolvedores expressem conceitos complexos com menos linhas de código do que em outras linguagens, tornando-a ideal para iniciantes e especialistas.
        </Text>

        <Text style={styles.title}>Sintaxe Básica</Text>
        <Text style={styles.text}> Aqui está um exemplo simples de um programa Python que imprime "Olá, Mundo!":</Text>
                <View style={styles.codeBox}>
                    <Text style={styles.code}>print("Olá, Mundo!")</Text>
                </View>
            <Text style={styles.text}>
                print() é uma função embutida que exibe a saída na tela.{'\n'} {'\n'}"Olá, Mundo!" é uma string, um tipo de dado que representa texto em Python.
        </Text>

        <Text style={styles.title}>Variáveis e Tipos de Dados</Text>
        <Text style={styles.text}> Em Python, você pode declarar variáveis e atribuir valores a elas de forma direta: </Text>
        <View style={styles.codeBox}>
            <Text style={styles.code}>mensagem = "Olá, Mundo!"{'\n'}print(mensagem)</Text>
        </View>
        <Text style={styles.text}>
            mensagem é uma variável que armazena a string "Olá, Mundo!". {'\n'} {'\n'}Variáveis em Python não precisam ser explicitamente declaradas com um tipo; o interpretador Python deduz o tipo automaticamente.
        </Text>

        <Text style={styles.title}>Estruturas de Controle</Text>
        <Text style={styles.text}> Python oferece estruturas de controle comuns, como if, for e while, que permitem controlar o fluxo do programa: </Text>
        <View style={styles.codeBox}>
            <Text style={styles.code}>
            idade = 18{'\n'}
            {'\n'}
            if idade {'>'}= 18:{'\n'}
            {'    '}print("Você é maior de idade.")
            else:{'\n'}
            {'    '}print("Você é menor de idade.")
            </Text>
        </View>
        <Text style={styles.text}>
            Python oferece estruturas de controle comuns, como if, for e while, que permitem controlar o fluxo do programa.
        </Text>

        <Text style={styles.title}>Conclusão</Text>
        <Text style={styles.text}>
            Este foi apenas um breve mergulho no mundo do Python. Com sua sintaxe limpa, vasta gama de bibliotecas e comunidade ativa, Python é uma excelente escolha para quem deseja aprender a programar ou expandir suas habilidades de desenvolvimento. Ao longo do tempo, você descobrirá que Python é uma ferramenta poderosa em seu arsenal de programação.
        </Text>

        <Text style={styles.text}></Text>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#004E64',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4ec9b0',
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
  },
  codeBox: {
    backgroundColor: '#333',
    padding: 10,
    marginBottom: 10,
  },
  code: {
    color: '#fff',
    fontFamily: 'monospace',
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

export default Introducao;