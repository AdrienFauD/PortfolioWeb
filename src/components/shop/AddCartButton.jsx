import { useContext } from "react"
import { ProductContext } from "./Shop"

export default function AddCartButton(props) {
    const { isAuth, handleAddCart } = useContext(ProductContext)
    const { data } = props

    return (
        <>
            <button
                disabled={!isAuth}
                className="add-cart-button"
                onClick={(e) => isAuth ? handleAddCart(data.products[0]) : null}
            >
                Add to cart
            </button>
        </>

    )
}
