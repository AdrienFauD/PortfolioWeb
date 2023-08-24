import React from "react"
import './shop.css'
import Cart from "./cart"
import Store from "./store"
import Order from "./order"
import Product from "./product"
import { useState } from "react"
import {Routes, Route } from "react-router-dom"

export default function Shop() {

    const [isToggled, setIsToggled] = useState(false)
    const [isAuth, setIsAuth] = useState(true)
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

    
    return <>
        <div className="shop">
            <Cart
                isToggled={isToggled}
                handleCloseCart={handleCloseCart}
                cartQuantity = {cartQuantity}
            />
            <Store
                isAuth={isAuth}
                handleAuth={handleAuth}
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