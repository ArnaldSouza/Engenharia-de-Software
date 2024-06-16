import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import {EstadoJogo, VerificarResposta, IMissao} from  './../src/type/type';
import { useNavigation } from '@react-navigation/native';

interface Props {
  pergunta: IMissao;
  onResponder: VerificarResposta;

}

const PerguntaComponent: React.FC<Props> = ({ pergunta, onResponder}) => {

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
