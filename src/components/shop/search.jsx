import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Search(props) {

    const { handleSearch } = props
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
                onChange={e => setQuestions( e.target.value )}
                type="number,text"
            />
        </form>

    )

}
