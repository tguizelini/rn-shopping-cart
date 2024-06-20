import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";
import Product from "../features/Product/domain/Product";
import React, { useContext } from "react";
import { Feather } from '@expo/vector-icons';
import CartContext from "../features/Cart/context/CartContext";

interface CartItemProps {
    item: Product;
}

const CartItem: React.FC<CartItemProps> = props => {
    const { removeFromCart } = useContext(CartContext);
    
    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Image source={{ uri: props.item.photo }} style={styles.image} />
                <Text style={styles.title}>{props.item.name}</Text>
            </View>

            <TouchableOpacity 
                style={styles.removeButton}
                onPress={() => removeFromCart(props.item)}>
                <Feather 
                    size={20}
                    color={'red'}
                    name="x" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 6,
    },
    contentContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 10,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 12
    },
    title: {
        marginLeft: 16
    },
    removeButton: {
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'red',
        padding: 4
    }
});

export default CartItem;