import React from 'react'

export default function ProductInfos(props) {

    const { cartValues, keyItem, count } = props

    const cartP = cartValues[keyItem]

    return (

        <>
            <div className="cart-item-row">

                <div className="cart-thumbnail" >
                    <img src={cartP.thumbnail} alt="Product thumbnail" />
                </div>

                <div className="cart-product">
                    <h4 className="cart-title">
                        {cartP.title}
                    </h4>
                    <div className="cart-price">
                        <div className="cart-price-discountpercentage">
                            -{cartP.discountPercentage.toFixed()}%
                        </div>
                        <div className="cart-final-price">
                            {(cartP.price - (cartP.price * cartP.discountPercentage) / 100).toFixed(2)}€
                        </div>
                    </div>
                    <div className="cart-stock">
                        {cartP.stock !== '0' ? "In stock" : "Product not available"}
                    </div>
                    <>
                        Quantity : {count}
                    </>
                </div>
            </div>
        </>
    )

}
