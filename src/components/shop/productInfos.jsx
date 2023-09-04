import {  useContext } from "react"
import { ProductContext } from './Shop'


export default function ProductInfos(props) {

    const { handleDeleteItemCart } = useContext(ProductContext)
    const { cartValues, keyItem, count } = props
    const cartProducts = cartValues[keyItem]


    return (

        <>
            <div className="cart-item-row">
                <div className="cart-thumbnail" >
                    <img src={cartProducts.thumbnail} alt="Product thumbnail" />
                </div>

                <div className="cart-product">
                    <h4 className="cart-title">
                        {cartProducts.title}
                    </h4>
                    <div className="cart-price">
                        <div className="cart-price-discountpercentage">
                            -{cartProducts.discountPercentage.toFixed()}%
                        </div>
                        <div className="cart-final-price">
                            {(cartProducts.price - (cartProducts.price * cartProducts.discountPercentage) / 100).toFixed(2)}€
                        </div>
                    </div>
                    <div className="cart-stock">
                        {cartProducts.stock !== '0' ? "In stock" : "Product not available"}
                    </div>
                    <>
                        Quantity : {count}
                    </>
                </div>
                <div className="cart-delete" onClick={(e) => handleDeleteItemCart(cartProducts)}>Delete from cart</div>
            </div>
        </>
    )

}
