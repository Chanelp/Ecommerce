import { createContext, useContext, useEffect, useState } from "react";

const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
    // Product Detail Open/Close
    const [isProductDetailOpen, setIsOpenDetailOpen] = useState(false);
    const openProductDetail = () => setIsOpenDetailOpen(true);
    const closeProductDetail = () => setIsOpenDetailOpen(false);

    // Product to Show
    const [productToShow, setProductToShow] = useState({
        title: "",
        price: "",
        description: "",
        images: [],
    });

    // Shopping Cart - Add products to cart
    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        console.log("Products has been updated: ", cartProducts);
    }, [cartProducts]);

    // Checkout Side Menu Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

    // Shopping Cart - Order
    const [order, setOrder] = useState([]);

    const data = {isProductDetailOpen, openProductDetail, closeProductDetail, productToShow, setProductToShow, cartProducts, setCartProducts, isCheckoutSideMenuOpen, openCheckoutSideMenu, closeCheckoutSideMenu, order, setOrder };

    return(
        <ShoppingCartContext.Provider value={ data }>
            { children }
        </ShoppingCartContext.Provider>
    );
}

export const useShoppingCartProvider = () => useContext(ShoppingCartContext);