import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

// Dados de exemplo para os produtos (em um app real, viriam de uma API)
const products = [
  { id: '1', name: 'Camiseta Básica', price: 'R$ 49,90', image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Camiseta' },
  { id: '2', name: 'Calça Jeans Skinny', price: 'R$ 99,90', image: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Calca' },
  { id: '3', name: 'Vestido Florido', price: 'R$ 79,90', image: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Vestido' },
  { id: '4', name: 'Blusa de Frio', price: 'R$ 129,90', image: 'https://via.placeholder.com/150/FFFF00/000000?text=Blusa' },
  { id: '5', name: 'Jaqueta de Couro', price: 'R$ 299,90', image: 'https://via.placeholder.com/150/808080/FFFFFF?text=Jaqueta' },
  { id: '6', name: 'Short Jeans', price: 'R$ 69,90', image: 'https://via.placeholder.com/150/FFC0CB/000000?text=Short' },
];

function HomeScreen({ navigation }) {
  // Função para renderizar cada item da lista de produtos
  const renderProduct = ({ item }) => (
    <TouchableOpacity
      style={styles.productItem}
      // Ao clicar, navegamos para a tela 'Details'
      // e passamos os dados do produto como parâmetros
      onPress={() => navigation.navigate('Details', { productId: item.id, productName: item.name })}
    >
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo à Loja de Roupas!</Text>
      {/* FlatList é um componente otimizado para listas grandes */}
      <FlatList
        data={products} // Os dados a serem renderizados
        renderItem={renderProduct} // Função que renderiza cada item
        keyExtractor={(item) => item.id} // Chave única para cada item (melhora performance)
        numColumns={2} // Exibe 2 produtos por linha
        contentContainerStyle={styles.productList} 
    </View>
  );
}

// Estilos para os componentes da tela
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8', // Cor de fundo suave
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333', // Cor do texto
  },
  productList: {
    justifyContent: 'space-between', // Distribui os itens uniformemente
  },
  productItem: {
    flex: 1, // Faz com que o item ocupe o espaço disponível na linha
    margin: 8, // Margem entre os itens
    backgroundColor: '#fff', // Fundo branco para cada item
    borderRadius: 8, // Bordas arredondadas
    padding: 12,
    alignItems: 'center', // Centraliza o conteúdo
    shadowColor: '#000', // Sombra para dar profundidade
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Sombra para Android
  },
  productImage: {
    width: 120,
    height: 120,
    borderRadius: 8,
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: '#888', // Cor cinza para o preço
  },
});

export default HomeScreen;