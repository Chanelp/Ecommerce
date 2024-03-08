import { createContext, useContext, useState } from "react";

const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {

    const [count, setCount] = useState(0);
    const [isProductDetailOpen, setIsOpenDetailOpen] = useState(false);

    const openProductDetail = () => setIsOpenDetailOpen(true);
    const closeProductDetail = () => setIsOpenDetailOpen(false);

    const onIncrement = (e) => {
        e.stopPropagation();
        setCount(count + 1);
    }

    const data = { count, setCount, onIncrement, isProductDetailOpen, openProductDetail, closeProductDetail }

    return(
        <ShoppingCartContext.Provider value={ data }>
            { children }
        </ShoppingCartContext.Provider>
    );
}

export const useShoppingCartProvider = () => useContext(ShoppingCartContext);