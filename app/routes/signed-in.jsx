import React from "react"
import { useSearchParams } from "@remix-run/react"
import { useHydrated } from "remix-utils/use-hydrated"

import Cookies from "js-cookie"

// import { getRavelrySession } from "../services/auth.server.js"

// The user comes to this page after they have signed into Ravelry. Maybe. If I ever figure it out.
export default function SignedIn() {
  let isHydrated = useHydrated() // don't conditionally render anything with cookie data unless hydrated (i.e., definitely on the client)

  const [searchParams] = useSearchParams()
  let authCode = searchParams.get("code")

  if (authCode) {
    Cookies.set("ravsessionid", authCode, { expires: 7, path: "/" })
  } else {
    // authCode = getRavelrySession()
  }

  if (isHydrated && authCode) {
    return <p>You are signed in!</p>
  }

  return <p>You are not signed in maybe?.</p>
}
