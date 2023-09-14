import useFetch from '../../hooks/useFetch'
import { useSearchParams } from 'react-router-dom'
import LoadingFetch from './LoadingFetch'
import AddCartButton from './AddCartButton'
import Rating from './Rating'


export default function Product() {

    const [searchParams, setSearchParams] = useSearchParams({ q: "a", img: 0 })
    const searchQuery = searchParams.get("q")
    const imgQuery = searchParams.get("img")
    const { data, errStatus } = useFetch('https://dummyjson.com/products/search?q=' + searchQuery)

    const handleChangeImage = (index) => {
        setSearchParams({ q: "a", img: index })
    }


    if (errStatus) return <p className="search-fail-size">There is an error {errStatus}</p>
    if (!data) return <LoadingFetch />
    if (data?.products.length === 0) return <p className="search-fail-size">No result found :-( </p>

    return (
        <>
            {data?.products[0] ?
                <div className="product-item">
                    <div className='img-item'>
                        <div className='list-item'>
                            {data.products[0].images.map((el, index) =>
                                <img
                                    className='list-element'
                                    src={el}
                                    onMouseDown={() => handleChangeImage(index)}
                                />
                            )}
                        </div>

                        <img
                            className='img-active'
                            src={data.products[0].images[imgQuery > data.products[0].images.length ? 0 : imgQuery]}
                        />
                    </div>
                    <div className='item-infos'>
                        <div className='item-title'>
                            <h3>
                                {data.products[0].title}
                            </h3>
                        </div>

                        <div className='item-brand'>
                            {data.products[0].brand}
                        </div>
                        <div className='item-rating'>
                            Rated {data.products[0].rating} / 5
                            <Rating number={data.products[0].rating} />
                        </div>
                        {data.products[0].stock < 10 ?
                            <div className='item-stock'>
                                Only {data.products[0].stock} available !
                            </div> : null}
                        <div className='item-price'>
                            {data.products[0].price}
                        </div>
                        <div className='item-discount'>
                            -{data.products[0].discountPercentage} % !
                        </div>
                        <div className='item-price-discount'>
                            {(data.products[0].price - (data.products[0].price * data.products[0].discountPercentage / 100)).toFixed(2)}
                        </div>
                        <div className='item-description'>
                            {data.products[0].description}
                        </div>
                        <AddCartButton
                            data={data}
                        />
                    </div>

                </div>
                :
                <LoadingFetch />}


        </>
    )
}
