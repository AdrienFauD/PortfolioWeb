import React from 'react'
import { useEffect, useState } from "react"


export default function useFetch(url) {

    const [ data, setData] = useState()
    useEffect(() => {
        (async () => {
            await fetch(url)
                .then(response => {return response.json()})
                .then(data => setData(data))
        })()
    }, [url])

    return data 
}
