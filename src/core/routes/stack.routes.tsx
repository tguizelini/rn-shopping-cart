import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CartBadge from "../../components/CartBadge";
import ProductModule from "../../features/Product/routes";
import CartModule from "../../features/Cart/routes";

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
    return (
        <Stack.Navigator 
            initialRouteName={ProductModule.list.route} 
            screenOptions={{ 
                title: '', 
                headerShadowVisible: true
            }}
        >
            <Stack.Screen
                name={ProductModule.list.route}
                component={ProductModule.list.component}
                options={{
                    headerRight: () => <CartBadge />,
                }} />

            <Stack.Screen
                name={CartModule.home.route}
                component={CartModule.home.component} 
                options={{
                    headerRight: () => <CartBadge />,
                }} />
            
        </Stack.Navigator>
    );
}

export default StackRoutes;