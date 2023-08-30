import { useEffect, useState, useContext } from "react"
import { ProductContext } from './shop'


export default function Order(props) {

    const { handleOrder } = useContext(ProductContext)

    const { cartSize } = props
    const [isDisable, setIsDisable] = useState(false)
    const [btnClass, setBtnClass] = useState("order")

    useEffect(() => {

        if (cartSize !== 0) {
            setIsDisable(false)
            setBtnClass('orderPost')
        } else {
            setIsDisable(true)
            setBtnClass('orderNoPost')
        }

    }, [cartSize])



    return <>

        <button
            className={btnClass}
            onClick={()=>{handleOrder()}}
            disabled={isDisable}
        >
            Order now
        </button>

    </>
}