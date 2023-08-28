import useHandleCartContext from './shop'


export default function AddCartButton(props) {
    const { handleAddCart } = useHandleCartContext()

    console.log(handleAddCart)
    return (

        <button
            className="add-cart-button"
            onClick={() => { handleAddCart("item") }}>
            Add to cart
        </button>

    )
}
