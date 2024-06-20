import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import CartContext from '../context/CartContext';
import CartItem from '../../../components/CartItem';
import Button from '../../../components/Button';

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{cart.length} produtos adicionados:</Text>

      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CartItem item={item} />}
      />

      <Button title="Finalizar" onPress={clearCart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  }
});

export default Cart;
