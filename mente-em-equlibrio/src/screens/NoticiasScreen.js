import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Linking, Image, StyleSheet } from 'react-native';
import api from '../services/api';

export default function NoticiasScreen() {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    api.get('top-headlines?country=br&category=general')
      .then(res => setNoticias(res.data.articles))
      .catch(err => console.log(err));
  }, []);

  return (
    <FlatList
      data={noticias}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => Linking.openURL(item.url)} style={styles.card}>
          <Image source={{ uri: item.urlToImage }} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: { padding: 10, borderBottomWidth: 1 },
  title: { fontSize: 16, fontWeight: 'bold' },
  image: { width: '100%', height: 150, borderRadius: 8 }
});
