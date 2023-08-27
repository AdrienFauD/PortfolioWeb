import useFetch from "./useFetch"

import { Link, Outlet, Routes, useParams, useSearchParams } from "react-router-dom"
import './css/store.css'
import { useState, } from "react"

export default function Store(props) {

    const { searchValue, handleAddCart } = props
    const [pseudoState, setPseudoState] = useState(true)
    const URL_BASIC = 'https://dummyjson.com/products?limit=20'
    const URL_WITH_SEARCH = 'https://dummyjson.com/products/search?q=' + searchValue
    let request = '';

    if (searchValue !== '') {
        request = URL_WITH_SEARCH
    } else {
        request = URL_BASIC
    }

    const data = useFetch(request)


    return <>
        <div
            className="store"
        >
            {data ?
                Object.keys(data.products).map((product, i) => (
                    <div key={product} className="product-quickview" >
                        <Link to={'./product?q=' + data["products"][i].title + '&i=' + data["products"][i].id} state={data["products"][i]}>
                            <img className="img-qv" src={`${data['products'][i].thumbnail}`} />
                        </Link>
                        <Outlet context={{ item: data["products"][i].id }} />
                        <div className="title-qv">
                            {data["products"][i].title}
                        </div>
                        <div className="discount-container">
                            <div className="price-qv">
                                {data["products"][i].price}€
                            </div>
                            <div className="disc-qv">-{(data["products"][i].discountPercentage).toFixed()}%</div>
                        </div>
                        <div className="disc-price-qv">{(data["products"][i].price - (((data["products"][i].price) * data["products"][i].discountPercentage) / 100)).toFixed(2)}€</div>
                        <div className="stock-qv">{data["products"][i].stock < 10 ? "only " + `${data["products"][i].stock}` + " available !" : null}</div>
                        <button className="add-cart-button" onClick={() => { handleAddCart(data["products"][i]) }}>Add to cart</button>


                    </div>
                ))

                : null
            }
        </div>
    </>
}
