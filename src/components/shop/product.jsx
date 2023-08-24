import React from 'react'
import { useLocation } from 'react-router-dom'


export default function Product() {

    const { id } = useLocation()
    return (
        <div>product</div>
    )
}
