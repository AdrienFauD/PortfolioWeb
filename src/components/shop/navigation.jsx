import useFetch from './useFetch'
import { Link } from 'react-router-dom'

export default function Navigation() {

    const data = useFetch('https://dummyjson.com/products/categories')

    return (
        <>
            <ul>
                {data?.map(el =>
                    <li key={el}>
                        <Link to={`/shop?q=${el}`} style={{textDecoration: "none", color : 'black'}}>
                            {el.charAt(0).toUpperCase() + el.slice(1)}
                        </Link>
                    </li>
                )}
            </ul>
        </>
    )
}
