import { Fragment } from "react"
import { useLoaderData, json } from "@remix-run/react"
import { authenticator } from "../services/auth.server"

import { Typography } from "@mui/material"

export const loader = async ({ request }) => {
  let data = await authenticator.isAuthenticated(request, {
    failureRedirect: "/",
  })

  return json(data)
}

export default function Profile() {
  // let isHydrated = useHydrated() // don't conditionally render anything with cookie data unless hydrated (i.e., definitely on the client)
  const { user } = useLoaderData()
  // console.log("rendering profile", user)
  return (
    <Fragment>
      <Typography variant="h1" component="h1">
        My Profile
      </Typography>
      <Typography variant="h2" component="h2">
        {user.username}
      </Typography>
      <img src={user.large_photo_url} alt="" />

      <Typography variant="body1" component="p">
        Right now, Knit Notebook only displays user data from Ravelry.
      </Typography>
    </Fragment>
  )
}
