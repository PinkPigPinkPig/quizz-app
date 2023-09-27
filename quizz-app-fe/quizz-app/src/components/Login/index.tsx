/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react"
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material"
import { Center } from ".."
import useForm from "../../hooks/useForm"
import { END_POINT, createApiEndPoint } from "../../api"

const getFreshModelObject = () => ({
  name: "",
  email: "",
})

const Login = () => {
  const { values, errors, setErrors, handleInputChange } = useForm(getFreshModelObject)

  const validate = () => {
    const temp = {
      email: "",
      name: "",
    }
    temp.email = /\S+@\S+\.\S+/.test(values.email) ? "" : "Email is not valid."
    temp.name = values.name != "" ? "" : "This field is required"
    setErrors(temp)
    return Object.values(temp).every((x) => x == "")
  }

  const handleLogin = (e: any) => {
    e.preventDefault()
    if(validate()) {
        createApiEndPoint(END_POINT.PARTICIPANT)
          .post(values)
          .then(res => console.log(res))
          .catch(res => console.log(res))
    }
  }

  return (
    <Center>
      <Card>
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant='h3' my={3}>
            Quiz App
          </Typography>
          <Box
            sx={{
              "& .MuiTextField-root": {
                m: 1,
                width: "90%",
              },
            }}
          >
            <form noValidate autoComplete='off' onSubmit={handleLogin}>
              <TextField
                label='Email'
                name='email'
                value={values.email}
                onChange={handleInputChange}
                variant='outlined'
                {...(errors.email && {
                  error: true,
                  helperText: errors.email,
                })}
              />
              <TextField
                label='Name'
                name='name'
                value={values.name}
                onChange={handleInputChange}
                variant='outlined'
                {...(errors.name && {
                    error: true,
                    helperText: errors.name,
                  })}
              />
              <Button
                type='submit'
                variant='contained'
                size='large'
                sx={{ m: 1, mt: 3, width: "90%" }}
              >
                Start
              </Button>
            </form>
          </Box>
        </CardContent>
      </Card>
    </Center>
  )
}

export default Login
