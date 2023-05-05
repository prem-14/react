import React, { useEffect, useState } from 'react'

function UseEffectHook() {
    const [state, setState] = useState("post")


    useEffect(() => {
        console.log("prem")

        return () => {
            console.log("prem cleared")
        }
    }, [state])

    useEffect(() => {
        console.log("kumar")

        return () => {
            console.log("kumar cleared")
        }
    }, [state])

    console.count()

    return (
        <div>
            <button onClick={() => setState("post")}>post</button>
            <button onClick={() => setState("comment")}>comment</button>
            <button onClick={() => setState("review")}>review</button>
            <button>nothing</button>
        </div>
    )
}

export default UseEffectHook