import { useContext } from "react"
import { Link, Outlet } from "react-router-dom"
import { ProductContext } from "./Shop"

export default function ProductQuickViews(filteredData) {
    const { handleAddCart, handleProduct, isAuth } = useContext(ProductContext)
    const data = filteredData.filteredData

    return (
        <>
            {Object.keys(data).map((product, i) => (
                <div key={product} className="product-quickview" >
                    <Link
                        to={'?q=' + data[i].title + '&img=0'}
                        state={data[i]}
                        onClick={(e) => handleProduct()}
                    >
                        <img
                            className="img-qv"
                            src={`${data[i].thumbnail}`}
                            alt=''
                        />
                    </Link>
                    <Outlet context={{ item: data[i].id }} />
                    <h6 className="title-qv">
                        {data[i].title}
                    </h6>
                    <div className="discount-container">
                        <div className="price-qv">
                            {data[i].price}€
                        </div>
                        <div className="disc-qv">-{(data[i].discountPercentage).toFixed()}%</div>
                    </div>
                    <div className="disc-price-qv">{(data[i].price - (((data[i].price) * data[i].discountPercentage) / 100)).toFixed(2)}€</div>
                    <div className="stock-qv">{data[i].stock < 10 ? `only ${data[i].stock} available !` : null}</div>
                    <button
                        disabled={!isAuth}
                        className="add-cart-button"
                        onClick={() => isAuth ? handleAddCart(data[i]) : null}>
                        Add to cart
                    </button>
                </div>
            )
            )
                /*{ {Object.keys(data.products).map((product, i) => (
                    <div key={product} className="product-quickview" >
                        <Link
                            to={'?q=' + data["products"][i].title + '&img=0'}
                            state={data["products"][i]}
                            onClick={(e) => handleProduct()}
                        >
                            <img
                                className="img-qv"
                                src={`${data['products'][i].thumbnail}`}
                                alt=''
                            />
                        </Link>
                        <Outlet context={{ item: data["products"][i].id }} />
                        <h6 className="title-qv">
                            {data["products"][i].title}
                        </h6>
                        <div className="discount-container">
                            <div className="price-qv">
                                {data["products"][i].price}€
                            </div>
                            <div className="disc-qv">-{(data["products"][i].discountPercentage).toFixed()}%</div>
                        </div>
                        <div className="disc-price-qv">{(data["products"][i].price - (((data["products"][i].price) * data["products"][i].discountPercentage) / 100)).toFixed(2)}€</div>
                        <div className="stock-qv">{data["products"][i].stock < 10 ? `only ${data["products"][i].stock} available !` : null}</div>
                        <button
                            disabled={!isAuth}
                            className="add-cart-button"
                            onClick={() => isAuth ? handleAddCart(data["products"][i]) : null}>
                            Add to cart
                        </button>
                    </div>
                )
                ) }*/
            }
        </>
    )
}
