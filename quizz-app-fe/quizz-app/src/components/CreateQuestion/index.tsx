/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react"
import { Center } from ".."
import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material"
import useForm from "../../hooks/useForm"
import { END_POINT, createApiEndPoint } from "../../api"

const getFreshModelObject = () => ({
  qnInWords: "",
  imageName: "",
  option1: "",
  option2: "",
  option3: "",
  option4: "",
  level: "",
  answer: "",
})

const CreateQuestion = () => {
  const { values, errors, setErrors, handleInputChange } =
    useForm(getFreshModelObject)
  const validate = () => {
    const temp = {
      qnInWords: "",
      imageName: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      level: "",
      answer: "",
    }
    temp.qnInWords = values.qnInWords != "" ? "" : "This field is required"
    temp.option1 = values.option1 != "" ? "" : "This field is required"
    temp.option2 = values.option2 != "" ? "" : "This field is required"
    temp.option3 = values.option3 != "" ? "" : "This field is required"
    temp.option4 = values.option4 != "" ? "" : "This field is required"
    temp.level = values.level > 0 ? "" : "This field is required"
    temp.answer = values.answer > 0 ? "" : "This field is required"
    setErrors(temp)
    return Object.values(temp).every((x) => x == "")
  }
  const handleCreateQuestion = (e: any) => {
    e.preventDefault()
    if (validate()) {
      createApiEndPoint(END_POINT.QUESTION)
        .post(values)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => console.log(err))
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
              width: "640px",
              "& .MuiTextField-root": {
                m: 1,
                width: "90%",
              },
              "& .MuiFormControl-root": {
                m: 1,
                width: "90%",
              },
              "& .MuiSelect-select": {
                textAlign: "left",
              },
            }}
          >
            <form noValidate autoComplete='off' onSubmit={handleCreateQuestion}>
              <TextField
                label='Question'
                name='qnInWords'
                variant='outlined'
                value={values.qnInWords}
                onChange={handleInputChange}
                {...(errors.qnInWords && {
                  error: true,
                  helperText: errors.qnInWords,
                })}
              />
              <TextField
                label='Image'
                name='imageName'
                variant='outlined'
                value={values.imageName}
                onChange={handleInputChange}
              />
              <TextField
                label='Option 1'
                name='option1'
                variant='outlined'
                value={values.option1}
                onChange={handleInputChange}
                {...(errors.option1 && {
                  error: true,
                  helperText: errors.option1,
                })}
              />
              <TextField
                label='Option 2'
                name='option2'
                variant='outlined'
                value={values.option2}
                onChange={handleInputChange}
                {...(errors.option2 && {
                  error: true,
                  helperText: errors.option2,
                })}
              />
              <TextField
                label='Option 3'
                name='option3'
                variant='outlined'
                value={values.option3}
                onChange={handleInputChange}
                {...(errors.option3 && {
                  error: true,
                  helperText: errors.option34,
                })}
              />
              <TextField
                label='Option 4'
                name='option4'
                variant='outlined'
                value={values.option4}
                onChange={handleInputChange}
                {...(errors.option4 && {
                  error: true,
                  helperText: errors.option4,
                })}
              />
              <FormControl
                {...(errors.answer && {
                  error: true,
                })}
              >
                <InputLabel id='demo-simple-select-label'>Answer</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  label='Answer'
                  name='answer'
                  value={values.answer}
                  onChange={handleInputChange}
                >
                  <MenuItem value={1}>Option 1</MenuItem>
                  <MenuItem value={2}>Option 2</MenuItem>
                  <MenuItem value={3}>Option 3</MenuItem>
                  <MenuItem value={4}>Option 4</MenuItem>
                </Select>
                {errors.answer && (
                  <FormHelperText>{errors.answer}</FormHelperText>
                )}
              </FormControl>
              <FormControl
                {...(errors.answer && {
                  error: true,
                })}
              >
                <InputLabel id='demo-simple-select-label'>Level</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  label='Level'
                  name='level'
                  value={values.level}
                  onChange={handleInputChange}
                >
                  <MenuItem value={1}>Easy</MenuItem>
                  <MenuItem value={2}>Medium</MenuItem>
                  <MenuItem value={3}>Option 3</MenuItem>
                </Select>
                {errors.level && (
                  <FormHelperText>{errors.level}</FormHelperText>
                )}
              </FormControl>

              <Button
                type='submit'
                variant='contained'
                size='large'
                sx={{ m: 1, mt: 3, width: "90%" }}
              >
                Submit
              </Button>
            </form>
          </Box>
        </CardContent>
      </Card>
    </Center>
  )
}

export default CreateQuestion
