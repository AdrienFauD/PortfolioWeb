import React from 'react'
import useFetch from './useFetch'
import { Link, Outlet } from 'react-router-dom'

export default function Navigation() {

    const data = useFetch('https://dummyjson.com/products/categories')

    return (
        <>
            <ul>
                {data?.map(el =>
                    <li>
                        <Link to={`/shop?q=${el}`} style={{textDecoration: "none", color : 'black'}}>
                            {el.charAt(0).toUpperCase() + el.slice(1)}
                        </Link>
                    </li>
                )}
            </ul>
        </>
    )
}
