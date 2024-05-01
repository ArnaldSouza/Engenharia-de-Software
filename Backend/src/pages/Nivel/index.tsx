import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button, TouchableOpacity } from 'react-native';

const Nivel = () => {
  const [level, setLevel] = useState(1);

  const handleLevelChange = (newLevel: React.SetStateAction<number>) => {
    setLevel(newLevel);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => console.log('Botão 1 pressionado')}>
        <Text style={styles.buttonText}>Botão 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => console.log('Botão 2 pressionado')}>
        <Text style={styles.buttonText}>Botão 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => console.log('Botão 3 pressionado')}>
        <Text style={styles.buttonText}>Botão 3</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => console.log('Botão 4 pressionado')}>
        <Text style={styles.buttonText}>Botão 4</Text>
      </TouchableOpacity>
    </View>

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
});

export default Nivel;
