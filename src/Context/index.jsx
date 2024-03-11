import { createContext, useContext, useEffect, useState } from "react";

const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {

    // Shopping Cart Increment Count
    const [count, setCount] = useState(0);
    
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
    }, [cartProducts])

    const onIncrement = (e) => {
        e.stopPropagation();
        setCount(count + 1);
    }

    const data = { count, setCount, onIncrement, isProductDetailOpen, openProductDetail, closeProductDetail, productToShow, setProductToShow, cartProducts, setCartProducts }

    return(
        <ShoppingCartContext.Provider value={ data }>
            { children }
        </ShoppingCartContext.Provider>
    );
}

export const useShoppingCartProvider = () => useContext(ShoppingCartContext);