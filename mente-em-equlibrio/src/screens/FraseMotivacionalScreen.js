import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Button } from 'react-native';

export default function FraseMotivacionalScreen() {
  const [frase, setFrase] = useState(null);
  const [autor, setAutor] = useState(null);
  const [carregando, setCarregando] = useState(true);

  const buscarFrase = async () => {
    try {
      setCarregando(true);
      const resposta = await fetch('https://zenquotes.io/api/random');
      const dados = await resposta.json();
      setFrase(dados[0].q);
      setAutor(dados[0].a);
    } catch (erro) {
      console.error('Erro ao buscar a frase:', erro);
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    buscarFrase();
  }, []);

  return (
    <View style={estilos.container}>
      {carregando ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <Text style={estilos.frase}>"{frase}"</Text>
          <Text style={estilos.autor}>— {autor}</Text>
          <Button title="Nova Frase" onPress={buscarFrase} />
        </>
      )}
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  frase: {
    fontSize: 24,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 10
  },
  autor: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20
  }
});
