import { redirect } from "@remix-run/node"
import { authenticator } from "../services/auth.server"

export let loader = () => redirect("/login")

export let action = ({ request }) => {
  return authenticator.authenticate("ravelry", request)
}
