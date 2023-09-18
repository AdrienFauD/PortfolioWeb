import { useState } from "react"

export default function ProductSlider(products) {

    const [range, setRange] = useState()
    const data = products.products.filter((arr) => arr.rating > (range/10)).sort((p1, p2) => (p1.rating < p2.rating) ? 1 : (p1.rating > p2.rating) ? -1 : 0)

    return (
        <div>
            <input
                type="range"
                min={10}
                max={50}
                onChange={e => setRange(e.target.value)}
            />
            {Object.keys(data).map((product, i) => (
                <div>
                    {data[i].rating}
                </div>
            ))}


        </div>
    )
}
