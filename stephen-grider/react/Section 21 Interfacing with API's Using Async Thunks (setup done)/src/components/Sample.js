import React, { useEffect, useState } from 'react'
import axios from 'axios';

function pause(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}

const Sample = () => {
    const [data, setData] = useState({})
    const [loadAndError, setLoadAndError] = useState({ loading: true, error: null })

    useEffect(() => {
        const controller = new AbortController()

        const fetchTodo = async () => {
            try {
                setLoadAndError({ loading: false, error: null })
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1', { signal: controller.signal })
                await pause(3000)
                setData(response.data)
                setLoadAndError({ loading: false, error: null })
            } catch (e) {
                setLoadAndError({ loading: false, error: e })
            }
        }
        fetchTodo()

        return () => {
            controller.abort()
            setLoadAndError({ loading: false, error: null })
        }
    }, [])

    return (
        <div>
            {loadAndError.error && 'Error'}
            {loadAndError.loading ? "loading" : <>{JSON.stringify(data)}</>}
        </div>
    )
}

export default Sample
