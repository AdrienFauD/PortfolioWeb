import { useEffect } from "react"

export default function Cart(props) {
    const { isToggled, handleCloseCart, cartQuantity} = props

    return <>
        {
            isToggled ?
                <div className="cart">
                    Here is cart
                    <div className="delete-cart" onClick={e => handleCloseCart()}>X</div>
                </div>
                : <div className="cart-reduced">
                    {cartQuantity}
                </div>
        }

    </>
}