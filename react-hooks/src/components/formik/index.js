import React, { useEffect, useMemo } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import debounce from 'lodash/debounce'

function Formik() {
  let schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
  })
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validationSchema: schema,
    validateOnBlur: true,
    // validateOnMount: true,
    validateOnChange: false,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  // const debouncedValidate = useMemo(
  //     () => debounce(formik.validateForm, 1000),
  //     [formik.validateForm],
  // );

  // console.log("debouncedValidate", debouncedValidate)

  // useEffect(
  //     () => {
  //         debouncedValidate(formik.values);
  //     },
  //     [formik.values, debouncedValidate],
  // );

  useEffect(() => {
    console.count('formik')
    console.log(formik)
  }, [formik])

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor='firstName'>First Name</label>
        <input
          id='firstName'
          name='firstName'
          type='text'
          //   onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        <label htmlFor='lastName'>Last Name</label>
        <input
          id='lastName'
          name='lastName'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        <label htmlFor='email'>Email Address</label>
        <input
          id='email'
          name='email'
          type='text'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Formik

// https://formik.org/docs/guides/validation#when-does-validation-run
