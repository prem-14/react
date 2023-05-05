import React, { useState, useMemo, useCallback, memo } from 'react'

function Swatch({ params, onClick }) {
  console.log(`Swatch rendered ${params.color}`)

  return (
    <div
      style={{ width: '75px', height: '75px', backgroundColor: params.color }}
      onClick={onClick}
    ></div>
  )
}

const MemoizedSwatch = memo(Swatch)

function ReactMemo() {
  const [renderIndex, setRenderIndex] = useState(0)
  const [color, setColor] = useState('red')

  console.log(`App rerendered ${renderIndex}`)

  const params = useMemo(() => ({ color }), [color])
  const onclick = useCallback(() => {}, [])

  return (
    <div>
      <div>
        <button onClick={() => setRenderIndex(renderIndex + 1)}>
          Rerender App
        </button>
        <button onClick={() => setColor(color === 'red' ? 'blue' : 'red')}>
          Change color
        </button>
      </div>
      <div>
        {/* <MemoizedSwatch params={{ color }} onClick={() => { }} /> */}
        <MemoizedSwatch params={params} onClick={onclick} />
      </div>
    </div>
  )
}

export default ReactMemo
