import React, { useEffect } from 'react'

const Child = () => {

    useEffect(() => {
        console.log("Child called")

        return () => console.log("Child cleared")
    }, [])
    return (
        <div>Child</div>
    )
}

export default Child