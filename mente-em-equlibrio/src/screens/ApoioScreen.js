import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Linking, Button } from 'react-native';

export default function ApoioScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Locais de Apoio Psicológico</Text>

      <Image source={{ uri: 'https://via.placeholder.com/300x150?text=Apoio+Psicológico' }} style={styles.image} />
      <Text style={styles.description}>
        Se você precisa conversar, há serviços gratuitos e online que podem te ajudar. Confira abaixo:
      </Text>

      <View style={styles.card}>
        <Text style={styles.name}>CVV - Centro de Valorização da Vida</Text>
        <Text style={styles.text}>Atendimento 24h por telefone e chat.</Text>
        <Button title="Acessar site" onPress={() => Linking.openURL('https://www.cvv.org.br')} />
      </View>

      <Image source={{ uri: 'https://via.placeholder.com/300x150?text=Escuta+Online' }} style={styles.image} />

      <View style={styles.card}>
        <Text style={styles.name}>Mapa da Saúde Mental</Text>
        <Text style={styles.text}>Encontre psicólogos populares e apoio próximo a você.</Text>
        <Button title="Ver mapa" onPress={() => Linking.openURL('https://www.mapasaudemental.com.br')} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  description: { textAlign: 'center', marginBottom: 20 },
  image: { width: 300, height: 150, marginVertical: 10, borderRadius: 10 },
  card: { marginVertical: 15, padding: 15, backgroundColor: '#f0f0f0', borderRadius: 10, width: '100%' },
  name: { fontSize: 18, fontWeight: 'bold' },
  text: { marginBottom: 10 }
});
