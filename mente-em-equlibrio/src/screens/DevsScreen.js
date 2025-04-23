import React from 'react';
import { View, Text, Linking, Button, Image, StyleSheet } from 'react-native';

export default function DevsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Desenvolvedores</Text>
      <Image source={require('../../assets/dev1.jpg')} style={styles.image} />
      <Image source={require('../../assets/dev2.jpg')} style={styles.image} />

      <Text>Guilherme Damasio Roselli • React Native Dev</Text>
      <Button title="LinkedIn" onPress={() => Linking.openURL('https://www.linkedin.com/in/guilherme-roselli-36581b2b6/')} />
    </View>
    
  );
}

export default function DevsScreen() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Desenvolvedores</Text>
        <Image source={require('../../assets/dev1.jpg')} style={styles.image} />
        <Image source={require('../../assets/dev2.jpg')} style={styles.image} />
  
        <Text>Gusthavo Daniel de Souza • React Native Dev</Text>
        <Button title="LinkedIn" onPress={() => Linking.openURL('https://www.linkedin.com/in/gusthavo-de-souza-571a86197/')} />
      </View>
      
    );
  }

  export default function DevsScreen() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Desenvolvedores</Text>
        <Image source={require('../../assets/dev1.jpg')} style={styles.image} />
        <Image source={require('../../assets/dev2.jpg')} style={styles.image} />
  
        <Text>Lucas Miranda Leite • React Native Dev</Text>
        <Button title="LinkedIn" onPress={() => Linking.openURL('https://www.linkedin.com')} />
      </View>
      
    );
  }

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  image: { width: 150, height: 150, marginVertical: 10, borderRadius: 75 }
});
