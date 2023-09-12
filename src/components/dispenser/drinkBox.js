export default function DrinkBox(props) {
    const { product, takeItem } = props

    return (
        <>
            <div className="mask-drink-box">
            <div className="drink-box" onClick={() => {takeItem()}}>
                <div className="cart">
                    <div className="item">
                        {product}
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}