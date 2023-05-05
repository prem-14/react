import React, { useMemo, useState, useDeferredValue, useEffect } from 'react'

// https://www.youtube.com/watch?v=jCGMedd6IWA&ab_channel=WebDevSimplified
// https://blog.webdevsimplified.com/2022-05/use-deferred-value/

// function List({ text }) {
//     const LIST_SIZE = 20000
//     const list = useMemo(() => {
//         let arr = []
//         for (let i = 0; i < LIST_SIZE; i++) {
//             arr.push(<p>{text}</p>)
//         }
//         return arr
//     }, [text])

//     return list
// }

function DeferredList({ text }) {
    const LIST_SIZE = 20000
    const deferredText = useDeferredValue(text)
    const list = useMemo(() => {
        let arr = []
        for (let i = 0; i < LIST_SIZE; i++) {
            arr.push(<p>{deferredText}</p>)
        }
        return arr
    }, [deferredText])

    useEffect(() => {
        console.log(`Text: ${text}   DeferredText: ${deferredText}`)
    }, [text, deferredText])

    return list
}

const useDeferredHook = () => {
    const [value, setValue] = useState('')

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <div>
            <input type="text" value={value} onChange={handleChange} />
            <DeferredList text={value} />
        </div>
    )
}

export default useDeferredHook