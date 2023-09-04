import { useEffect, useState } from "react"


export default function useFetch(url) {

    const [ data, setData] = useState()
    const [err, setErr] = useState()
    const [loading, setLoading] = useState('true')

    useEffect(() => {
        (async () => {
            await fetch(url)
                .then(response => {
                    if(!response.ok) {
                        throw new Error('Network reponse failed')
                    }
                    return response.json()
                })
                .then(data => setData(data))
                .then(loading => setLoading(false))
                .catch((error) => setErr(error))
        })()
    }, [url])

    return { data, err, loading }
}
