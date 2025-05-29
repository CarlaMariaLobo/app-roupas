import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

function DetailsScreen({ route, navigation }) {
  // Recebemos os parâmetros passados da tela anterior (HomeScreen)
  const { productId, productName } = route.params;

  // Dados de detalhes do produto (em um app real, viriam de uma API usando o productId)
  const productDetails = {
    '1': { name: 'Camiseta Básica', price: 'R$ 49,90', description: 'Camiseta de algodão 100% premium com caimento perfeito, ideal para o dia a dia.', image: 'https://via.placeholder.com/300/FF0000/FFFFFF?text=Camiseta+Detalhes' },
    '2': { name: 'Calça Jeans Skinny', price: 'R$ 99,90', description: 'Calça jeans super skinny, lavagem média e tecido elástico que proporciona conforto e um visual moderno.', image: 'https://via.placeholder.com/300/0000FF/FFFFFF?text=Calca+Detalhes' },
    '3': { name: 'Vestido Florido', price: 'R$ 79,90', description: 'Vestido leve e solto com estampa floral vibrante, perfeito para dias ensolarados e eventos casuais.', image: 'https://via.placeholder.com/300/00FF00/FFFFFF?text=Vestido+Detalhes' },
    '4': { name: 'Blusa de Frio', price: 'R$ 129,90', description: 'Blusa de tricô quente e macia, com gola alta e caimento oversized, ideal para os dias mais frios.', image: 'https://via.placeholder.com/300/FFFF00/000000?text=Blusa+Detalhes' },
    '5': { name: 'Jaqueta de Couro', price: 'R$ 299,90', description: 'Jaqueta de couro sintético com design moderno, zíperes funcionais e forro interno confortável.', image: 'https://via.placeholder.com/300/808080/FFFFFF?text=Jaqueta+Detalhes' },
    '6': { name: 'Short Jeans', price: 'R$ 69,90', description: 'Short jeans de cintura alta com desfiados na barra, super estiloso e confortável para o verão.', image: 'https://via.placeholder.com/300/FFC0CB/000000?text=Short+Detalhes' },
  };

  // Busca os detalhes do produto com base no ID recebido
  const currentProduct = productDetails[productId];

  // Caso o produto não seja encontrado (ex: ID inválido)
  if (!currentProduct) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Ops! Produto não encontrado.</Text>
        <Button title="Voltar para a Home" onPress={() => navigation.goBack()} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: currentProduct.image }} style={styles.productImage} />
      <Text style={styles.productName}>{currentProduct.name}</Text>
      <Text style={styles.productPrice}>{currentProduct.price}</Text>
      <Text style={styles.productDescription}>{currentProduct.description}</Text>
      <Button title="Adicionar ao Carrinho" onPress={() => alert('Produto adicionado ao carrinho!')} />
      {/* Botão para voltar para a tela anterior */}
      <Button title="Voltar" onPress={() => navigation.goBack()} color="#841584" />
    </View>
  );
}

// Estilos para os componentes da tela
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // Centraliza horizontalmente
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  productImage: {
    width: '90%', // Ocupa 90% da largura da tela
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  productName: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  productPrice: {
    fontSize: 22,
    color: '#666',
    marginBottom: 15,
  },
  productDescription: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#555',
    lineHeight: 24, 
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    marginBottom: 20,
  },
});

export default DetailsScreen;