import useFetch from "../../hooks/useFetch"
import { Link, Outlet, useSearchParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import './css/store.css'
import LoadingFetch from "./LoadingFetch"
import { ProductContext } from "./Shop"

export default function Store() {

    const { searchValue, handleAddCart, handleProduct, isAuth } = useContext(ProductContext)
    const [limit, setLimit] = useState(20)
    const URL_BASIC = 'https://dummyjson.com/products?limit=' + limit
    const URL_WITH_SEARCH = 'https://dummyjson.com/products/search?q='
    const URL_WITH_CATEGORY = 'https://dummyjson.com/products/category/'
    const [searchParam] = useSearchParams({ s: '', category: '' })
    const searchRes = searchParam.get('s')
    const categoryRes = searchParam.get('category')
    const [request, setRequest] = useState('')
    
    useEffect(() => {
        if (categoryRes) {
            setRequest(URL_WITH_CATEGORY + categoryRes)
        } else if (searchRes) {
            setRequest(URL_WITH_SEARCH + searchRes)
        } else if (searchValue !== '') {
            setRequest(URL_WITH_SEARCH + searchValue)
        } else {
            setRequest(URL_BASIC)
        }
    }, [request, categoryRes, searchRes, searchValue, URL_BASIC])

    const { data, errStatus } = useFetch(request, {
        headers: {
            "Content-Type": "application/json",
        }
    })

    const handleLoadMore = () => {
        setLimit(limit + 20)
    }

    if (errStatus === 404) return <p className="search-fail-size">There is an error {errStatus}</p>
    if (!data) return <LoadingFetch />
    if (data?.products.length === 0) return <p className="search-fail-size">No result found :-( </p>

    return <>
        <div
            className="store"
        >
            {data ?
                Object.keys(data.products).map((product, i) => (
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
                ))

                : null

            }
            {limit > data?.products?.length ? null :
                <div className="load-more">
                    <button
                        className="load-more-btn"
                        onClick={(e) => handleLoadMore()}>
                        Load more
                    </button>
                </div>
            }

        </div>
    </>
}
