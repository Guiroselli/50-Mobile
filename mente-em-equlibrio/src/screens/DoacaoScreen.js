import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert, Image } from 'react-native';

export default function DoacaoScreen() {
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('');

  const enviar = () => {
    Alert.alert("Obrigado!", `Doação de ${tipo} registrada por ${nome}`);
    setNome('');
    setTipo('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulário de Doação</Text>
      <Image source={require('../../assets/doar1.jpg')} style={styles.image} />
      <Image source={require('../../assets/doar2.jpg')} style={styles.image} />

      <TextInput placeholder="Seu Nome" style={styles.input} value={nome} onChangeText={setNome} />
      <TextInput placeholder="Tipo de Doação" style={styles.input} value={tipo} onChangeText={setTipo} />
      <Button title="Enviar" onPress={enviar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  input: { borderWidth: 1, padding: 10, marginVertical: 10, borderRadius: 8 },
  image: { width: '100%', height: 150, marginVertical: 10, borderRadius: 8 }
});
