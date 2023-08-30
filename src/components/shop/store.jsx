import useFetch from "./useFetch"
import { Link, Outlet, useSearchParams } from "react-router-dom"
import './css/store.css'

export default function Store(props) {

    const { searchValue, handleAddCart, handleProduct, isProduct, isAuth } = props
    const URL_BASIC = 'https://dummyjson.com/products?limit=100'
    const URL_WITH_SEARCH = 'https://dummyjson.com/products/search?q='
    let request = '';
    const [searchParam] = useSearchParams({ s: '' })
    const searchRes = searchParam.get('s')

    if (searchRes) {
        request = URL_WITH_SEARCH + searchRes
    } else if (searchValue !== '') {
        request = URL_WITH_SEARCH + searchValue
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
                        <Link
                            to={'?q=' + data["products"][i].title + '&i=' + data["products"][i].id}
                            state={data["products"][i]}
                            onClick={(e) => handleProduct()}
                        >
                            <img
                                className="img-qv"
                                src={`${data['products'][i].thumbnail}`}
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
                        <div className="stock-qv">{data["products"][i].stock < 10 ? "only " + `${data["products"][i].stock}` + " available !" : null}</div>
                        <button
                            disabled={!isAuth}
                            className="add-cart-button"
                            onClick={() =>  isAuth ? handleAddCart(data["products"][i]) : null }>
                            Add to cart
                        </button>


                    </div>
                ))

                : null

            }
        </div>
    </>
}
