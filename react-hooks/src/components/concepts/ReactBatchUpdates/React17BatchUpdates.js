// https://blog.bitsrc.io/automatic-batching-in-react-18-what-you-should-know-d50141dc096e

import { useState } from "react";
import { unstable_batchedUpdates } from "react-dom"

const React17BatchUpdates = () => {
    const [additionCount, setAdditionCount] = useState(0);
    const [subtractionCount, setSubtractionCount] = useState(0);

    console.log("Component Rendering");

    const handleOnClick = () => {  //batched (Component renders one time)
        setAdditionCount(additionCount + 1);
        setSubtractionCount(subtractionCount - 1);
    };

    // const handleOnClickAsync = () => { //unbatched (Component renders two time)
    //   fetch("https://jsonplaceholder.typicode.com/todos/1").then(() => {
    //     setAdditionCount(additionCount + 1);
    //     setSubtractionCount(subtractionCount - 1);
    //   });
    // };

    const handleOnClickAsync = async () => { //unbatched (Component renders two time)
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        const data = await response.json()
        console.log(data)
        setAdditionCount(additionCount + 1);
        setSubtractionCount(subtractionCount - 1);
    };

    // const handleOnClickAsyncWithBatch = () => { //batched (Component renders one time)
    //   fetch("https://jsonplaceholder.typicode.com/todos/1").then(() => {
    //     unstable_batchedUpdates(() => {
    //       setAdditionCount(additionCount + 1);
    //       setSubtractionCount(subtractionCount - 1);
    //     })

    //   });
    // };

    // const handleOnClickAsyncWithBatch = async () => { //batched (Component renders one time)
    //   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    //   const data = await response.json()
    //   console.log(data)
    //   unstable_batchedUpdates(() => {
    //     setAdditionCount(additionCount + 1);
    //     setSubtractionCount(subtractionCount - 1);
    //   })
    // };


    return (
        <div>
            <button style={{ width: "50%", height: "30%" }}
                onClick={() => {
                    // handleOnClick();
                    handleOnClickAsync();
                    // handleOnClickAsyncWithBatch();
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
export default React17BatchUpdates;