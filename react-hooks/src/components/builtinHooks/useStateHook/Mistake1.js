import React, { useState } from 'react'

const Mistake1 = () => {
    const [number, setNumber] = useState(0)

    const increase = () => {
        setNumber(number + 1)
    }

    const increaseAsync = () => {
        setInterval(() => {
            setNumber(number + 1)
        }, 2000)
    }

    return (
        <div>
            <p>Mistake1</p>
            <button onClick={increase}>Increase</button>
            <button onClick={increaseAsync}>Increase Async</button>
        </div>
    )
}

export default Mistake1