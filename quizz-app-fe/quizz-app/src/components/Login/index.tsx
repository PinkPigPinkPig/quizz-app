/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react"
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
import useStateContext from "../../hooks/useStateContext"
import { useNavigate } from "react-router-dom"

const getFreshModelObject = () => ({
  name: "",
  email: "",
})

const Login = () => {
  const { values, errors, setErrors, handleInputChange } =
    useForm(getFreshModelObject)

  const { context, setContext, resetContext } = useStateContext()

  const navigate = useNavigate()

  useEffect(() => {
    resetContext()
  }, [])

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
    if (validate()) {
      createApiEndPoint(END_POINT.PARTICIPANT)
        .post(values)
        .then((res) => {
          setContext({ participantId: res.data.participantId })
          navigate('/quiz')
          console.log({context})
        })
        .catch((res) => console.log(res))
    }
  }

  const handleClickCreateQuestion = () => {
    navigate('/create-question')
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
              <Button
                variant='contained'
                size='large'
                sx={{ m: 1, mt: 3, width: "90%" }}
                onClick={handleClickCreateQuestion}
              >
                Create
              </Button>
            </form>
          </Box>
        </CardContent>
      </Card>
    </Center>
  )
}

export default Login
