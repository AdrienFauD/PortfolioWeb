
import ProductInfos from "./productInfos"
export default function ProductsInCart(props) {

    const { cartItems } = props
    const cartValues = cartItems[1].values


    return (
        <div className="cart-list-item">
            {/* title, prices, name, count, stock, BASKET TOTAL, passer la commande, nombre article */}
            <h1>Your cart</h1>
            <div class="cart-product-info">
                {cartValues ?
                    Object.keys(cartValues).map((key, index) => (
                        <ProductInfos 
                            cartValues = {cartValues}
                            key = {key}
                            count = {cartItems[0].count[index]}
                        />
                    ))
                    :
                    null
                }
            </div>
        </ div>
    )
}
