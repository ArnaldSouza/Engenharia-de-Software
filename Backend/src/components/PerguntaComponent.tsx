import React from 'react';
import { View, Text, Button } from 'react-native';
import {Perguntas, EstadoJogo, VerificarResposta} from  '@src/types/type';


interface Props {
  pergunta: Perguntas;
  onResponder: VerificarResposta;
}

const PerguntaComponent: React.FC<Props> = ({ pergunta, onResponder }) => {
  return (
    <View>
      <Text>{pergunta.texto}</Text>
      {pergunta.opcoes.map((opcao, index) => (
        <Button key={index} title={opcao} onPress={() => onResponder(index)} />
      ))}
    </View>
  );
}

export default PerguntaComponent;
