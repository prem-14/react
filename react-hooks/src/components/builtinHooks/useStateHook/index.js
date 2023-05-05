import React, { useState } from 'react'

const countInitial = () => {
    console.count('initial')
    return 0
}

function UseSateHook() {
    const [count, setCount] = useState(4) // rerender everytime
    // const [count, setCount] = useState(countInitial()) // rerender everytime
    // const [count, setCount] = useState(countInitial) // render once ( use for time consuming computation)

    console.count()

    const decrement = () => {
        // setCount(count - 1) // don't use
        // setCount(count - 1)
        setCount(previousCount => previousCount - 1)
    }
    const increment = () => {
        // setCount(count + 1)
        setCount(previousCount => previousCount + 1)
    }

    return (
        <div>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default UseSateHook