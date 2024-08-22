import { Authenticator } from "remix-auth"
import { OAuth2Strategy } from "remix-auth-oauth2"
import axios from "axios"

import { sessionStorage } from "./session.server"

const domain =
  process.env.NODE_ENV === "development"
    ? `${process.env.USE_LOCAL_HTTPS ? "https" : "http"}://localhost:${Number(
      process.env.PORT || 3000
    )}`
    : "https://knitnotebook.com"
const redirectURI = `${domain}/auth/ravelry/callback`
console.log("official redirect uri that doesn't work:", redirectURI)

export const authenticator = new Authenticator(sessionStorage, {
  sessionKey: "sessionKey",
  sessionErrorKey: "sessionErrorKey",
})

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
export const ravelryStrategy = new OAuth2Strategy(
  {
    clientId: process.env.RAVELRY_API_CLIENT_ID,
    clientSecret: process.env.RAVELRY_API,
    redirectURI,
    scopes: [
      "offline", // standard OAuth 2.0 scope for requesting refresh tokens
    ],
    authenticateWith: "http_basic_auth", // Ravelry needs this type of auth.
    authorizationEndpoint: `https://www.ravelry.com/oauth2/auth`,
    tokenEndpoint: `https://www.ravelry.com/oauth2/token`,
  },
  async ({ tokens, profile, context, request }) => {
    const response = await axios.get(
      "https://api.ravelry.com/current_user.json",
      {
        headers: {
          Authorization: `Bearer ${tokens.access_token}`,
          Accept: "application/json",
        },
      }
    )
    return { tokens, profile, user: response.data.user }
  }
)

authenticator.use(
  ravelryStrategy,
  // each strategy has a name and can be changed to use another one
  // same strategy multiple times, especially useful for the OAuth2 strategy.
  "ravelry"
)
