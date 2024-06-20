import IModuleRoute from "../../core/routes/module.route.interface";
import ProductList from "./ui/ProductList";

const ProductListRoute: IModuleRoute = {
    title: "",
    route: "productList",
    component: ProductList
};

const ProductModule = {
    list: ProductListRoute
}

export default ProductModule;