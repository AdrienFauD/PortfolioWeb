import countDuplicatesObjectInArray from "../../functions/countDuplicatesObjectInArray";
import { useState, useEffect } from "react";


export default function Cart(props) {
    const { isToggled, handleIsLoged, cart } = props
    const [cartItems, setCartItems] = useState([{},{}])

    const handlesort = () => {
        const dupes = countDuplicatesObjectInArray(cart)
        console.log(dupes[0].count)
        setCartItems(dupes)
    }
    useEffect(() => {
        console.log('Useeffect in cart.jsx')
        handlesort()
    }, [cart])
    

    return <>
        {
            isToggled ?
                <div className="cart-shop">
                    <button onClick={handlesort} >AAAAAA</button>
                    <div className="delete-cart" onClick={e => handleIsLoged()}>X</div>
                </div>
                : null 
        }

                <div className="cart-reduced">
                    {cart.length}
                </div>
    </>
}