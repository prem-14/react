// In React, a batch update is a way to optimize the rendering of a component by grouping multiple updates together and applying them all at once. By default, React performs updates to the DOM asynchronously, meaning that multiple updates to a component can be batched together and applied in a single DOM update

// -------- Here is an example of how batch updates work in a functional React component using the useState hook:

/*
import React, { useState } from 'react';

const MyFunctionalComponent = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
    };

    return (
        <div>
            <div>Count: {count}</div>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
};

export default MyFunctionalComponent
*/


// In the example above, the handleClick function is called when the button is clicked.It updates the count state three times in a row, incrementing the value by 1 each time.However, because of batch updates, the component will only be re - rendered once, with the final count value of 1.

// This is because React groups multiple setCount calls into a single update and applies all the changes at once, avoiding unnecessary re - renders of the component.

//     It's important to note that batch updates are not always the optimal solution for optimizing the performance of your React application. In some cases, applying updates immediately can be more performant, especially if the updates are independent of each other. You can use the useReducer hook to apply updates immediately.


// -------- Here is an example of how you can use the useReducer hook to apply updates immediately:

/*
import React, { useReducer } from 'react';

const initialState = { count: 0 };

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        default:
            throw new Error();
    }
};

const MyFunctionalComponent = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleClick = () => {
        dispatch({ type: 'increment' });
        dispatch({ type: 'increment' });
        dispatch({ type: 'increment' });
    };

    return (
        <div>
            <div>Count: {state.count}</div>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
};
*/

// In the example above, the dispatch function is called three times to dispatch an action that increments the count value in the state by 1. Because the useReducer hook does not batch updates, the component is re - rendered three times, with the final count value of 3.


// -------Here is an example of how batch updates work with synchronous and asynchronous functions in a functional React component using the useState hook:


import React, { useState } from 'react';


const MyFunctionalComponent = () => {
    const [count, setCount] = useState(0);


    // const handleClickSync = () => { //count: 1
    //     setCount(count + 1);
    //     setCount(count + 1);
    //     setCount(count + 1);
    // };

    // const handleClickSync = () => {  //count: 3
    //     setCount(count => count + 1);
    //     setCount(count => count + 1);
    //     setCount(count => count + 1);
    // };

    // const handleClickSync = () => {  //count: 4
    //     setCount(count + 1);
    //     setCount(count => count + 1);
    //     setCount(count => count + 1);
    //     setCount(count => count + 1);
    // };

    const handleClickSync = () => {  //count: 4
        setCount(count + 1);
        setCount(count + 1);
        setCount(count => count + 1);
        setCount(count => count + 1);
        setCount(count => count + 1);
    };

    // const handleClickSync = () => {  //count: 1
    //     setCount(count + 1);
    //     setCount(count + 1);
    //     setCount(count => count + 1);
    //     setCount(count => count + 1);
    //     setCount(count => count + 1);
    //     setCount(count + 1);
    // };


    return (
        <div>
            <div>count: {count}</div>
            <button onClick={handleClickSync}>Increment Sync</button>
        </div>
    );
};

export default MyFunctionalComponent
