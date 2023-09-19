import useFetch from "../../hooks/useFetch"
import { useSearchParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import './css/store.css'
import LoadingFetch from "./LoadingFetch"
import { ProductContext } from "./Shop"
import ProductQuickViews from "./ProductQuickViews"

export default function Store() {

    const { searchValue } = useContext(ProductContext)
    const [limit, setLimit] = useState(20)
    const URL_BASIC = 'https://dummyjson.com/products?limit=' + limit
    const URL_WITH_SEARCH = 'https://dummyjson.com/products/search?q='
    const URL_WITH_CATEGORY = 'https://dummyjson.com/products/category/'
    const [searchParam] = useSearchParams({ s: '', category: '', price_from: '', price_to: '', dir: '' })
    const searchRes = searchParam.get('s')
    const categoryRes = searchParam.get('category')
    const priceMin = searchParam.get('price_from')
    const priceMax = searchParam.get('price_to')
    const dir = searchParam.get('dir')
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

    if (errStatus >= 300) return <p className="search-fail-size">There is an error {errStatus}</p>
    if (!data) return <LoadingFetch />
    if (data?.products.length === 0) return <p className="search-fail-size">No result found :-( </p>





    const filteredData = data.products.filter((product) => product.price > (priceMin))
        .sort((p1, p2) => dir === "DSC" ? (p1.price < p2.price) ? 1 : (p1.price > p2.price) ? -1 : 0 :
            dir === "ASC" ? (p1.price > p2.price) ? 1 : (p1.price < p2.price) ? -1 : 0 : 0)
        .filter((product) => priceMax ? product.price < (priceMax) : product.price === product.price)


    return <>
        <div
            className="store"
        >
            

            {data ?
                Object.keys(filteredData).map((product, i) => (
                    <ProductQuickViews
                        filteredData={filteredData}
                        product={product}
                        i={i}
                    />))
                : null}

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
