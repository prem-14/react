// https://blog.bitsrc.io/automatic-batching-in-react-18-what-you-should-know-d50141dc096e

import { useState } from "react";
import { flushSync } from "react-dom"

const React18BatchUpdates = () => {
    const [additionCount, setAdditionCount] = useState(0);
    const [subtractionCount, setSubtractionCount] = useState(0);

    console.log("Component Rendering");

    const handleOnClick = () => {  //batched (Component renders one time)
        setAdditionCount(additionCount + 1);
        setSubtractionCount(subtractionCount - 1);
    };

    // const handleOnClickAsync = () => { //batched (Component renders one time)
    //   fetch("https://jsonplaceholder.typicode.com/todos/1").then(() => {
    //     setAdditionCount(additionCount + 1);
    //     setSubtractionCount(subtractionCount - 1);
    //   });
    // };

    const handleOnClickAsync = async () => { //batched (Component renders one time)
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        const data = await response.json()
        console.log(data)
        setAdditionCount(additionCount + 1);
        setSubtractionCount(subtractionCount - 1);
    };

    // const handleOnClickAsyncWithBatch = () => { //unbatched (Component renders two time)
    //   fetch("https://jsonplaceholder.typicode.com/todos/1").then(() => {
    // flushSync(() => {
    //     setAdditionCount(additionCount + 1);
    // })
    // setSubtractionCount(subtractionCount - 1);

    //   });
    // };

    const handleOnClickAsyncWithBatch = async () => { //unbatched (Component renders two time)
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        const data = await response.json()
        console.log(data)
        flushSync(() => {
            setAdditionCount(additionCount + 1);
        })
        setSubtractionCount(subtractionCount - 1);

    };


    return (
        <div>
            <button style={{ width: "50%", height: "30%" }}
                onClick={() => {
                    // handleOnClick();
                    // handleOnClickAsync();
                    handleOnClickAsyncWithBatch();
                }}
            >
                Click Me!
            </button><div>
                Add Count: {additionCount}
            </div>
            <div>
                Substraction Count: {subtractionCount}
            </div></div>
    );
};
export default React18BatchUpdates;