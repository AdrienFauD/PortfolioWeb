import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

export default function Search() {

    const [searchParams, setSearchParams] = useSearchParams({ q: "a", i: 0 })
    const question = searchParams.get("q")
    const ind = searchParams.get("i")
    console.log(searchParams)

    return (
        <input
            placeholder='Your research'
            value={question}
            onChange={e => setSearchParams({ q : e.target.value})}
            type="number,text"
        />
    )

}
