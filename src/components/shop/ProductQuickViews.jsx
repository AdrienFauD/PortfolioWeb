import { useContext } from "react"
import { Link, Outlet } from "react-router-dom"
import { ProductContext } from "./Shop"

export default function ProductQuickViews(props) {
    const { filteredData, i, style } = props
    const { handleAddCart, handleProduct, isAuth } = useContext(ProductContext)

    return (
        <>
            {
                filteredData ?
                    <div
                        key={i}
                        className="product-quickview"
                        style={{left : "calc(var(--slider-quickview-width)*"+style+")"}}
                    >
                        <Link
                            to={'?q=' + filteredData[i].title + '&img=0'}
                            state={filteredData[i]}
                            onClick={(e) => handleProduct()}
                        >
                            <img
                                className="img-qv"
                                src={`${filteredData[i].thumbnail}`}
                                alt=''
                            />
                        </Link>
                        <Outlet context={{ item: filteredData[i].id }} />
                        <h6 className="title-qv">
                            {filteredData[i].title}
                        </h6>
                        <div className="discount-container">
                            <div className="price-qv">
                                {filteredData[i].price}€
                            </div>
                            <div className="disc-qv">-{(filteredData[i].discountPercentage).toFixed()}%</div>
                        </div>
                        <div className="disc-price-qv">{(filteredData[i].price - (((filteredData[i].price) * filteredData[i].discountPercentage) / 100)).toFixed(2)}€</div>
                        <div className="stock-qv">{filteredData[i].stock < 10 ? `only ${filteredData[i].stock} available !` : null}</div>
                        <button
                            disabled={!isAuth}
                            className="add-cart-button"
                            onClick={() => isAuth ? handleAddCart(filteredData[i]) : null}>
                            Add to cart
                        </button>
                    </div>
                    : null
            }
        </>
    )
}
