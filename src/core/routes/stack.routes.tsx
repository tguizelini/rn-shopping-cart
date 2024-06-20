import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProductList from "../../screens/ProductList";
import CartBadge from "../../components/CartBadge";
import Cart from "../../screens/Cart";

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
    return (
        <Stack.Navigator initialRouteName="home" screenOptions={{ 
            title: '', headerShadowVisible: true
        }}>
            <Stack.Screen
                name={"home"}
                component={ProductList}
                options={{
                    headerRight: () => <CartBadge />,
                }} />

            <Stack.Screen
                name="cart"
                component={Cart} 
                options={{
                    headerRight: () => <CartBadge />,
                }} />
            
        </Stack.Navigator>
    );
}

export default StackRoutes;