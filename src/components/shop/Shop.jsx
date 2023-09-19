import React from 'react'
import './css/shop.css'
import { useState } from "react"
import Product from './Product'
import { Routes, Route } from 'react-router-dom'
import WindowShop from './WindowShop'
import { isObjectsEqual } from '../../functions/isObjectsEqual'
import TopBar from './TopBar'

export const ProductContext = React.createContext()

export default function Shop() {

    const [isToggled, setIsToggled] = useState(false)
    const [isAuth, setIsAuth] = useState(false)
    const [isProduct, setIsProduct] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [cart, setCart] = useState([])

    async function handleIsLoged() {
        if (isAuth) setIsToggled(prev => !prev)
    }

    async function handleAuth(e) {
        e.preventDefault()
        setIsAuth(prev => !prev)
    }

    async function handleOrder() {
        setTimeout(() => {
            setCart([])
        }, 1000);
    }

    const handleProduct = () => {
        setIsProduct(prev => !prev)
    }

    const handleAddCart = (item) => {
        setCart(prev => [...prev, item])
    }

    const handleDeleteItemCart = (item) => {
        const filteredCart = cart.filter((value) => !isObjectsEqual(value, item))
        setCart(filteredCart)
    }

    const handleSearch = (param) => {
        setSearchValue(param)
    }

    return (
        <ProductContext.Provider
            value={{
                handleOrder,
                handleDeleteItemCart,
                handleSearch,
                handleIsLoged,
                handleAddCart,
                handleProduct,
                handleAuth,
                isProduct,
                isAuth,
                cart,
                searchValue,
                isToggled
            }}>

                
            <div className="shop">
                <TopBar />
                
                <Routes >
                    <Route>
                        <Route
                            path='/'
                            index
                            element={<WindowShop/>}

                        />
                        <Route
                            path='*'
                            element={<Product />}
                        />
                    </Route>

                </Routes>
            </div>
        </ProductContext.Provider >)
}