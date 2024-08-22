import { useLoaderData, json } from "@remix-run/react"
import { authenticator } from "../services/auth.server"
// import { useHydrated } from "remix-utils/use-hydrated"

import axios from "axios"

export const loader = async ({ request }) => {
  let data = await authenticator.isAuthenticated(request, {
    failureRedirect: "/",
  })
  console.log("data", data)

  return json(data)
}

export default function Login() {
  // let isHydrated = useHydrated() // don't conditionally render anything with cookie data unless hydrated (i.e., definitely on the client)

  const { user, tokens } = useLoaderData()
  console.log("user data!!YAY", user)

  const response = axios.get(
    `https://api.ravelry.com/people/${user.username}/queue/list.json`,
    {
      headers: {
        Authorization: `Bearer ${tokens.access_token}`,
        Accept: "application/json",
      },
    }
  )
  console.log("axios response", response)
  return <p>Dashboard page.</p>
}
