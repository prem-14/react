### On what scenarios **useFormik()** will render

**useFormik()** is a custom React Hook provided by the formik library that helps with form management in React applications. It is used to handle the state of form components and the validation of user inputs.

**useFormik()** will render in the following scenarios:

1. Initializing form state: **useFormik()** is used to initialize the initial state of the form components. It will render when the component is mounted and the form state is set.

2. Handling form submission: **useFormik()** is used to handle the submission of the form. It will render when the form is submitted and the validation is successful.

3. Updating form state: **useFormik()** is used to update the state of the form components as the user inputs data. It will render when the user enters data in the form components and the state of the form is updated accordingly.

4. Validating user input: **useFormik()** is used to validate the user input in the form components. It will render when the user inputs data and the validation rules defined in the validationSchema or validate prop are applied.

Overall, **useFormik()** is responsible for managing the form state, handling form submission, updating the form state, and validating user input. It will render in response to events that trigger any of these functionalities.

---

### formik handleBlur instead of handleChange

**formik** library provides two important event handlers for handling form input changes: **handleChange** and **handleBlur**.

**handleChange** is used to update the form values as the user types in the form fields. It's called every time the user types something in the input field.

**handleBlur** is used to validate the form values when the user moves the focus away from a particular field. It's called when the user clicks outside of the input field or presses the Tab key.

If you use **handleBlur** instead of **handleChange**, it means that you only want to validate the input field when the user has finished entering data in the field and moved on to the next one. This can be useful in scenarios where you don't want to show validation errors as the user is typing, but only after they have finished typing and moved on to the next field.

To use **handleBlur**, you can pass it as a prop to your form input component, like this:

```js
import { useFormik } from 'formik'

const MyForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(values)
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor='email'>Email Address</label>
      <input
        type='email'
        name='email'
        id='email'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <label htmlFor='password'>Password</label>
      <input
        type='password'
        name='password'
        id='password'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password ? (
        <div>{formik.errors.password}</div>
      ) : null}

      <button type='submit'>Submit</button>
    </form>
  )
}
```

In the example above, the **handleBlur** event handler is passed to the onBlur prop of the email and password input fields. When the user finishes entering data in the field and moves on to the next one, the **handleBlur** event handler is called, which triggers validation and updates the touched and errors properties in the formik object.

It's worth noting that using **handleBlur** instead of **handleChange** means that the user won't see any validation errors until they move on to the next field. If you want to show validation errors as the user types, you should use **handleChange** instead.

---
