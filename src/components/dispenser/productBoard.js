export default function ProductBoard(props) {
    const { productsLeft } = props


    return (
        <>
            <div className="window-grid">

                {productsLeft.map(el => {
                    return (
                        <div className={el[0]}
                            style={{
                                position: "relative"
                            }}>
                            <div style={{
                                height : '100%',
                                fontSize: '3em',
                                paddingTop: '0.8em',
                                paddingBottom: '0.5em',
                                maxHeight: '3em',
                                borderLeft: 'solid black 1px',
                                borderRight: "solid black 1px"
                            }}>
                                {el[1] ? el[3] : null}
                            </div>
                            <div style={{
                                color: 'blue',
                                width: "100%",
                                border: 'solid white 1px',
                                position: "absolute",
                                bottom: "0px"
                            }}>
                                {el[2]}€
                            </div>
                        </div>
                    )
                }
                )}
            </div>
        </>
    )
}