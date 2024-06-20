import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { Text, StyleSheet } from 'react-native';
import { TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import CartContext from "../features/Cart/context/CartContext";

const CartBadge = () => {
    const navigation = useNavigation();
    const { cart } = useContext(CartContext);

    return (
      <TouchableOpacity 
        style={styles.iconContainer}
        onPress={() => navigation.navigate("cart")}
      >
        <Feather name="shopping-cart" size={24} color="black" />

        {cart.length > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{cart.length}</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

const styles = StyleSheet.create({
    iconContainer: {
      marginRight: 15,
    },
    badge: {
      position: 'absolute',
      right: -8,
      top: -8,
      backgroundColor: 'red',
      borderRadius: 10,
      width: 20,
      height: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    badgeText: {
      color: 'white',
      fontSize: 12,
      fontWeight: 'bold',
    },
  });

export default CartBadge;