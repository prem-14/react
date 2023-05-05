## Important videos

[All useEffect Mistakes Every Junior React Developer Makes](https://www.youtube.com/watch?v=QQYeipc_cik&ab_channel=LamaDev)
[6 State Mistakes Every Junior React Developer Makes](https://www.youtube.com/watch?v=Fhu5cu864ag&ab_channel=LamaDev)
[Why do We Need Keys in React?](https://www.youtube.com/watch?v=J_S97E8xjcA&ab_channel=codedamn)

## Important blogs

https://blog.logrocket.com/post-hooks-guide-react-call-order/

https://alexsidorenko.com/blog/react-render-refs/

https://blog.10pines.com/2018/08/27/reactjs-virtual-dom/

https://blog.logrocket.com/virtual-dom-react/

# what is mounting in react

In React, "mounting" refers to the process of creating a new component and inserting it into the DOM (Document Object Model) so that it can be rendered on the screen. This process involves several steps, including:

### Class components

- constructor() - The constructor method is called first when a new component is created. This is where you can initialize state and bind methods to the component.

- getDerivedStateFromProps() - This is an optional method that is called right before rendering. It is used to update the state of the component based on changes in props.

- render() - This is a required method that returns the JSX (JavaScript XML) that represents the component. This method is called every time the state or props of the component change.

- componentDidMount() - This is called immediately after the component is mounted (i.e., inserted into the DOM). This is where you can do any initial setup that requires access to the DOM, such as setting up event listeners.

Once the mounting process is complete, the component is considered "mounted" and is now visible on the screen.

```js
import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log('Component mounted!');
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

```

In this example, the MyComponent class extends the Component class from the react module. The constructor method is used to initialize the component's state, and the componentDidMount method is used to log a message to the console when the component is mounted.

In the render method, the current state of the count variable is displayed, along with a button that updates the count state variable when clicked. The button's onClick handler updates the count state by calling setState

### Function components

Certainly! In functional components, the process of mounting a component is slightly different than in class components. Here are the steps involved:

Declare the component using a function that returns JSX. The function can take in any necessary props as arguments.

Use the useState hook to initialize state, if needed.

Use the useEffect hook to handle any lifecycle methods. In the case of mounting, you would use the useEffect hook with an empty dependency array ([]) to mimic the componentDidMount method. This is where you can do any initial setup that requires access to the DOM, such as setting up event listeners.

Return the JSX that represents the component.

Here's an example of a functional component that uses the mounting process:

```js
import React, { useState, useEffect } from 'react';

function MyComponent(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Mimic componentDidMount
    console.log('Component mounted!');
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

```

In this example, the useState hook is used to initialize a count state variable. The useEffect hook is used with an empty dependency array to log a message to the console when the component is mounted. Finally, the JSX that represents the component is returned, including a button that updates the count state variable when clicked.