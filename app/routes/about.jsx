import React, { Fragment } from "react"
import Link from "../src/components/Link"
import { Link as MLink , Typography } from "@mui/material"


export default function About() {
  return (
    <Fragment>
      <Typography variant="h1" component="h1">
        About the Knit Notebook
      </Typography>
      <Typography variant="body2" component="p">
        Mary Shaw started this to demo &rquot;complex state in React&lquot; for
        UtahJS on September 13, 2024.
      </Typography>

      <Typography variant="body2" component="p">
        <MLink href="https://remix.run/">Remix</MLink> is the React SSR stack.
      </Typography>
      <Typography variant="body2" component="p">
        <MLink href="https://mui.com/material-ui">Material UI</MLink> is the
        base design system.
      </Typography>
      <Link variant="primaryLink" to="/">
        Go to the main page
      </Link>
    </Fragment>
  )
}
