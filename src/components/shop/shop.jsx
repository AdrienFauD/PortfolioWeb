import React from 'react'
import './css/shop.css'
import Cart from "./cart"
import Login from './login'
import { useState } from "react"
import Search from "./search"
import Product from './product'
import { Routes, Route } from 'react-router-dom'
import WindowShop from './windowShop'

export const ProductContext = React.createContext()

export default function Shop() {

    const [isToggled, setIsToggled] = useState(false)
    const [isAuth, setIsAuth] = useState(true)
    const [isProduct, setIsProduct] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [cart, setCart] = useState([])
    const varibale = 'I am a variable'

    async function handleIsLoged() {
        setIsToggled(prev => !prev)
    }
    async function handleAuth(e) {
        e.preventDefault()
        setIsAuth(prev => !prev)
    }
    const handleProduct = () => {
        setIsProduct(prev => !prev)
    }

    const handleAddCart = (item) => {
        setCart(prev => [...prev, item])
    }

    const handleSearch = (param) => {
        setSearchValue(param)
    }

    return <ProductContext.Provider value={{ varibale }}>
        <div className="shop">
            <div className='shop-cart'>
                <Search
                    handleSearch={handleSearch}
                />
                <Login
                    handleIsLoged={handleIsLoged}
                />
                <Cart
                    isToggled={isToggled}
                    handleIsLoged={handleIsLoged}
                    cart={cart}
                />
            </div>

            <Routes >
                <Route>
                    <Route
                        path='/'
                        index
                        element={<WindowShop
                            isProduct={isProduct}
                            searchValue={searchValue}
                            isAuth={isAuth}
                            handleAuth={handleAuth}
                            handleAddCart={handleAddCart}
                            handleProduct={handleProduct}
                        />}
                    />
                </Route>

            </Routes>

            {/* {isProduct ?
                <Product />
                :
                <div className="shop-window">
                    <Navigation
                    />
                    <Store
                        searchValue={searchValue}
                        isAuth={isAuth}
                        handleAuth={handleAuth}
                        handleAddCart={handleAddCart}
                    />
                    <Order />
                </div>
            }
             */}
        </div>
    </ProductContext.Provider >
}