import React, { useState } from 'react'
import ChildComponent from './Child'

// https://kattya.dev/articles/2021-04-17-fixing-re-renders-when-using-context-in-react/

export const ThemeContext = React.createContext()
function useContextHook() {
    const [dark, setDark] = useState(false)

    const themeStyles = {
        backgroundColor: dark ? 'black' : "white",
        color: !dark ? 'black' : "white"
    }

    console.count('parent')
    return (
        <ThemeContext.Provider value={{ dark, setDark, themeStyles }}>
            <ChildComponent />
        </ThemeContext.Provider>
    )
}

export default useContextHook