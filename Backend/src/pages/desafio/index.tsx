import CodeEditor, { CodeEditorSyntaxStyles } from '@rivascva/react-native-code-editor';
// CodeEditor.js
import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import axios from 'axios';

const CodeEditorComponent = () => {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const compileCode = async () => {
    try {
      const response = await axios.post('https://replit.com/data/repls/tpython/eval', {
        language: 'javascript',
        code: code,
      });
      const result = response.data;
      setOutput(result.output || result.error);
    } catch (error) {
      console.error('Erro ao compilar:', error);
      setOutput('Erro ao compilar o código.');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
      <CodeEditor
            style={{
                fontSize: 20,
                inputLineHeight: 26,
                highlighterLineHeight: 26,
            }}
            language="javascript"
            syntaxStyle={CodeEditorSyntaxStyles.atomOneDark}
            showLineNumbers
            
        />
      </View>
  
      <View style={{ flex: 1 }}> 
      <Button title="Compile" onPress={compileCode} />
      <Text>{output}</Text>
      </View>
      

      </View> 
    
  );
};


export default CodeEditorComponent;
