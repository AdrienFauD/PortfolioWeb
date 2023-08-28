import './css/shop.css'
import Cart from "./cart"
import Store from "./store"
import Order from "./order"
import Login from './login'
import Navigation from './navigation'
import { useState } from "react"
import Search from "./search"
import Product from './product'

export default function Shop() {

    const [isToggled, setIsToggled] = useState(false)
    const [isAuth, setIsAuth] = useState(true)
    const [isProduct, setIsProduct] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [cart, setCart] = useState([])

    async function handleIsLoged() {
        setIsToggled(prev => !prev)
    }
    async function handleAuth(e) {
        e.preventDefault()
        setIsAuth(prev => !prev)
    }

    const handleAddCart = (item) => {
        setCart(prev => [...prev, item])
    }

    const handleSearch = (param) => {
        setSearchValue(param)
    }

    return <>
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
        </div>
    </>
}