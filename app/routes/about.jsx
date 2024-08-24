import React from "react"
import Link from "../src/components/Link"

import { Typography } from "@mui/material"

export default function About() {
  return (
    <>
      <Typography variant="h1" component="h1">
        About the Knit Notebook
      </Typography>
      <Typography variant="body2" component="p">
        Mary Shaw started this to demo "complex state in React" for UtahJS on
        September 13, 2024.
      </Typography>
      <Link variant="primaryLink" to="/">
        Go to the main page
      </Link>
    </>
  )
}
