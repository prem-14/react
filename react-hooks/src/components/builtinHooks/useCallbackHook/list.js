import React, { useEffect, useState } from 'react'

function List({ getItems }) {
    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(getItems(2))
        console.log("getItems changed")
    }, [getItems])
    return (
        <>
            {items.map((item, i) => <div key={i}>{item}</div>)}
        </>
    )
}

export default List