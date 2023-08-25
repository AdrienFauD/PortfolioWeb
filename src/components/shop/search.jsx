import React from 'react'
import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function Search(props) {

    const { handleSearch } = props
    const URL_SEARCH = 'https://dummyjson.com/products/search?q='
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams({ q: "" })  
    const question = searchParams.get("q")

    const handleSubmitSearch = (e) => {
        e.preventDefault()
        handleSearch()
        navigate('/shop?q='+question)
    }

    return (
        <form onSubmit={handleSubmitSearch}>
            <input
                placeholder='Your research'
                value={question}
                onChange={e => setSearchParams({ q: e.target.value })}
                type="number,text"
                style={{ width: '100px', height: '100px' }}
            />
        </form>

    )

}
