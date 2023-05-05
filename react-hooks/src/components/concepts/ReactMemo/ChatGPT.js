// React.memo is a higher-order component in React that is similar to React.PureComponent. It is used to wrap functional components and, just like React.PureComponent, it helps to optimize the performance of your React application by preventing the re-rendering of a component if its props have not changed.

// ------ Here is an example of how you can use React.memo to wrap a functional component:

import React from 'react';

const MyFunctionalComponent = ({ name }) => {
  return <div>{name}</div>;
};

export default React.memo(MyFunctionalComponent);


// In the example above, the MyFunctionalComponent will only be re-rendered if the name prop has changed. If the name prop remains the same, the component will not be re-rendered, improving the performance of your application.

// It's important to note that React.memo only performs a shallow comparison of the props, meaning that it only checks for changes in the top-level props of the component. If you want to perform a deep comparison of the props, you can use the areEqual prop of React.memo and provide a custom comparison function that performs a deep comparison of the props.


// ----- Here is an example of how you can use the areEqual prop of React.memo to perform a deep comparison of the props:

/*
import React from 'react';

const MyFunctionalComponent = ({ name, user }) => {
  return (
    <div>
      {name} - {user.id}
    </div>
  );
};

const areEqual = (prevProps, nextProps) => {
  return (
    prevProps.name === nextProps.name &&
    prevProps.user.id === nextProps.user.id
  );
};

export default React.memo(MyFunctionalComponent, areEqual);
*/

// In the example above, the MyFunctionalComponent will only be re-rendered if the name prop or the id property of the user prop has changed. If both remain the same, the component will not be re-rendered, improving the performance of your application.



// --------- Here is an example of how you can use React.memo, useMemo, and useCallback in a React functional component:

/*
import React, { useMemo, useCallback } from 'react';

const MyFunctionalComponent = ({ name, user, onClick }) => {
  const formattedName = useMemo(() => {
    return name.toUpperCase();
  }, [name]);

  const handleClick = useCallback(() => {
    onClick(user.id);
  }, [onClick, user.id]);

  return (
    <div onClick={handleClick}>
      {formattedName} - {user.id}
    </div>
  );
};

const areEqual = (prevProps, nextProps) => {
  return (
    prevProps.name === nextProps.name &&
    prevProps.user.id === nextProps.user.id &&
    prevProps.onClick === nextProps.onClick
  );
};

export default React.memo(MyFunctionalComponent, areEqual);
*/

// In the example above, the component is wrapped with React.memo and the areEqual function is provided to perform a deep comparison of the props. The formattedName variable is calculated using the useMemo hook and the handleClick function is created using the useCallback hook.

// The formattedName variable is only recalculated if the name prop has changed, and the handleClick function is only recreated if the onClick prop or the id property of the user prop has changed. This helps to optimize the performance of the component by avoiding unnecessary re-renders and recomputations.