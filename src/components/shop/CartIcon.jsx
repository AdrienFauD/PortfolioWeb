import { useContext } from "react"
import { ProductContext } from "./Shop"

export default function CartIcon(props) {

    const { isAuth } = useContext(ProductContext)
    const { handleIsLoged, cart } = props

    return (
        <div className="cart-reduced" onClick={handleIsLoged}>
            {isAuth ?
                cart.length : 0
            }
        </div>
    )
}
