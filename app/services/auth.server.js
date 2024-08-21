import { Authenticator } from "remix-auth"
import { OAuth2Strategy } from "remix-auth-oauth2"

import { sessionStorage } from "./session.server"
import Cookies from "js-cookie"

const domain =
  process.env.NODE_ENV === "development"
    ? "https://localhost:3000"
    : "https://knitnotebook.com"

// Create an instance of the authenticator
export let authenticator = new Authenticator(sessionStorage)

export function getRavelrySession() {
  const sessionId = Cookies.get("ravsessionid")
  console.log("session id in cookie?", sessionId)
  return sessionId
}
console.log(
  "client id:",
  process.env.RAVELRY_API_CLIENT_ID,
  "client secret:",
  process.env.RAVELRY_API
)

/*
  Authenticating with Ravelry:
  https://www.ravelry.com/api#authenticating 
  Use your client ID and client secret to authenticate with Ravelry using any OAuth 2 library.

  Ravelry OAuth 2 URLs are:
  https://www.ravelry.com/oauth2/token
  https://www.ravelry.com/oauth2/auth
  
  Scopes: 
  We don't expect to need scopes beyond the basic 'offline', but we can add them later if needed.
  https://www.ravelry.com/api#permissions
*/
const ravelryStrategy = new OAuth2Strategy(
  {
    clientId: process.env.RAVELRY_API_CLIENT_ID,
    clientSecret: process.env.RAVELRY_API,
    redirectURI: `${domain}/auth/ravelry/callback`,
    scopes: [
      "offline", // standard OAuth 2.0 scope for requesting refresh tokens
    ],
    authorizationEndpoint: `https://www.ravelry.com/oauth2/auth`,
    tokenEndpoint: `https://www.ravelry.com/oauth2/token`,
  },
  async ({ tokens, profile, context, request }) => {
    // here you can use the params above to get the user and return it
    // what you do inside this and how you find the user is up to you
    console.log("authed!", { tokens, profile, context, request })
    return profile
  }
)
console.log("about to set up strategy middleware")

authenticator.use(
  ravelryStrategy,
  // each strategy has a name and can be changed to use another one
  // same strategy multiple times, especially useful for the OAuth2 strategy.
  "ravelry"
)

console.log("done set up strategy middleware")
