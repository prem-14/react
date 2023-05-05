import React, { useEffect, useMemo, useState } from 'react'

const slowFunction = (num) => {
    for (let i = 0; i < 1000000000; i++) { }
    return num * 2
}

function useMemoHook() {
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)

    // const doubleNumber = slowFunction(number)
    const doubleNumber = useMemo(() => {
        return slowFunction(number)
    }, [number])

    // const themeStyles = {
    //     backgroundColor: dark ? 'black' : "white",
    //     color: !dark ? 'black' : "white"
    // }

    const themeStyles = useMemo(() => {
        return {
            backgroundColor: dark ? 'black' : "white",
            color: !dark ? 'black' : "white"
        }
    }, [dark])

    useEffect(() => {
        console.log("theme changed")
    }, [themeStyles])

    return (
        <div>
            <input type="number" onChange={(e) => setNumber(parseInt(e.target.value))} />
            <button onClick={() => setDark(prevDark => !prevDark)}>theme</button>
            <div style={themeStyles}>{doubleNumber}</div>
        </div>
    )
}

export default useMemoHook