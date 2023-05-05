import React, { useState, useEffect, useLayoutEffect, useRef } from 'react'

// https://www.youtube.com/watch?v=wU57kvYOxT4&ab_channel=WebDevSimplified
// https://blog.webdevsimplified.com/2020-07/use-layout-effect/

const UseLayoutEffectHook = () => {
    const [show, setShow] = useState(false)
    const popup = useRef()
    const button = useRef()

    useLayoutEffect(() => {
        // useEffect(() => {
        console.log(show, popup.current, popup.current === null, popup.current == null)
        if (popup.current == null || button.current == null) return
        const { bottom } = button.current.getBoundingClientRect()
        popup.current.style.top = `${bottom + 25}px`
    }, [show])


    return (
        <div>
            <button ref={button} onClick={() => setShow(prev => !prev)}>Click Here</button>
            {show && <div ref={popup} style={{ position: "absolute" }}>This is a popup</div>}
        </div>
    )
}

export default UseLayoutEffectHook

// undefined == null ==> true
// undefined === null  ==> false