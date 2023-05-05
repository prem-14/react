import React, { useEffect } from 'react'
import GrandChildComponent from './GrandChild'

function Child() {
    console.count('child')

    useEffect(() => {
        console.log("pp");
    }, [])

    return <>
        <GrandChildComponent />
    </>
}

export default Child