export default function DrinkBox(props) {
    const { product, takeItem } = props

    return (
        <>
            <div className="drink-box" onClick={() => takeItem()} style={{ fontSize: '3em', paddingTop: '0.5em', paddingBottom: '0.5em' }}>
                {product}
            </div>
        </>
    )
}