import React, { useState } from 'react'
import useUpdateLogger from './useUpdateLogger'

function useUpdateLoggerHook() {
    const [name, setName] = useState("")

    useUpdateLogger(name)
    return (
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    )
}

export default useUpdateLoggerHook