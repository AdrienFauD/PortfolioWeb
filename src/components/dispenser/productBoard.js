export default function ProductBoard(props) {
    const { productsLeft } = props
    return (
        <>
            {productsLeft.map(el => {
                return (
                    <div className={el[0]}>{el[0]+el[1]}</div>
                )
            }
            )}
        </>
    )
}