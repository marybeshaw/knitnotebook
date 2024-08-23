import * as React from "react"
import { Link } from "@remix-run/react"
import { Typography, Button } from "@mui/material"

export default function About() {
  return (
    <React.Fragment>
      <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
        Knit Notebook by Mary Shaw
      </Typography>
      <Button variant="contained" component={Link} to="/">
        Go to the main page
      </Button>
    </React.Fragment>
  )
}
