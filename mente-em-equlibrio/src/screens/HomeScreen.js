import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Apoio Social</Text>
      <Image source={require('../../assets/social1.jpg')} style={styles.image} />
      <Image source={require('../../assets/social2.jpg')} style={styles.image} />
      <Text>Use as abas abaixo para navegar.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  image: { width: 300, height: 150, marginVertical: 10, borderRadius: 10 }
});
