import { useCallback, useState } from "react"

import { Button, Typography } from "@mui/material"
import { Form, useSubmit } from "@remix-run/react"

import { authenticator } from "../services/auth.server"
import { useUser } from "../src/UserProvider"

export let action = async ({ request, params }) => {
  console.log("handling logout on the server")
  await authenticator.logout(request, { redirectTo: "/" })
}

export default function Logout() {
  const { user, setLoggedOut } = useUser()
  const submit = useSubmit()

  const handleSubmit = useCallback(
    (e) => {
      console.log("submitting log out")
      setLoggedOut(true)
      submit(
        { logout: "yes" },
        {
          method: "post",
          encType: "application/json",
          navigate: false,
          replace: true,
        },
      )
    },
    [submit],
  )

  return (
    <>
      <Typography variant="h1" component="h1">
        Logout
      </Typography>
      {user?.username && (
        <Form onSubmit={handleSubmit}>
          <Typography variant="body2" component="p">
            Are you sure you want to log out?
          </Typography>
          <Button value="logout" type="submit">
            Yes, Log Out
          </Button>
        </Form>
      )}
      {!user?.username && (
        <Typography variant="body1" component="p">
          You have now logged out of Ravelry.
        </Typography>
      )}
    </>
  )
}
