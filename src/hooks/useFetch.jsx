import { useEffect, useState } from "react"


export default function useFetch(url, actions) {

    const [data, setData] = useState()
    const [errStatus, setErrStatus] = useState()

    useEffect(() => {
        (async () => {
            await fetch(url, actions )
                .then(response => {
                    if (!response.ok) {
                        throw(response.status)
                    }
                    return response.json()
                })
                .then(data => setData(data))
                .catch((errStatus) => {
                    setErrStatus(errStatus)
                })
        })()
    }, [url])
    
    return { data, errStatus }
}
