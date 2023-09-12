import { useEffect } from "react"

export default function ProductBoard(props) {
    const { productsLeft, removeItem, handleResetAnim } = props

    useEffect(() => {
        const timeout = setTimeout(() => {
            handleResetAnim()
        }, 2000);
        return () => clearTimeout(timeout)
    }, [productsLeft, removeItem])

    return (
        <>
            <div className="window-grid">

                {productsLeft.map((el, index) => {
                    return (
                        <div className={el[0]}
                            style={{
                                position: "relative"
                            }}>
                            {/* {removeItem === index +1 ?  */}
                            <div
                            className="mask-anim-disp"
                            style={{ display: removeItem === index + 1 ? "block" : "none" }}
                            >
                                {el[3]}
                            </div>
                            {/* :null
                            } */}

                            <div style={{
                                height: '100%',
                                fontSize: '3em',
                                paddingTop: '0.8em',
                                paddingBottom: '0.5em',
                                maxHeight: '3em',
                                borderLeft: 'solid black 1px',
                                borderRight: "solid black 1px",
                                'hover' : { transform : 'scale(1.25)' }

                            }}>
                                {el[1] ? el[3] : null}
                            </div>
                            <div style={{
                                color: 'white',
                                width: "100%",
                                border: 'solid white 1px',
                                position: "absolute",
                                bottom: "0px"
                            }}>
                                <span style={{ display: "inline-block", width: '30%', margin: 'auto' }}>{el[2]}€</span>
                                |
                                <span style={{ display: "inline-block", width: '30%', margin: 'auto' }}>
                                    {index + 1}
                                </span>
                            </div>

                        </div>
                    )
                }
                )}
            </div >
        </>
    )
}