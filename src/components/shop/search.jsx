import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function Search(props) {

    const { handleSearch } = props
    const URL_SEARCH = 'https://dummyjson.com/products/search?q='
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams({ s: "" })  
    const question = searchParams.get("s")

    const handleSubmitSearch = (e) => {
        e.preventDefault()
        handleSearch(question)
        navigate('/shop?s='+question)
    }

    return (
        <form onSubmit={handleSubmitSearch}>
            <input
                className='searchbar'
                placeholder='Your research'
                value={question}
                onChange={e => setSearchParams({ s: e.target.value })}
                type="number,text"
            />
        </form>

    )

}
