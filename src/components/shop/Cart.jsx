import countDuplicatesObjectInArray from "../../functions/countDuplicatesObjectInArray";
import { useState, useEffect, useContext } from "react";
import ProductsInCart from "./ProductsInCart";
import './css/cart.css'
import CartIcon from "./CartIcon";
import { ProductContext } from "./Shop";

export default function Cart() {
    const { isAuth, isToggled, handleIsLoged, cart } = useContext(ProductContext)
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