import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import {IMissao, EstadoJogo, VerificarResposta} from  './../../type/type';
import PerguntaComponent from './../../../components/PerguntaComponent';
import { useNavigation } from '@react-navigation/native';

interface PerguntasProps {
  navigation: any;
}

const perguntas: IMissao[] = [
    {
        texto: "Qual é a extensão de arquivo padrão para arquivos Python?",
        opcoes: [".py", ".txt", ".exe"],
        respostaCorreta: 1
      },
      {
        texto: "Qual operador é usado para verificar se dois valores são iguais em Python?",
        opcoes: ["==", "=", "==="],
        respostaCorreta: 0
      }
  ];

const Pergunta: React.FC<PerguntasProps> = ({ navigation = useNavigation() }) => {
    const [estadoJogo, setEstadoJogo] = useState<EstadoJogo>({
        perguntas: perguntas,
        perguntaAtual: 0,
        pontuacao: 0
      });

      const verificarResposta: VerificarResposta = (resposta) => {
        const perguntaAtual = estadoJogo.perguntas[estadoJogo.perguntaAtual];
        if (resposta === perguntaAtual.respostaCorreta) {
          setEstadoJogo(prevState => ({
            ...prevState,
            pontuacao: prevState.pontuacao + 1
          }));
        }
        proximaPergunta();
      };

      const proximaPergunta = () => {
        setEstadoJogo(prevState => ({
          ...prevState,
          perguntaAtual: prevState.perguntaAtual + 1
        }));
      };

      const reiniciarJogo = () => {
        setEstadoJogo({
          perguntas: perguntas,
          perguntaAtual: 0,
          pontuacao: 0
        });
      };

  return (


    <KeyboardAvoidingView>
    <TouchableOpacity style={styles.setaModulo} onPress={() => { navigation.navigate("missoes") }}>
                    <Image style={styles.btnsetaimgm} source={require('./../../../assets/seta-esquerda.png')} />
    </TouchableOpacity>
    <View style={styles.container}>
       {estadoJogo.perguntaAtual < estadoJogo.perguntas.length ? (
        <PerguntaComponent
          pergunta={estadoJogo.perguntas[estadoJogo.perguntaAtual]}
          onResponder={verificarResposta}
        />
      ) : (
        <View>
          <Text>Pontuação Final: {estadoJogo.pontuacao}</Text>
          <Button title="Jogar Novamente" onPress={reiniciarJogo} />
        </View>
      )}
    </View>
    </KeyboardAvoidingView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  setaModulo: {
    alignSelf: 'flex-start',
    paddingTop: 50,
},

btnsetaimgm: {
    height: 50,
    width: 50,
},
});

export default Pergunta;
