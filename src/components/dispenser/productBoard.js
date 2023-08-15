export default function ProductBoard(props) {
    const { productsLeft } = props

    //render products in the machine
    const fillWithProduct = (el) => {
        console.log(el)
        const arr = []
        for (let i = 0; i < el[1]; i++) {
            arr.push(
                <div style={{ width : '100%', margin : '' }}>
                  { el[3] }
                </div>
            )

        }
        return arr

    }

    return (
        <>
            {productsLeft.map(el => {
                return (
                    <div className={el[0]}>
                        {/* <div style={{color : 'blue', fontWeight : 'bold', margin : "auto"}}>
                            {el[0]}
                        </div> */}
                        <div style={{ fontSize: '3em', paddingTop: '0.8em', paddingBottom: '0.5em',maxHeight : '3em' }}>
                            {fillWithProduct(el)}
                        </div>
                        <div style={{ color: 'blue', margin: "auto", padding: '1em', border: 'solid white 1px' }}>
                            {el[2]}€
                        </div>
                    </div>
                )
            }
            )}
        </>
    )
}