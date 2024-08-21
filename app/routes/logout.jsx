import { authenticator } from "../services/auth.server"

export let action = async ({ request, params }) => {
  await authenticator.logout(request, { redirectTo: "/" })
}
