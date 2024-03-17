/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react"
import { apiUrlPlatzi } from '../api'

const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
    // Product Detail Open/Close
    const [isProductDetailOpen, setIsOpenDetailOpen] = useState(false)
    const openProductDetail = () => setIsOpenDetailOpen(true)
    const closeProductDetail = () => setIsOpenDetailOpen(false)

    // Product to Show
    const [productToShow, setProductToShow] = useState({
        title: "",
        price: "",
        description: "",
        images: [],
    })

    // Shopping Cart - Add products to cart
    const [cartProducts, setCartProducts] = useState([])

    // Checkout Side Menu Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    // Shopping Cart - Order
    const [order, setOrder] = useState([])

    // Get Products
    const [items, setItems] = useState(null)
    const [filteredItems, setFilteredItems] = useState(null)

    // Search - get products by title
    const [searchByTitle, setSearchByTitle] = useState('')

    useEffect(() => {
        const getProducts = async () => {
        try {
            const data = await fetch(apiUrlPlatzi)
            const jsonData = await data.json()
            setItems(jsonData)
        } 
        catch (error) {
            console.log(error)
        }}

        getProducts()
    }, [])

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    useEffect(() => {
        if (searchByTitle.length > 0){
         setFilteredItems(filteredItemsByTitle(items, searchByTitle))
        } else {
            setFilteredItems(items);
        }
    }, [items, searchByTitle])


    const data = {isProductDetailOpen, openProductDetail, closeProductDetail, productToShow, setProductToShow, cartProducts, setCartProducts, isCheckoutSideMenuOpen, openCheckoutSideMenu, closeCheckoutSideMenu, order, setOrder, items, setItems, searchByTitle, setSearchByTitle, filteredItems, setFilteredItems }

    return(
        <ShoppingCartContext.Provider value={ data }>
            { children }
        </ShoppingCartContext.Provider>
    )
}

export const useShoppingCartProvider = () => useContext(ShoppingCartContext)