import { forwardRef } from 'react';

// forwardRef lets your component expose a DOM node to parent component with a ref.

const MyInput = forwardRef(function MyInput(props, ref) {
    const { label, ...otherProps } = props;
    return (
        <label>
            {label}
            <input {...otherProps} ref={ref} />
        </label>
    );
});

export default MyInput;