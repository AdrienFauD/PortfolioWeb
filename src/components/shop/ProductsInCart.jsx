
import ProductInfos from "./ProductInfos"
import Order from "./Order"
import { useEffect, useState } from "react"

export default function ProductsInCart(props) {

    const { cartItems } = props
    const [cartSize, setCartSize] = useState(0)
    const cartValues = cartItems[1].values

    useEffect(() => {
        if (typeof cartValues !== "undefined") {
            setCartSize(cartValues.length)
        }
    }, [cartItems])

    console.log(cartValues)

    let totalPrice = 0
    if (cartValues) {
        totalPrice = Object.keys(cartValues).reduce((acc, el) => {
            return acc + (cartValues[el].price - cartValues[el].price * cartValues[el].discountPercentage / 100) * cartItems[0].count[el]
        }, 0)
    }

    return (
        <div className="cart-list-item">
            <h1 className="cart-list-title">Your cart</h1>
            <div className="cart-product-info">
                {cartValues ?
                    cartValues.length !== 0 ?
                        Object.keys(cartValues).map((key, index) => (
                            <ProductInfos
                                key={key}
                                className='item-in-cart'
                                cartValues={cartValues}
                                keyItem={key}
                                count={cartItems[0].count[index]}
                            />
                        ))
                        :
                        <p>Your cart is empty</p>
                    : null}
            </div>
            <div className="cart-total-items">
                Total ({cartItems[0].count ? cartItems[0].count.reduce((acc, el) => acc + el, 0) : null} articles ): <span>
                    {totalPrice.toFixed(2)}€
                </span>
            </div>
            <Order
                cartSize={cartSize}
            />
        </ div>
    )
}
