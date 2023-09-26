import { Grid } from "@mui/material"
import React, { ReactNode } from "react"

interface CenterProps {
    children: ReactNode
}

const Center: React.FC<CenterProps> = ({children}) => {
  return (
    <Grid
      container
      direction='column'
      alignItems='center'
      justifyContent='center'
      sx={{ minHeight: "100vh" }}
    >
      <Grid item xs={12}>
        {children}
      </Grid>
    </Grid>
  )
}

export default Center
