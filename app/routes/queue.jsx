import { Fragment } from "react"
import { useLoaderData, json } from "@remix-run/react"

import { authenticator } from "../services/auth.server"
import { getQueue, postReorderQueue } from "../services/queue.server"

import SortableQueue from "../src/components/SortableQueue"

import { Typography } from "@mui/material"

export const loader = async ({ request }) => {
  let { user, tokens } = await authenticator.isAuthenticated(request, {
    failureRedirect: "/",
  })
  const queuedProjects = await getQueue({
    accessToken: tokens.access_token,
    username: user.username,
  })
  return json({ user, tokens, queuedProjects })
}

export async function action({ request }) {
  const { projectId, newPosition } = await request.json()
  let { user, tokens } = await authenticator.isAuthenticated(request, {
    failureRedirect: "/",
  })
  try {
    await postReorderQueue({
      projectId,
      newPosition,
      username: user.username,
      accessToken: tokens.access_token,
    })
    // console.log(`moving item ${projectId} to ${newPosition}`)
    return true
  } catch (e) {
    console.log("queue reorder error:", e)
    return e
  }
}

export default function Queue() {
  const { queuedProjects } = useLoaderData()

  return (
    <Fragment>
      <Typography variant="h1" component="h1" sx={{ padding: "10px" }}>
        My Queue
      </Typography>
      <SortableQueue queuedProjects={queuedProjects} />
      <Typography>
        To add something to your Ravelry queue, please visit Ravelry.
      </Typography>
    </Fragment>
  )
}
