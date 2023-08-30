import { useState } from 'react'
import useFetch from './useFetch'
import { useSearchParams } from 'react-router-dom'


export default function Product(props) {

    const { handleAddCart, isAuth } = props
    const [searchParams, setSearchParams] = useSearchParams({ q: "a", i: 0 })
    const question = searchParams.get("q")
    const data = useFetch('https://dummyjson.com/products/search?q=' + question)
    const [currentImg, setCurrentImg] = useState(0)

    
    const handleChangeImage = (index) => {
        setCurrentImg(index)
    }

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
                                    onMouseEnter={() => handleChangeImage(index)}
                                />

                            )}
                        </div>

                        <img
                            className='img-active'
                            src={data.products[0].images[currentImg]}
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
                        <button 
                        disabled={!isAuth}
                        className="add-cart-button"
                        onClick={(e) => isAuth ? handleAddCart(data.products[0]) : null}
                        >
                            Add to cart
                        </button>
                    </div>

                </div>
                :
                <div>Loading...</div>}


        </>
    )
}
