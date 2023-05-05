import React, { useCallback, useEffect, useState } from 'react'
import List from './list'

function useCallbackHook() {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)

  const themeStyles = {
    backgroundColor: dark ? 'black' : 'white',
    color: !dark ? 'black' : 'white',
  }

  //   const getItems = (incrementor) => {
  //     return [
  //       number + incrementor,
  //       number + 1 + incrementor,
  //       number + 2 + incrementor,
  //     ]
  //   }

  const getItems = useCallback(
    (incrementor) => {
      return [
        number + incrementor,
        number + 1 + incrementor,
        number + 2 + incrementor,
      ]
    },
    [number]
  )

  useEffect(() => {
    console.log('getting', getItems)
  }, [getItems])

  return (
    <div>
      <input
        type='number'
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button
        style={themeStyles}
        onClick={() => setDark((prevDark) => !prevDark)}
      >
        Toggle theme
      </button>
      <List getItems={getItems} />
    </div>
  )
}

export default useCallbackHook
