import useFetch from '../../hooks/useFetch'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {

    const { data, err, loading } = useFetch('https://dummyjson.com/products/categories')
    const [toggleList, setToggleList] = useState(true)

    const handleShowList = () => {
        setToggleList(prev => !prev)
    }

    useEffect(() => {
        if (window.innerWidth < 400) {
            setToggleList(false)
        }
    }, [])

    return (
        <>
            <div className='wrapper-nav-list' onClick={handleShowList}>
                <span>| | |</span>
            </div>
            <ul style={{ display: toggleList ? "block" : "none" }}>
                {data?.map(el =>
                    <li key={el}>
                        <Link to={`/shop?category=${el}`} style={{ textDecoration: "none", color: 'black' }}>
                            {el.charAt(0).toUpperCase() + el.slice(1)}
                        </Link>
                    </li>
                )}
            </ul>
        </>
    )
}
