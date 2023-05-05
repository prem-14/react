import React, { useState, useTransition } from 'react'

// https://www.youtube.com/watch?v=N5R6NL3UE7I&ab_channel=WebDevSimplified
// https://blog.webdevsimplified.com/2022-04/use-transition/

const useTransitionHook = () => {
    const [value, setValue] = useState('')
    const [list, setList] = useState([])
    const [isPending, startTransition] = useTransition()

    const handleChange = (e) => {
        setValue(e.target.value)
        startTransition(() => {
            console.count()
            let arr = []
            for (let i = 0; i < 20000; i++) {
                arr.push(e.target.value)
            }
            setList(arr)
        })

    }

    return (
        <div>
            <input type="text" value={value} onChange={handleChange} />
            {isPending ? "Loading" : <>
                {list.map(d => {
                    return <p>{d}</p>
                })}
            </>}
        </div>
    )
}

export default useTransitionHook