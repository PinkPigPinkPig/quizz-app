import React, { useEffect, useState } from "react"
import useStateContext from "../../hooks/useStateContext"
import { BASE_URL, END_POINT, createApiEndPoint } from "../../api"
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  LinearProgress,
  List,
  ListItemButton,
  Typography,
} from "@mui/material"
import { IQuestion } from "../../type"
import { getFormattedTime } from "../../helper"
import { useNavigate } from "react-router-dom"

const Quiz = () => {
  const [qns, setQns] = useState<IQuestion[]>([])
  const [qnIndex, setQnIndex] = useState(0)
  const [timeTaken, setTimeTaken] = useState(0)
  const { context, setContext } = useStateContext()
  let timer: number

  const navigate = useNavigate()

  const startTimer = () => {
    timer = setInterval(() => {
      setTimeTaken((prev) => prev + 1)
    }, 1000)
  }

  useEffect(() => {
    createApiEndPoint(END_POINT.QUESTION)
      .fetch()
      .then((res) => {
        setQns(res.data)
        startTimer()
      })
      .catch((err) => {
        console.log(err)
      })
    return () => {
      clearInterval(timer)
    }
  }, [])

  const updateAnswer = (qnId: number, optionIdx: number) => {
    const temp = [...context.selectedOptions]
    context.selectedOptions.push({
      qnId,
      selected: optionIdx,
    })

    if (qnIndex < 4) {
      setQnIndex((prev) => prev + 1)
      setContext({ selectedOptions: [...temp] })
    } else {
      setContext({ selectedOptions: [...temp], timeTaken })
      navigate("/result")
    }
  }

  return qns.length != 0 ? (
    <Card
      sx={{
        maxWidth: 640,
        mx: "auto",
        mt: 5,
        "& .MuiCardHeader-action": {
          m: 0,
          alignSelf: "center",
        },
      }}
    >
      <CardHeader
        title={"Question " + (qnIndex + 1) + " of 5"}
        action={<Typography>{getFormattedTime(timeTaken)}</Typography>}
      />
      <Box>
        <LinearProgress variant='determinate' value={(qnIndex + 1) * 20} />
      </Box>
      {qns[qnIndex].imageName ? (
        <CardMedia component='img' image={BASE_URL + 'images/' + qns[qnIndex].imageName} />
      ) : null}
      <CardContent>
        <Typography variant='h6'>{qns[qnIndex].qnInWords}</Typography>
        <List>
          {qns[qnIndex].options.map((item, index) => (
            <ListItemButton
              key={index}
              disableRipple
              onClick={() => updateAnswer(qns[index].qnId, index)}
            >
              <div>
                <b>{String.fromCharCode(65 + index) + " . "}</b> {item}
              </div>
            </ListItemButton>
          ))}
        </List>
      </CardContent>
    </Card>
  ) : null
}

export default Quiz
