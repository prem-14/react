import { useState } from "react";

function BuggyCounter() {
    const [counter, setCounter] = useState(0);

    function handleClick() {
        setCounter(counter + 1);
    }

    if (counter === 5) {
        // Simulate a JS error
        throw new Error('I crashed!');
    }

    return <h1>Counter <button onClick={handleClick}>{counter}</button></h1>;
}

export default BuggyCounter