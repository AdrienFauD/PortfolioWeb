export default function ProductBoard(props) {
    const { productsLeft } = props

    //render products in the machine
    const fillWithProduct = (el) => {
        let initMargTop = 0,
            initMargLeft = 0;
        const arr = []
        for (let i = el[1]; i >= 1; i--) {
            arr.push(
                <div style={{ position : "absolute", marginTop : initMargTop, marginLeft : `calc(25% + ${initMargLeft}px)` }}>
                  { el[3] }
                </div>
            )
            initMargLeft -= 5
            initMargTop -= -5

        }
        return arr

    }

    return (
        <>
            {productsLeft.map(el => {
                return (
                    <div className={el[0]} style={{position : "relative"}}>
                        {/* <div style={{color : 'blue', fontWeight : 'bold', margin : "auto"}}>
                            {el[0]}
                        </div> */}
                        <div style={{ fontSize: '3em', paddingTop: '0.8em', paddingBottom: '0.5em',maxHeight : '3em' }}>
                            {fillWithProduct(el)}
                        </div>
                        <div style={{ color: 'blue', width : "100%", border: 'solid white 1px',position : "absolute", bottom : "0px" }}>
                            {el[2]}€
                        </div>
                    </div>
                )
            }
            )}
        </>
    )
}