import { authenticator } from "../services/auth.server"

export let loader = ({ request, params }) => {
  return authenticator.authenticate(params.provider, request, {
    successRedirect: "/login",
    failureRedirect: "/login-failed",
  })
}

export default function Callback() {
  return <p>Callback</p>
}
