import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductContext } from './Shop'

export default function Search() {

    const { handleSearch } = useContext(ProductContext)
    const navigate = useNavigate()
    const [question, setQuestions] = useState('')

    const handleSubmitSearch = (e) => {
        e.preventDefault()
        handleSearch(question)
        navigate('/shop?s=' + question)
    }

    return (
        <form onSubmit={handleSubmitSearch}>
            <input
                className='searchbar'
                placeholder='Your research'
                value={question}
                onChange={e => setQuestions(e.target.value)}
                type="search"
            />
            <button
                className='search-lens'
                onClick={handleSubmitSearch}
            >
                🔎
            </button>
        </form>

    )

}
