import { createContext, useContext, useState } from "react";

const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {

    const [count, setCount] = useState(0);

    const onIncrement = () => {
        setCount(count + 1);
    }

    const data = { count, setCount, onIncrement }

    return(
        <ShoppingCartContext.Provider value={ data }>
            { children }
        </ShoppingCartContext.Provider>
    );
}

export const useShoppingCartProvider = () => useContext(ShoppingCartContext);