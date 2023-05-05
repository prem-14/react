
What do you think will happen if we add a callback ref?

```js
import React, { useEffect } from "react";

const Internal = React.forwardRef((props, ref) => {
    console.log("I'm called after")

    useEffect(() => {
        console.log("I'm called after Internal mounts");
    });
    return <div ref={ref}>Child Component</div>
})

const App = () => {
    console.log("I'm called first");

    useEffect(() => {
        console.log("I'm called after App mounts");
    })
    return (
        <div ref={ref => console.log("I'm called when the element is in the App")}>
            <Internal ref={ref => console.log("I'm called when the element is in the Internal")} />
        </div>
    );
}

export default App
```
The result:
```
 I'm called first
 I'm called after
 I'm called when the element is in the Internal
 I'm called when the element is in the App
 I'm called after Internal mounts
 I'm called after App mounts
```

This is tricky but important: it tells us when we can expect to access an element in the DOM, and the answer is after components are rendered but before the effects run.

