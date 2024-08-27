import { Fragment } from "react"
import { Typography, Link } from "@mui/material"

export default function Copyright() {
  return (
    <Fragment>
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://www.knitnotebook.com/">
          Knit Notebook
        </Link>{" "}
        {new Date().getFullYear()}.
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        This application is not affiliated with Ravelry in any way, and is not
        endorsed by or associated with Ravelry.
      </Typography>
    </Fragment>
  )
}
