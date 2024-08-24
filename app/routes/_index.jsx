import * as React from "react"
import Link from "../src/components/Link"
import { Typography } from "@mui/material"

// https://remix.run/docs/en/main/route/meta
export const meta = () => [
  { title: "Knit Notebook" },
  {
    name: "description",
    content:
      "Have fun with your Knitting Notebook - queue, favorites, and more.",
  },
]

// https://remix.run/docs/en/main/file-conventions/routes#basic-routes
export default function Index() {
  return (
    <React.Fragment>
      <Typography variant="h1" component="h1">
        Knit Notebook
      </Typography>
      <Typography variant="body1">
        Welcome to the knit notebook, a demo project for UtahJS in September.
      </Typography>
      <Typography variant="body1">
        To use the knit notebook, you&rsquo;ll want a Ravelry account.
      </Typography>
      <Link to="/auth/ravelry" variant="contained">
        Sign in with Ravelry
      </Link>
    </React.Fragment>
  )
}
