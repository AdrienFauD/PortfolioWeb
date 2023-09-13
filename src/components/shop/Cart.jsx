import countDuplicatesObjectInArray from "../../functions/countDuplicatesObjectInArray";
import { useState, useEffect } from "react";
import ProductsInCart from "./ProductsInCart";
import './css/cart.css'
import CartIcon from "./CartIcon";

export default function Cart(props) {
    const { isAuth, isToggled, handleIsLoged, cart } = props
    const [cartItems, setCartItems] = useState([{}, {}])

    const handleSort = () => {
        const dupes = countDuplicatesObjectInArray(cart)
        setCartItems(dupes)
    }
    useEffect(() => {
        handleSort()
    }, [cart])


    return <>
        {isAuth ?
            <>
                <div className="cart-shop-mask" style={{ display: isToggled ? "block" : "none" }}>
                    <div className="cart-shop"  >
                        <div className="delete-cart" onClick={e => handleIsLoged()}>X</div>
                        <ProductsInCart cartItems={cartItems} />
                    </div>
                </div>


            </> : null}
        <CartIcon 
            handleIsLoged={handleIsLoged}
            cart={cart}
        />
    </>
}