import IModuleRoute from "../../core/routes/module.route.interface";
import Cart from "./ui/Cart";

const CartRoute: IModuleRoute = {
    title: "Cart",
    route: "cart",
    component: Cart
};

const CartModule = {
    home: CartRoute
}

export default CartModule;