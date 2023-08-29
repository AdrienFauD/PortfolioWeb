import React from 'react'

export default function ProductInfos(props) {

    const { cartValues, key, count } = props

    return (

        <>

            <div className="cart-thumbnail">
                <img src={cartValues[key].thumbnail} alt="" />
            </div>
            <div className="cart-title">
                {cartValues[key].title}
            </div>
            <div className="cart-price">
                <div className="cart-price-discountPercentage">

                </div>
                <div className="cart-price-price">

                </div>
                <div className="cart-price-disc-price">

                </div>
                {cartValues[key].price}
            </div>
            <div className="cart-stock">
                {cartValues[key].stock !== '0' ? "In stock" : "Product not available"}
            </div>
            <div className="cart-name">
                {cartValues[key].name}
            </div>
            <>
                {count}
            </>
        </>
    )

}
