/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'

const useForm = (getFreshModelObject: any) => {

    const [values, setValues] = useState(getFreshModelObject())
    const [errors, setErrors] = useState<any>({})

    const handleInputChange = (e: any) => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
  }
}

export default useForm