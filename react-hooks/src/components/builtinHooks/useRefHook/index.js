import React, { useEffect, useRef, useState } from 'react'

/*
function useRefHook() {
    const [name, setName] = useState('')
    // const [renderCount, setRenderCount] = useState(0)
    const renderCount = useRef(0)

    // BAD ( usestate will rerender component for every state change. So it will become a infinite loop)
    // useEffect(() => {
    //     setRenderCount(prev => prev + 1)
    // })

    useEffect(() => {
        renderCount.current = renderCount.current + 1
    })
    return (
        <div>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <p>{renderCount.current}</p>
        </div>
    )
}
*/
/*
function useRefHook() {
    const [name, setName] = useState('prem')
    const prevName = useRef()
    console.count()

    useEffect(() => {
        prevName.current = name
        console.log(prevName.current)
    }, [name])

    // prevName.current = name

    return (
        <div>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <p>My name is {name} and it used to be {prevName.current}</p>
        </div>
    )
}
 */

// /*
function useRefHook() {
    const ref = useRef()
    console.log(ref)
    return (
        <div>
            <input ref={ref} type="text" />
            <button onClick={() => { ref.current.focus() }}>Focus</button>
        </div>
    )
}
// */

export default useRefHook