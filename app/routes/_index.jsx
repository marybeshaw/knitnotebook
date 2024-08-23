import * as React from "react"
import { Link as RemixLink } from "@remix-run/react"
import { Link, Typography } from "@mui/material"

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
      <Typography variant="h1" component="h1" sx={{ mb: 2 }}>
        Knit Notebook
      </Typography>
      <Typography variant="body1">
        To use the knit notebook, you'll want a Ravelry account.
      </Typography>
      <Link to="/auth/ravelry" color="secondary" component={RemixLink}>
        Sign in with Ravelry
      </Link>{" "}
      <Link to="/about" color="secondary" component={RemixLink}>
        Go to the about page
      </Link>
    </React.Fragment>
  )
}
