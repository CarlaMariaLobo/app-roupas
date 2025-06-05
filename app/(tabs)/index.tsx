import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const roupas = [
  { id: '1', nome: 'Camiseta Básica', preco: 'R$ 39,90' },
  { id: '2', nome: 'Calça Jeans', preco: 'R$ 129,90' },
  { id: '3', nome: 'Jaqueta Couro', preco: 'R$ 299,90' },
];

export default function Home() {
  const router = useRouter();

  const renderItem = ({ item }: { item: { id: string; nome: string; preco: string } }) => (
    <View style={styles.item}>
      <Text style={styles.nome}>{item.nome}</Text>
      <Text style={styles.preco}>{item.preco}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Loja de Roupas</Text>

      <FlatList
        data={roupas}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={styles.lista}
      />

      <Button title="Ir para detalhes" onPress={() => router.push('/')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' },
  lista: { marginBottom: 24 },
  item: { padding: 12, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  nome: { fontSize: 18 },
  preco: { fontSize: 14, color: '#666' },
});
