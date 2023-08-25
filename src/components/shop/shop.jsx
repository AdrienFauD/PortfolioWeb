import React from "react"
import './css/shop.css'
import Cart from "./cart"
import Store from "./store"
import Order from "./order"
import Navigation from './navigation'
import Product from "./product"
import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Search from "./search"

export default function Shop() {

    const [isToggled, setIsToggled] = useState(false)
    const [isAuth, setIsAuth] = useState(true)
    const [searchToggle, setSearchToggle] = useState(true)
    const [cartQuantity, setCartQuantity] = useState(0)

    async function handleCloseCart() {
        setIsToggled(prev => !prev)
    }
    async function handleAuth(e) {
        e.preventDefault()
        setIsAuth(prev => !prev)
    }

    const handleAddCart = (index) => {
        console.log(index)
    }

    const handleSearch = () => {
        setSearchToggle(prev => !prev)
        console.log(searchToggle)
    }

    return <>
        <div className="shop">
            <Cart
                isToggled={isToggled}
                handleCloseCart={handleCloseCart}
                cartQuantity={cartQuantity}
            />
            <Search
                handleSearch={handleSearch}
            />
            <Navigation
            />
            <Store
                isAuth={isAuth}
                handleAuth={handleAuth}
                searchToggle={searchToggle}
                handleAddCart={handleAddCart}
            />
            <button
                onClick={handleCloseCart}>
                Toggle
            </button>
            <Order />
        </div>
    </>
}