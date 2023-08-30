
import ProductInfos from "./productInfos"
export default function ProductsInCart(props) {

    const { cartItems } = props
    const cartValues = cartItems[1].values

    let totalPrice = 0
    if (cartValues) {
        totalPrice = Object.keys(cartValues).reduce((acc, el) => {
            return acc + (cartValues[el].price - cartValues[el].price*cartValues[el].discountPercentage / 100 )*cartItems[0].count[el]
        }, 0)
    }

    return (
        <div className="cart-list-item">
            {/* title, prices, name, count, stock, BASKET TOTAL, passer la commande, nombre article */}
            <h1 className="cart-list-title">Your cart</h1>
            <div class="cart-product-info">
                {cartValues ?
                    cartValues.length !== 0 ?
                        Object.keys(cartValues).map((key, index) => (
                            <ProductInfos
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
        </ div>
    )
}
