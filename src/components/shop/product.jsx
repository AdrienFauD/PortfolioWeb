import React from 'react'
import { useLocation, useOutletContext, useParams } from 'react-router-dom'
import useFetch from './useFetch'


export default function Product() {

    const location = useLocation()
    
    return (
        <>
            {/*id, brand, title, stock, rating, price, description, discountPercentage, images, category */}

            <div>
                {location.state.title}
            </div>
            <div>
                {location.state.brand}
            </div>
            <div>
                {location.state.stock}
            </div>
            <div>
                {location.state.price}
            </div>
            <div>
                {location.state.discountPercentage}
            </div>
            <div>
                {location.state.rating}
            </div>
            <div>
                {location.state.description}
            </div>
            <div>
                {location.state.category}
            </div>
            <div>
                {() => {
                    location.state.images.forEach( element => {
                        console.log(element)
                    })
                }}
                {location.state.images[0]}
            </div>

        </>
    )
}
