import React, { useContext } from 'react'
import { ThemeContext } from '.'

function GrandChild() {
    const { dark, setDark, themeStyles } = useContext(ThemeContext)
    console.count('grandchild')

    return (
        <>
            <div style={themeStyles}>The theme is {dark ? 'Dark' : 'light'}</div>
            <button onClick={() => setDark(prev => !prev)}>
                Theme
            </button>
        </>
    )
}

export default GrandChild