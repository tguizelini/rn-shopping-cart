import { View, StyleSheet } from "react-native";
import { Card, Title } from "react-native-paper";
import Product from "../features/Product/domain/Product";
import React, { useContext } from "react";
import Button, { ButtonSize, ButtonType } from "./Button";
import CartContext from "../features/Cart/context/CartContext";

interface ProductItemProps {
    item: Product;
}

const ProductItem: React.FC<ProductItemProps> = props => {
    const { addToCart, removeFromCart, cart } = useContext(CartContext);
    
    const isInCart = (product: Product) => cart.some(item => item.id === product.id);

    return (
        <View style={styles.container}>
            <Card>
                <Card.Cover style={styles.coverContainer} source={{ uri: props.item.photo }} />

                <Card.Content style={styles.contentContainer}>
                    <Title style={styles.title}>{props.item.name}</Title>

                    {
                        isInCart(props.item) ? 
                            <Button 
                                title="Remove" 
                                type={ButtonType.SECONDARY}
                                size={ButtonSize.SMALL}
                                onPress={() => removeFromCart(props.item)} />
                            : 
                            <Button 
                                title="Add" 
                                type={ButtonType.PRIMARY}
                                size={ButtonSize.SMALL}
                                onPress={() => addToCart(props.item)} />
                    }
                </Card.Content>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 6,
    },
    coverContainer: {
        height: 140
    },
    title: {
        fontSize: 16,
        marginBottom: 8
    },
    contentContainer: {
      display: 'flex',
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center'
    },
    cartText: {
      fontSize: 18,
    },
  });

  export default ProductItem;