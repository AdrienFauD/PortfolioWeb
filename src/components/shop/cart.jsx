import countDuplicatesObjectInArray from "../../functions/countDuplicatesObjectInArray";
import { useState, useEffect } from "react";
import ProductsInCart from "./productsInCart";
import './css/cart.css'


export default function Cart(props) {
    const { isAuth, isToggled, handleIsLoged, cart } = props
    const [cartItems, setCartItems] = useState([{}, {}])

    const handlesort = () => {
        const dupes = countDuplicatesObjectInArray(cart)
        setCartItems(dupes)
    }
    useEffect(() => {
        handlesort()
    }, [cart])


    return <>
        {isAuth ? 
        <><div className="cart-shop-mask" style={{ display: isToggled ? "block" : "none" }}>
            <div className="cart-shop"  >
                <div className="delete-cart" onClick={e => handleIsLoged()}>X</div>
                <ProductsInCart cartItems={cartItems} />
            </div>

        </div>

        <div className="cart-reduced" onClick={handleIsLoged}>
            {cart.length}
        </div>
         </>   : null}
    </>
}