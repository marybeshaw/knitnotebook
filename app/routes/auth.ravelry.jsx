import { authenticator } from "../services/auth.server"

// after auth.ravelry.callback, remix sends the user back to this page, which redirects
export const loader = async ({ request }) => {
  return authenticator.authenticate("ravelry", request, {
    successRedirect: "/dashboard",
    failureRedirect: "/login-failed",
  })
}

// When another page submits with a form action to this page,
// we get here and redirect to Ravelry for sign-in.
// After Ravelry, redirect to auth.ravelry.callback, then back to this file's loader(), then off to the dashboard page.
export const action = ({ request }) => {
  return authenticator.authenticate("ravelry", request, {
    successRedirect: "/dashboard",
    failureRedirect: "/login-failed",
  })
}
