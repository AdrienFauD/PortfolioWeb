import { useState } from 'react'

export default function SearchWithFilter() {
    const [rangePrice, setRangePrice] = useState('')
    const [rating, setRating] = useState('')



    return (
        <form>
            sorting price ASC
            sorting price DSC
            <input
                type="range"
                min={1}
                max={5000}
                onChange={(e) => setRating(e.target.value)}
            />
            <input
                name='rating'
                type="range"
                min={0}
                max={50}
                onChange={(e) => setRangePrice(e.target.value)}
            />
            <input type="range" />
            confirm
        </form>
    )
}
