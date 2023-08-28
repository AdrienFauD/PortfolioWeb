import useHandleCartContext from './shop'


export default function AddCartButton(props) {
    const { handleAddCart } = useHandleCartContext()

    return (

        <button
            className="add-cart-button"
            onClick={() => { handleAddCart("item") }}>
            Add to cart
        </button>

    )
}
