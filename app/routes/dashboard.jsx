import { Fragment } from "react"
import { useLoaderData, json } from "@remix-run/react"
import { authenticator } from "../services/auth.server"
import { Typography } from "@mui/material"
import Link from "../src/components/Link"

export const loader = async ({ request }) => {
  let data = await authenticator.isAuthenticated(request, {
    failureRedirect: "/",
  })

  return json(data)
}

export default function Dashboard() {
  const { user } = useLoaderData()
  console.log("rendering dashboard", user)

  return (
    <Fragment>
      <Typography variant="h1" component="h1">
        Knit Notebook Dashboard
      </Typography>
      <Typography variant="body2" component="p">
        Welcome to your Knit Notebook, where you can update your Ravelry
        notebook with a different UI.
      </Typography>
      <Typography variant="body2" component="p">
        What will you work on next? Check out your{" "}
        <Link to="/queue">queue</Link>!
      </Typography>
    </Fragment>
  )
}
