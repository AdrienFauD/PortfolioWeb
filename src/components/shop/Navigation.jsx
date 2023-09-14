import useFetch from '../../hooks/useFetch'
import { Link } from 'react-router-dom'


export default function Navigation() {

    const { data } = useFetch('https://dummyjson.com/products/categories')


    if (!data) return

    return (
        <>
            <div className='top-bar-category'>
                <span>Categories</span>

                <ul>
                    {data?.map(el =>
                        <li key={el}>
                            <Link className={el} to={`/shop?category=${el}`}>
                                {el.charAt(0).toUpperCase() + el.slice(1)}
                            </Link>
                        </li>
                    )}
                </ul>
            </div>

        </>
    )
}
