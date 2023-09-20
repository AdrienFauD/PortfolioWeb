import { useState } from "react"
import useFetch from "../../hooks/useFetch"
import ProductQuickViews from "./ProductQuickViews"
import './css/slider.css'

export default function PopularProductsSlider() {

    const request = "https://dummyjson.com/products"
    const [slideStyleGap, setSlideStyleGap] = useState(0)
    const { data, errStatus } = useFetch(request, {
        headers: {
            "Content-Type": "application/json",
        }
    })

    const handleSlideLeft = () => {
        if (slideStyleGap <= -1) setSlideStyleGap(prev => prev +1)
    }
    const handleSlideRight = () => {
        if(slideStyleGap > -ratingFilteredData.length+4) setSlideStyleGap(prev => prev - 1)
    }
    
    
    if (errStatus >= 300) return <p className="search-fail-size">There is an error {errStatus}</p>
    if (!data) return
    const ratingFilteredData = data.products.sort((p1, p2) => (p1.rating < p2.rating) ? 1 : (p1.rating > p2.rating) ? -1 : 0)
    
    return (
        <div className='slider'>
            <button className="slider-left-btn" onClick={handleSlideLeft}></button>
            <div className="slider-products">

                {data ?
                    Object.keys(ratingFilteredData).map((product, i) => (
                        <ProductQuickViews
                            key={i}
                            style={slideStyleGap}
                            filteredData={ratingFilteredData}
                            product={product}
                            i={i}
                        />))
                    : null}
            </div>
            <button className="slider-right-btn" onClick={handleSlideRight} ></button>
        </div>
    )
}
